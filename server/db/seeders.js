const bcrypt = require('bcryptjs');
const db = require('./database');
const subjects = require('./subjectsData');
const explanations = require('./explanationsData');
const questions = require('./questionsData');

function seedDatabase() {
  const insertSubject = db.prepare(`
    INSERT OR REPLACE INTO subjects (id, slug, name, icon, accent, description, order_index)
    VALUES (@id, @slug, @name, @icon, @accent, @description, @order_index)
  `);

  const insertExplanation = db.prepare(`
    INSERT OR REPLACE INTO explanations (id, subject_slug, topic_title, chapter_order, content_markdown)
    VALUES (@id, @subject_slug, @topic_title, @chapter_order, @content_markdown)
  `);

  const insertQuestion = db.prepare(`
    INSERT OR REPLACE INTO questions (id, subject_slug, subtopic, question_text, code_snippet, options_json, correct_index, explanation, points)
    VALUES (@id, @subject_slug, @subtopic, @question_text, @code_snippet, @options_json, @correct_index, @explanation, @points)
  `);

  const seedTransaction = db.transaction(() => {
    for (const subj of subjects) {
      insertSubject.run(subj);
    }

    for (const exp of explanations) {
      insertExplanation.run(exp);
    }

    for (const q of questions) {
      insertQuestion.run(q);
    }

    const adminCheck = db.prepare('SELECT id FROM users WHERE role = ?').get('admin');
    if (!adminCheck) {
      const adminHash = bcrypt.hashSync('admin123', 10);
      db.prepare(`
        INSERT INTO users (id, nim_or_email, name, password_hash, role)
        VALUES (?, ?, ?, ?, ?)
      `).run('usr_admin_default', 'admin@studyhub.local', 'Administrator UTS', adminHash, 'admin');
    }
  });

  seedTransaction();
  console.log(`Database seeded: ${subjects.length} subjects, ${explanations.length} chapters, ${questions.length} questions.`);

  const syncMaterials = require('../../scripts/sync-materials');
  try {
    syncMaterials();
  } catch (err) {
    console.warn('Material auto-sync skipped:', err.message);
  }
}

if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;
