const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/database');
const syncMaterials = require('../../scripts/sync-materials');

const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || 'studyhub-admin-secret-2026';

function adminAuth(req, res, next) {
  const secret = req.headers['x-admin-key'] || req.query.admin_key;
  if (secret === ADMIN_SECRET) {
    return next();
  }
  return res.status(403).json({ error: 'Akses ditolak: Admin secret key tidak valid.' });
}

router.use(adminAuth);

router.get('/questions', (req, res) => {
  const { subject } = req.query;
  let stmt = 'SELECT * FROM questions';
  const params = [];
  if (subject) {
    stmt += ' WHERE subject_slug = ?';
    params.push(subject);
  }
  stmt += ' ORDER BY id DESC';

  const rows = db.prepare(stmt).all(...params).map(r => ({
    ...r,
    options: JSON.parse(r.options_json)
  }));
  res.json({ questions: rows });
});

router.post('/questions', (req, res) => {
  const { subject_slug, subtopic, question_text, code_snippet, options, correct_index, explanation, points } = req.body;

  if (!subject_slug || !question_text || !Array.isArray(options) || correct_index === undefined) {
    return res.status(400).json({ error: 'Data soal tidak lengkap.' });
  }

  const id = `q_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  db.prepare(`
    INSERT INTO questions (id, subject_slug, subtopic, question_text, code_snippet, options_json, correct_index, explanation, points)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id,
    subject_slug,
    subtopic || 'Umum',
    question_text,
    code_snippet || null,
    JSON.stringify(options),
    correct_index,
    explanation || '',
    points || 10
  );

  res.status(201).json({ success: true, id, message: 'Soal berhasil ditambahkan.' });
});

router.put('/questions/:id', (req, res) => {
  const { id } = req.params;
  const { subtopic, question_text, code_snippet, options, correct_index, explanation, points } = req.body;

  const existing = db.prepare('SELECT id FROM questions WHERE id = ?').get(id);
  if (!existing) {
    return res.status(404).json({ error: 'Soal tidak ditemukan.' });
  }

  db.prepare(`
    UPDATE questions SET
      subtopic = COALESCE(?, subtopic),
      question_text = COALESCE(?, question_text),
      code_snippet = ?,
      options_json = COALESCE(?, options_json),
      correct_index = COALESCE(?, correct_index),
      explanation = COALESCE(?, explanation),
      points = COALESCE(?, points)
    WHERE id = ?
  `).run(
    subtopic,
    question_text,
    code_snippet !== undefined ? code_snippet : null,
    options ? JSON.stringify(options) : null,
    correct_index,
    explanation,
    points,
    id
  );

  res.json({ success: true, message: 'Soal berhasil diperbarui.' });
});

router.delete('/questions/:id', (req, res) => {
  const { id } = req.params;
  const result = db.prepare('DELETE FROM questions WHERE id = ?').run(id);
  if (result.changes === 0) {
    return res.status(404).json({ error: 'Soal tidak ditemukan.' });
  }
  res.json({ success: true, message: 'Soal berhasil dihapus.' });
});

// ==========================================
// USER DATABASE MANAGEMENT
// ==========================================

router.get('/users', (req, res) => {
  const users = db.prepare(`
    SELECT u.id, u.nim_or_email, u.name, u.role, u.created_at,
           (SELECT COUNT(*) FROM quiz_sessions qs WHERE qs.user_id = u.id) as quiz_count,
           COALESCE((SELECT ROUND(AVG(qs.score)) FROM quiz_sessions qs WHERE qs.user_id = u.id), 0) as avg_score
    FROM users u
    ORDER BY u.created_at DESC
  `).all();
  res.json({ users });
});

router.post('/users', (req, res) => {
  const { nim_or_email, name, password, role } = req.body;
  if (!nim_or_email || !name || !password) {
    return res.status(400).json({ error: 'NIM/Email, Nama, dan Password wajib diisi.' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE nim_or_email = ?').get(nim_or_email);
  if (existing) {
    return res.status(409).json({ error: 'NIM atau Email tersebut sudah terdaftar.' });
  }

  const id = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  const passwordHash = bcrypt.hashSync(password, 10);

  db.prepare(`
    INSERT INTO users (id, nim_or_email, name, password_hash, role)
    VALUES (?, ?, ?, ?, ?)
  `).run(id, nim_or_email, name, passwordHash, role || 'student');

  res.status(201).json({ success: true, id, message: 'Pengguna berhasil ditambahkan.' });
});

router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { nim_or_email, name, role, password } = req.body;

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  if (!user) {
    return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
  }

  let passwordHash = user.password_hash;
  if (password && password.trim().length > 0) {
    passwordHash = bcrypt.hashSync(password.trim(), 10);
  }

  db.prepare(`
    UPDATE users SET
      nim_or_email = COALESCE(?, nim_or_email),
      name = COALESCE(?, name),
      role = COALESCE(?, role),
      password_hash = ?
    WHERE id = ?
  `).run(
    nim_or_email,
    name,
    role,
    passwordHash,
    id
  );

  res.json({ success: true, message: 'Data pengguna berhasil diperbarui.' });
});

router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.prepare('DELETE FROM quiz_sessions WHERE user_id = ?').run(id);
  const result = db.prepare('DELETE FROM users WHERE id = ?').run(id);
  if (result.changes === 0) {
    return res.status(404).json({ error: 'Pengguna tidak ditemukan.' });
  }
  res.json({ success: true, message: 'Pengguna dan riwayat ujiannya berhasil dihapus.' });
});

router.post('/sync-materials', (req, res) => {
  try {
    const synced = syncMaterials();
    res.json({ success: true, syncedCount: synced.length, files: synced });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/backup', (req, res) => {
  const backup = {
    exportedAt: new Date().toISOString(),
    subjects: db.prepare('SELECT * FROM subjects').all(),
    explanations: db.prepare('SELECT * FROM explanations').all(),
    questions: db.prepare('SELECT * FROM questions').all(),
    materials: db.prepare('SELECT * FROM materials').all()
  };

  res.setHeader('Content-Disposition', 'attachment; filename="studyhub-backup.json"');
  res.json(backup);
});

router.post('/restore', (req, res) => {
  const { subjects, explanations, questions, materials } = req.body;

  if (!subjects || !questions) {
    return res.status(400).json({ error: 'Format berkas backup tidak valid.' });
  }

  const restoreTx = db.transaction(() => {
    if (Array.isArray(subjects)) {
      const insSubj = db.prepare('INSERT OR REPLACE INTO subjects VALUES (@id, @slug, @name, @icon, @accent, @description, @order_index)');
      for (const s of subjects) insSubj.run(s);
    }
    if (Array.isArray(explanations)) {
      const insExp = db.prepare('INSERT OR REPLACE INTO explanations VALUES (@id, @subject_slug, @topic_title, @chapter_order, @content_markdown)');
      for (const e of explanations) insExp.run(e);
    }
    if (Array.isArray(questions)) {
      const insQ = db.prepare('INSERT OR REPLACE INTO questions VALUES (@id, @subject_slug, @subtopic, @question_text, @code_snippet, @options_json, @correct_index, @explanation, @points)');
      for (const q of questions) insQ.run(q);
    }
    if (Array.isArray(materials)) {
      const insMat = db.prepare('INSERT OR REPLACE INTO materials VALUES (@id, @subject_slug, @title, @filename, @file_size, @file_format, @file_path, @uploaded_at)');
      for (const m of materials) insMat.run(m);
    }
  });

  try {
    restoreTx();
    res.json({ success: true, message: 'Database berhasil dipulihkan dari backup.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
