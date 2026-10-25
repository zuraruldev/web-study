const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const db = require('../db/database');

const JWT_SECRET = process.env.JWT_SECRET || 'studyhub-super-secret-key-2026';

// Fallback hash for constant-time comparisons when user does not exist
const DUMMY_HASH = bcrypt.hashSync('dummy-password-for-timing', 10);

// In-memory brute force tracker per account (5 attempts -> 15 min lock)
const failedLoginAttempts = new Map();

function isAccountLocked(identifier) {
  const record = failedLoginAttempts.get(identifier);
  if (!record) return false;
  if (record.lockedUntil && Date.now() < record.lockedUntil) {
    return true;
  }
  if (record.lockedUntil && Date.now() >= record.lockedUntil) {
    failedLoginAttempts.delete(identifier);
    return false;
  }
  return false;
}

function recordFailedLogin(identifier) {
  const record = failedLoginAttempts.get(identifier) || { count: 0, lockedUntil: null };
  record.count += 1;
  if (record.count >= 5) {
    record.lockedUntil = Date.now() + 15 * 60 * 1000;
  }
  failedLoginAttempts.set(identifier, record);
}

function clearFailedLogin(identifier) {
  failedLoginAttempts.delete(identifier);
}

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Terlalu banyak percobaan masuk dari IP ini. Silakan coba lagi setelah 15 menit.' }
});

const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Terlalu banyak pendaftaran akun dari IP ini. Silakan coba lagi nanti.' }
});

router.post('/register', registerLimiter, (req, res) => {
  const { nim_or_email, name, password } = req.body;

  if (!nim_or_email || !name || !password) {
    return res.status(400).json({ error: 'NIM/Email, Nama, dan Password wajib diisi.' });
  }

  const cleanNimOrEmail = String(nim_or_email).trim().toLowerCase();
  const cleanName = String(name).trim();
  const cleanPassword = String(password);

  if (cleanNimOrEmail.length < 3 || cleanNimOrEmail.length > 100) {
    return res.status(400).json({ error: 'NIM atau Email harus memiliki panjang antara 3 hingga 100 karakter.' });
  }
  if (cleanName.length < 2 || cleanName.length > 100) {
    return res.status(400).json({ error: 'Nama harus memiliki panjang antara 2 hingga 100 karakter.' });
  }
  if (cleanPassword.length < 6 || cleanPassword.length > 72) {
    return res.status(400).json({ error: 'Kata sandi harus memiliki panjang antara 6 hingga 72 karakter.' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE LOWER(nim_or_email) = ?').get(cleanNimOrEmail);
  if (existing) {
    return res.status(409).json({ error: 'NIM atau Email tersebut sudah terdaftar.' });
  }

  const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const passwordHash = bcrypt.hashSync(cleanPassword, 10);

  db.prepare(`
    INSERT INTO users (id, nim_or_email, name, password_hash, role)
    VALUES (?, ?, ?, ?, 'student')
  `).run(userId, cleanNimOrEmail, cleanName, passwordHash);

  const token = jwt.sign(
    { id: userId, nim_or_email: cleanNimOrEmail, name: cleanName, role: 'student' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    message: 'Pendaftaran berhasil.',
    token,
    user: { id: userId, nim_or_email: cleanNimOrEmail, name: cleanName, role: 'student' }
  });
});

router.post('/login', loginLimiter, (req, res) => {
  const { nim_or_email, password } = req.body;

  if (!nim_or_email || !password) {
    return res.status(400).json({ error: 'NIM/Email dan Password wajib diisi.' });
  }

  const cleanNimOrEmail = String(nim_or_email).trim().toLowerCase();
  const cleanPassword = String(password);

  if (cleanPassword.length > 72) {
    return res.status(401).json({ error: 'NIM/Email atau kata sandi tidak cocok.' });
  }

  if (isAccountLocked(cleanNimOrEmail)) {
    return res.status(429).json({
      error: 'Akun terkunci sementara karena terlalu banyak percobaan masuk yang salah. Silakan coba lagi dalam 15 menit.'
    });
  }

  const user = db.prepare('SELECT * FROM users WHERE LOWER(nim_or_email) = ?').get(cleanNimOrEmail);
  const targetHash = user ? user.password_hash : DUMMY_HASH;
  const isMatch = bcrypt.compareSync(cleanPassword, targetHash);

  if (!user || !isMatch) {
    recordFailedLogin(cleanNimOrEmail);
    return res.status(401).json({ error: 'NIM/Email atau kata sandi tidak cocok.' });
  }

  clearFailedLogin(cleanNimOrEmail);

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
