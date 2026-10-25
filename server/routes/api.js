const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const rateLimit = require('express-rate-limit');
const db = require('../db/database');
const { executeQuery, resetSandbox, getSchemaMetadata } = require('../db/restoranSandbox');

const phpLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Terlalu banyak permintaan eksekusi kode. Silakan tunggu 1 menit.' }
});

const sqlLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Terlalu banyak query SQL. Silakan tunggu sebentar.' }
});

router.get('/subjects', (req, res) => {
  const subjects = db.prepare('SELECT * FROM subjects ORDER BY order_index ASC').all();

  const enriched = subjects.map(s => {
    const matCount = db.prepare('SELECT COUNT(*) as c FROM materials WHERE subject_slug = ?').get(s.slug).c;
    const expCount = db.prepare('SELECT COUNT(*) as c FROM explanations WHERE subject_slug = ?').get(s.slug).c;
    const qCount = db.prepare('SELECT COUNT(*) as c FROM questions WHERE subject_slug = ?').get(s.slug).c;

    return {
      ...s,
      materials_count: matCount,
      explanations_count: expCount,
      questions_count: qCount
    };
  });

  res.json({ subjects: enriched });
});

router.get('/materials/:subject', (req, res) => {
  const { subject } = req.params;
  const materials = db.prepare('SELECT * FROM materials WHERE subject_slug = ? ORDER BY title ASC').all(subject);
  res.json({ materials });
});

router.get('/materials/download/:id', (req, res) => {
  const { id } = req.params;
  const mat = db.prepare('SELECT * FROM materials WHERE id = ?').get(id);
  if (!mat) {
    return res.status(404).json({ error: 'File tidak ditemukan.' });
  }

  const absPath = path.join(__dirname, '..', mat.file_path);
  if (!fs.existsSync(absPath)) {
    return res.status(404).json({ error: 'Berkas fisik tidak ditemukan di server.' });
  }

  res.download(absPath, mat.filename);
});

router.get('/explanations/:subject', (req, res) => {
  const { subject } = req.params;
  const chapters = db.prepare('SELECT * FROM explanations WHERE subject_slug = ? ORDER BY chapter_order ASC').all(subject);
  res.json({ chapters });
});

router.get('/quiz/:subject', (req, res) => {
  const { subject } = req.params;
  const limit = parseInt(req.query.limit, 10) || 40;
  const mode = req.query.mode || 'exam';

  let questions = db.prepare('SELECT * FROM questions WHERE subject_slug = ?').all(subject);

  if (mode === 'exam') {
    questions = questions.sort(() => 0.5 - Math.random()).slice(0, limit);
  }

  const sanitized = questions.map(q => {
    const options = JSON.parse(q.options_json);
    const item = {
      id: q.id,
      subject_slug: q.subject_slug,
      subtopic: q.subtopic,
      question_text: q.question_text,
      code_snippet: q.code_snippet,
      options,
      points: q.points
    };

    if (mode === 'practice') {
      item.correct_index = q.correct_index;
      item.explanation = q.explanation;
    }

    return item;
  });

  res.json({ questions: sanitized, total: sanitized.length });
});

