const fs = require('fs');
const path = require('path');
const db = require('../server/db/database');

const SOURCE_ROOT = '/home/zura/GoogleDrive/UTS learning materials';
const DEST_ROOT = path.join(__dirname, '..', 'server', 'storage', 'materials');

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

  if (!fs.existsSync(SOURCE_ROOT)) {
    console.warn(`Source root ${SOURCE_ROOT} not found!`);
    return [];
  }

  const subjects = fs.readdirSync(SOURCE_ROOT);
  const syncedFiles = [];

  const insertStmt = db.prepare(`
    INSERT OR REPLACE INTO materials (id, subject_slug, title, filename, file_size, file_format, file_path)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (const subject of subjects) {
    if (subject === 'random pict') continue;
    const subjectPath = path.join(SOURCE_ROOT, subject);
    const stat = fs.statSync(subjectPath);
    if (!stat.isDirectory()) continue;

    const destSubjectDir = path.join(DEST_ROOT, subject);
    if (!fs.existsSync(destSubjectDir)) {
      fs.mkdirSync(destSubjectDir, { recursive: true });
    }

    function scanDir(dir) {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const itemStat = fs.statSync(itemPath);

        if (itemStat.isDirectory()) {
          scanDir(itemPath);
        } else {
          const ext = path.extname(item).toLowerCase().replace('.', '');
          if (!['pdf', 'ppt', 'pptx', 'zip', 'pkt', 'docx', 'txt', 'png'].includes(ext)) {
            continue;
          }

          const targetFile = path.join(destSubjectDir, item);
          if (!fs.existsSync(targetFile) || fs.statSync(targetFile).size !== itemStat.size) {
            fs.copyFileSync(itemPath, targetFile);
          }

          const fileId = `mat_${subject}_${item.replace(/[^a-zA-Z0-9]/g, '_')}`;
          const title = item
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

          const sizeStr = formatBytes(itemStat.size);

          insertStmt.run(
            fileId,
            subject,
            title,
            item,
            sizeStr,
            ext.toUpperCase(),
            path.relative(path.join(__dirname, '..', 'server'), targetFile)
          );

          syncedFiles.push({
            id: fileId,
            subject,
            title,
            filename: item,
            size: sizeStr,
            format: ext.toUpperCase()
          });
        }
      }
    }

    scanDir(subjectPath);
  }

  console.log(`Successfully synced ${syncedFiles.length} files into server storage.`);
  return syncedFiles;
}

if (require.main === module) {
  syncMaterials();
}

module.exports = syncMaterials;
