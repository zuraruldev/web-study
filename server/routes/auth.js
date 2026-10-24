const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/database');

const JWT_SECRET = process.env.JWT_SECRET || 'studyhub-super-secret-key-2026';

router.post('/register', (req, res) => {
  const { nim_or_email, name, password } = req.body;

  if (!nim_or_email || !name || !password) {
    return res.status(400).json({ error: 'NIM/Email, Nama, dan Password wajib diisi.' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE nim_or_email = ?').get(nim_or_email);
  if (existing) {
    return res.status(409).json({ error: 'NIM atau Email tersebut sudah terdaftar.' });
  }

  const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const passwordHash = bcrypt.hashSync(password, 10);

  db.prepare(`
    INSERT INTO users (id, nim_or_email, name, password_hash, role)
    VALUES (?, ?, ?, ?, 'student')
  `).run(userId, nim_or_email, name, passwordHash);

  const token = jwt.sign(
    { id: userId, nim_or_email, name, role: 'student' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    message: 'Pendaftaran berhasil.',
    token,
    user: { id: userId, nim_or_email, name, role: 'student' }
  });
});

router.post('/login', (req, res) => {
  const { nim_or_email, password } = req.body;

  if (!nim_or_email || !password) {
    return res.status(400).json({ error: 'NIM/Email dan Password wajib diisi.' });
  }

  const user = db.prepare('SELECT * FROM users WHERE nim_or_email = ?').get(nim_or_email);
  if (!user) {
    return res.status(401).json({ error: 'NIM/Email atau kata sandi tidak cocok.' });
  }

  const isMatch = bcrypt.compareSync(password, user.password_hash);
  if (!isMatch) {
    return res.status(401).json({ error: 'NIM/Email atau kata sandi tidak cocok.' });
  }

  const token = jwt.sign(
    { id: user.id, nim_or_email: user.nim_or_email, name: user.name, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    message: 'Login berhasil.',
    token,
    user: { id: user.id, nim_or_email: user.nim_or_email, name: user.name, role: user.role }
  });
});

router.get('/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token otentikasi tidak ditemukan.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = db.prepare('SELECT id, nim_or_email, name, role, created_at FROM users WHERE id = ?').get(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'Akun pengguna tidak ditemukan.' });
    }
    res.json({ user });
  } catch (err) {
    res.status(401).json({ error: 'Sesi kedaluwarsa atau token tidak valid.' });
  }
});

module.exports = router;
