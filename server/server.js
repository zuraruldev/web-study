const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const seedDatabase = require('./db/seeders');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

seedDatabase();

const storageDir = path.join(__dirname, 'storage', 'materials');
if (!fs.existsSync(storageDir)) {
  fs.mkdirSync(storageDir, { recursive: true });
}
app.use('/materials', express.static(storageDir));

app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.use((req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({
      status: 'StudyHub API is active',
      docs: '/api/subjects',
      environment: process.env.NODE_ENV || 'development'
    });
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`StudyHub Server running on http://127.0.0.1:${PORT}`);
});