router.post('/quiz/evaluate', (req, res) => {
  const { subject_slug, answers, mode, time_spent_seconds, user_id, guest_name } = req.body;

  if (!subject_slug || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'subject_slug dan answers wajib disertakan.' });
  }

  let totalPoints = 0;
  let earnedPoints = 0;
  let correctCount = 0;
  const breakdown = [];
  const topicStats = {};

  for (const item of answers) {
    const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(item.questionId);
    if (!q) continue;

    totalPoints += q.points;
    const isCorrect = item.selectedOptionIndex === q.correct_index;

    if (isCorrect) {
      earnedPoints += q.points;
      correctCount++;
    }

    if (!topicStats[q.subtopic]) {
      topicStats[q.subtopic] = { total: 0, correct: 0 };
    }
    topicStats[q.subtopic].total++;
    if (isCorrect) topicStats[q.subtopic].correct++;

    breakdown.push({
      questionId: q.id,
      questionText: q.question_text,
      codeSnippet: q.code_snippet,
      subtopic: q.subtopic,
      selectedOptionIndex: item.selectedOptionIndex,
      correctIndex: q.correct_index,
      isCorrect,
      explanation: q.explanation,
      points: isCorrect ? q.points : 0
    });
  }

  const scorePercentage = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
  const isPassed = scorePercentage >= 70;

  const weakTopics = Object.keys(topicStats)
    .filter(t => (topicStats[t].correct / topicStats[t].total) < 0.7)
    .map(t => ({
      topic: t,
      accuracy: Math.round((topicStats[t].correct / topicStats[t].total) * 100),
      total: topicStats[t].total,
      correct: topicStats[t].correct
    }));

  const sessionId = `qs_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  db.prepare(`
    INSERT INTO quiz_sessions (id, user_id, guest_name, subject_slug, mode, score, total_questions, correct_count, time_spent_seconds)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    sessionId,
    user_id || null,
    guest_name || 'Tamu Mahasiswa',
    subject_slug,
    mode || 'exam',
    scorePercentage,
    answers.length,
    correctCount,
    time_spent_seconds || 0
  );

  res.json({
    sessionId,
    score: scorePercentage,
    isPassed,
    correctCount,
    totalQuestions: answers.length,
    earnedPoints,
    totalPoints,
    timeSpentSeconds: time_spent_seconds || 0,
    weakTopics,
    breakdown
  });
});

router.get('/sql/schema', (req, res) => {
  const metadata = getSchemaMetadata();
  res.json({ schema: metadata });
});

router.post('/sql/execute', sqlLimiter, (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query tidak boleh kosong.' });
  }

  const result = executeQuery(query);
  res.json(result);
});

router.post('/sql/reset', sqlLimiter, (req, res) => {
  resetSandbox();
  res.json({ success: true, message: 'Database Restoran sandbox berhasil direset ke status awal.' });
});

