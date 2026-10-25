const fs = require('fs');
const path = require('path');
const db = require('../server/db/database');

const SOURCE_ROOT = '/home/zura/GoogleDrive/UTS learning materials';
const DEST_ROOT = path.join(__dirname, '..', 'server', 'storage', 'materials');

const ALLOWED_EXTS = new Set(['pdf', 'ppt', 'pptx', 'zip', 'pkt', 'docx', 'txt', 'png', 'jpg', 'jpeg']);

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function syncMaterials() {
  if (!fs.existsSync(DEST_ROOT)) {
    fs.mkdirSync(DEST_ROOT, { recursive: true });
  }

  // Step 1: If Google Drive source root exists locally, sync new/updated files into server/storage/materials
  if (fs.existsSync(SOURCE_ROOT)) {
    try {
      const subjects = fs.readdirSync(SOURCE_ROOT);
      for (const subject of subjects) {
        if (subject === 'random pict') continue;
        const subjectPath = path.join(SOURCE_ROOT, subject);
        if (!fs.statSync(subjectPath).isDirectory()) continue;

        const destSubjectDir = path.join(DEST_ROOT, subject);
        if (!fs.existsSync(destSubjectDir)) {
          fs.mkdirSync(destSubjectDir, { recursive: true });
        }

        const scanAndCopy = (dir) => {
          const items = fs.readdirSync(dir);
          for (const item of items) {
            const itemPath = path.join(dir, item);
            const itemStat = fs.statSync(itemPath);

            if (itemStat.isDirectory()) {
              scanAndCopy(itemPath);
            } else {
              const ext = path.extname(item).toLowerCase().replace('.', '');
              if (!ALLOWED_EXTS.has(ext)) continue;

              const targetFile = path.join(destSubjectDir, item);
              if (!fs.existsSync(targetFile) || fs.statSync(targetFile).size !== itemStat.size) {
                fs.copyFileSync(itemPath, targetFile);
              }
            }
          }
        };

        scanAndCopy(subjectPath);
      }
    } catch (err) {
      console.warn('Warning during source copy:', err.message);
    }
  }

  // Step 2: Index all materials stored in DEST_ROOT into SQLite materials table
  const syncedFiles = [];
  const validSubjects = new Set(
    db.prepare('SELECT slug FROM subjects').all().map(s => s.slug)
  );

  const insertStmt = db.prepare(`
    INSERT OR REPLACE INTO materials (id, subject_slug, title, filename, file_size, file_format, file_path)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  const destEntries = fs.readdirSync(DEST_ROOT);
  const syncTx = db.transaction(() => {
    for (const subject of destEntries) {
      if (!validSubjects.has(subject)) continue;

      const subjectDir = path.join(DEST_ROOT, subject);
      if (!fs.statSync(subjectDir).isDirectory()) continue;

      const files = fs.readdirSync(subjectDir);
      for (const file of files) {
        const filePath = path.join(subjectDir, file);
        const stat = fs.statSync(filePath);
        if (!stat.isFile()) continue;

        const ext = path.extname(file).toLowerCase().replace('.', '');
        if (!ALLOWED_EXTS.has(ext)) continue;

        const fileId = `mat_${subject}_${file.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const title = file
          .replace(/\.[^/.]+$/, '')
          .replace(/[-_]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        const sizeStr = formatBytes(stat.size);
        const relPath = path.relative(path.join(__dirname, '..', 'server'), filePath);

        insertStmt.run(
          fileId,
          subject,
          title,
          file,
          sizeStr,
          ext.toUpperCase(),
          relPath
        );

        syncedFiles.push({
          id: fileId,
          subject,
          title,
          filename: file,
          size: sizeStr,
          format: ext.toUpperCase()
        });
      }
    }
  });

  syncTx();
  console.log(`Successfully synced ${syncedFiles.length} files into server storage.`);
  return syncedFiles;
}

if (require.main === module) {
  syncMaterials();
}

module.exports = syncMaterials;
