const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'studyhub.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    nim_or_email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'student',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS subjects (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    icon TEXT NOT NULL,
    accent TEXT NOT NULL,
    description TEXT NOT NULL,
    order_index INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS explanations (
    id TEXT PRIMARY KEY,
    subject_slug TEXT NOT NULL,
    topic_title TEXT NOT NULL,
    chapter_order INTEGER NOT NULL,
    content_markdown TEXT NOT NULL,
    FOREIGN KEY (subject_slug) REFERENCES subjects (slug) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    subject_slug TEXT NOT NULL,
    subtopic TEXT NOT NULL,
    question_text TEXT NOT NULL,
    code_snippet TEXT,
    options_json TEXT NOT NULL,
    correct_index INTEGER NOT NULL,
    explanation TEXT NOT NULL,
    points INTEGER DEFAULT 10,
    FOREIGN KEY (subject_slug) REFERENCES subjects (slug) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS quiz_sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    guest_name TEXT,
    subject_slug TEXT NOT NULL,
    mode TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_count INTEGER NOT NULL,
    time_spent_seconds INTEGER NOT NULL,
    completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_slug) REFERENCES subjects (slug) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS materials (
    id TEXT PRIMARY KEY,
    subject_slug TEXT NOT NULL,
    title TEXT NOT NULL,
    filename TEXT NOT NULL,
    file_size TEXT NOT NULL,
    file_format TEXT NOT NULL,
    file_path TEXT NOT NULL,
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_slug) REFERENCES subjects (slug) ON DELETE CASCADE
  );
`);

module.exports = db;