router.post('/php/execute', phpLimiter, (req, res) => {
  const { code } = req.body;
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ success: false, error: 'Kode PHP tidak boleh kosong.' });
  }

  if (code.length > 12000) {
    return res.status(400).json({ success: false, error: 'Kode PHP melebihi batas maksimal 12.000 karakter.' });
  }

  // Reject shell execution backticks
  if (code.includes('`')) {
    return res.status(403).json({
      success: false,
      error: 'Peringatan Keamanan: Karakter backtick (eksekusi shell) dibatasi dalam sandbox.'
    });
  }

  // Security check: block dangerous system execution and file/network access functions
  const dangerousPatterns = /\b(shell_exec|exec|system|passthru|proc_open|popen|pcntl_exec|dl|eval|assert|include|require|include_once|require_once|file_put_contents|fwrite|fputs|unlink|rmdir|mkdir|rename|copy|chmod|chown|touch|symlink|link|curl_exec|curl_multi_exec|socket_create|socket_connect|fsockopen|pfsockopen|stream_socket_client|stream_socket_server|putenv|getenv|ini_set|mail|mb_send_mail|phpinfo|readfile|file_get_contents|fopen)\b/i;
  if (dangerousPatterns.test(code)) {
    return res.status(403).json({
      success: false,
      error: 'Peringatan Keamanan: Fungsi akses sistem, file, atau jaringan dibatasi dalam lingkungan sandbox ini.'
    });
  }

  const sandboxDir = path.join('/tmp', 'studyhub-php-sandbox');
  try {
    if (!fs.existsSync(sandboxDir)) {
      fs.mkdirSync(sandboxDir, { recursive: true, mode: 0o700 });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Gagal menyiapkan direktori sandbox.' });
  }

  const tmpId = `php_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const tmpFilePath = path.join(sandboxDir, `${tmpId}.php`);

  try {
    fs.writeFileSync(tmpFilePath, code, { encoding: 'utf-8', mode: 0o600 });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Gagal membuat berkas sementara.' });
  }

  const startTime = Date.now();
  const { exec } = require('child_process');

  const disableFunctions = [
    'exec', 'passthru', 'shell_exec', 'system', 'proc_open', 'popen', 'pcntl_exec',
    'curl_exec', 'curl_multi_exec', 'parse_ini_file', 'show_source', 'file_get_contents',
    'file_put_contents', 'fopen', 'fwrite', 'fread', 'unlink', 'copy', 'rename',
    'mkdir', 'rmdir', 'file', 'readfile', 'scandir', 'glob', 'chown', 'chmod',
    'touch', 'link', 'symlink', 'putenv', 'getenv', 'phpinfo', 'dl', 'mail',
    'mb_send_mail', 'socket_create', 'socket_connect', 'fsockopen', 'pfsockopen',
    'stream_socket_client', 'stream_socket_server', 'assert'
  ].join(',');

  const phpCmd = `php -d display_errors=1 -d max_execution_time=2 -d memory_limit=16M -d allow_url_fopen=0 -d allow_url_include=0 -d open_basedir="${sandboxDir}" -d disable_functions="${disableFunctions}" "${tmpFilePath}"`;

  exec(phpCmd, { timeout: 3000 }, (error, stdout, stderr) => {
    const executionTimeMs = Date.now() - startTime;

    // Clean up temporary script
    try {
      if (fs.existsSync(tmpFilePath)) fs.unlinkSync(tmpFilePath);
    } catch (e) {
      // ignore unlink error
    }

    if (error && error.killed) {
      return res.json({
        success: false,
        error: 'Eksekusi dibatalkan: Waktu eksekusi melebihi batas maksimal 2 detik (kemungkinan Infinite Loop).',
        executionTimeMs
      });
    }

    if (error && error.code === 127) {
      return res.json({
        success: false,
        error: 'Runtime PHP tidak terpasang di server.',
        executionTimeMs
      });
    }

    res.json({
      success: !error || !stderr,
      output: stdout,
      error: stderr || (error ? error.message : null),
      executionTimeMs
    });
  });
});

router.get('/leaderboard', (req, res) => {
  const { subject } = req.query;

  let query = `
    SELECT 
      qs.id,
      qs.score,
      qs.time_spent_seconds,
      qs.completed_at,
      qs.subject_slug,
      COALESCE(u.name, qs.guest_name, 'Tamu') as student_name,
      COALESCE(u.nim_or_email, 'GUEST') as student_identifier
    FROM quiz_sessions qs
    LEFT JOIN users u ON qs.user_id = u.id
    WHERE qs.mode = 'exam'
  `;

  const params = [];
  if (subject) {
    query += ' AND qs.subject_slug = ?';
    params.push(subject);
  }

  query += ' ORDER BY qs.score DESC, qs.time_spent_seconds ASC LIMIT 20';

  const rows = db.prepare(query).all(...params);
  res.json({ leaderboard: rows });
});

router.get('/user/progress', (req, res) => {
  const { userId } = req.query;

  let sessions = [];
  if (userId) {
    sessions = db.prepare('SELECT * FROM quiz_sessions WHERE user_id = ? ORDER BY completed_at DESC').all(userId);
  } else {
    sessions = db.prepare('SELECT * FROM quiz_sessions ORDER BY completed_at DESC LIMIT 10').all();
  }

  const subjects = db.prepare('SELECT slug, name FROM subjects').all();
  const subjectProgress = subjects.map(s => {
    const subSessions = sessions.filter(ss => ss.subject_slug === s.slug);
    const avgScore = subSessions.length > 0 
      ? Math.round(subSessions.reduce((acc, curr) => acc + curr.score, 0) / subSessions.length)
      : 0;

    return {
      slug: s.slug,
      name: s.name,
      totalQuizzes: subSessions.length,
      averageScore: avgScore,
      isReady: avgScore >= 70
    };
  });

  res.json({
    sessions,
    totalQuizzes: sessions.length,
    subjectProgress
  });
});

module.exports = router;
