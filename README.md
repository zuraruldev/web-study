# StudyHub — Modern University Exam & CBT Learning Platform

[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.3-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![SQLite](https://img.shields.io/badge/SQLite-better--sqlite3-003B57?logo=sqlite&logoColor=white)](https://github.com/WiseLibs/better-sqlite3)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

**StudyHub** is an all-in-one, developer-grade study portal and Computer-Based Testing (CBT) exam simulator designed for university exam preparation (UTS / UAS). Built with a unified full-stack architecture running completely self-contained with **zero external cloud database dependencies**.

---

## 🌟 Key Features

### 1. 8 Pre-Configured Academic Subjects
Complete curriculum coverage for Semester 1:
- **Alpro** — Algoritma dan Pemrograman (Emerald)
- **Basdat** — Basis Data (Cyan)
- **PSI** — Pengantar Sistem Informasi (Violet)
- **Arsikom** — Arsitektur Komputer (Amber)
- **Ketkom** — Keterampilan Komputer (Teal)
- **B. Indo** — Bahasa Indonesia (Rose)
- **Pancasila** — Pendidikan Pancasila (Red)
- **Matdas** — Matematika Dasar (Indigo)

### 2. Comprehensive Reading Modules & Syllabus
- Formatted with **GitHub-Flavored Markdown (GFM)**, tables, code snippets, and illustrations.
- **Adaptive Navigation Drawer**: Sticky sidebar on desktop; non-intrusive collapsible drawer with Previous/Next buttons on mobile devices so study notes are never covered.
- One-click copy code snippet with visual feedback.

### 3. Realistic 60-Minute CBT Exam Simulator
- **Official Exam Mode**: 40 randomized questions, strict 60-minute countdown timer, navigation jump-grid, hidden answer keys until submission.
- **Practice Mode**: Instant answer check and in-depth explanations for self-paced study.
- Automated score computation, KKM passing verification (70%), weak topic breakdown, and confetti animations (`canvas-confetti`).

### 4. Visual Analytics & Readiness Radar
- **Custom Interactive SVG Radar Chart**: 8-axis polygonal capability map with dynamic node hovering and KKM 70% benchmark threshold.
- **Radial Ring Gauges**: Real-time visualization of cumulative average scores and readiness target completion.
- **Recent Exam History & Leaderboard**: Tracking top student scores and completion times.

### 5. Interactive Sandboxes
- **PHP Training Playground**: In-browser PHP scripting environment with execution timing and terminal output.
- **SQL Restaurant Sandbox**: Interactive query editor with a 6-table relational schema (`kategori_menu`, `menu`, `pelanggan`, `pesanan`, `detail_pesanan`, `pembayaran`), table metadata viewer, and one-click database reset.

### 6. Admin Panel & Automated Material Sync
- Full CRUD for CBT question bank and registered student users.
- Automatic material synchronization (`npm run sync`) that indexes physical PDFs and PPT slides into the database.
- One-click JSON database backup and restore.

---

## 🛡️ Security Architecture

StudyHub enforces a strict defense-in-depth security model:

- **HTTP Protection**: Integrated `helmet` headers and scoped CORS rules.
- **Multi-Tier Rate Limiting (`express-rate-limit`)**:
  - Global API: 600 requests per 15 minutes.
  - Login Endpoint: 20 requests per 15 minutes.
  - Registration Endpoint: 10 accounts per hour.
  - Sandbox Executions: Dedicated limits to prevent server resource abuse.
- **Account Brute-Force Lockout**: Automatic 15-minute lockout per NIM/Email after 5 consecutive failed login attempts.
- **Timing Attack Mitigation**: Employs constant-time bcrypt verification using a pre-computed `DUMMY_HASH` to prevent user enumeration.
- **Password & Session Security**: Strong password hashing via `bcryptjs` (salt rounds: 10) and stateless 7-day signed JWT tokens.
- **Strict Role-Based Access Control (RBAC)**: All administrative endpoints (`/api/admin/*`) require verified admin JWT tokens or a valid `X-Admin-Key` header.
- **SQL Sandbox Isolation**: Runs exclusively in an in-memory database (`:memory:`) completely isolated from production data. Multi-statement chaining (`;`) and hazardous SQLite pragmas (`ATTACH`, `DETACH`, `VACUUM`, `LOAD_EXTENSION`) are rejected.
- **PHP Sandbox Hardening**:
  - 12,000 character payload limit and backtick shell command blocking.
  - Regex filter blocking high-risk functions (`exec`, `system`, `passthru`, `file_get_contents`, `curl_exec`, etc.).
  - File isolation inside a restricted temporary directory (`0700` directory, `0600` file).
  - CLI flags: `max_execution_time=2s`, `memory_limit=16M`, `allow_url_fopen=0`, `open_basedir`, and comprehensive `disable_functions`.
  - Process hard timeout at 3000ms.

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 (`react`, `react-dom`) |
| **Language & Tooling** | TypeScript 6, Vite 8, Oxlint |
| **Styling & UI** | Tailwind CSS v3, Lucide React, Canvas Confetti |
| **Routing & Markdown** | React Router DOM v7, React Markdown, Remark GFM |
| **Backend Runtime** | Node.js LTS, Express.js 5 |
| **Primary Database** | SQLite via `better-sqlite3` (synchronous C-binding, ACID) |
| **Process Manager** | Linux Systemd (`web-study.service`) |
| **Reverse Proxy & Net** | Nginx, Tailscale Private Mesh VPN |

---

## 📁 Repository Structure

```text
web-study/
├── client/                     # React 19 + TypeScript + Vite SPA
│   ├── src/
│   │   ├── components/         # CBTQuiz, ReaderView, PHPSandbox, SQLSandbox, etc.
│   │   ├── pages/              # HomePage, SubjectPage, DashboardPage, AdminPage
│   │   ├── lib/                # API client, theme tokens
│   │   ├── types.ts            # Shared TypeScript type definitions
│   │   ├── App.tsx             # Root component and application layout
│   │   └── main.tsx            # React DOM mounting entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── server/                     # Express.js REST API
│   ├── db/
│   │   ├── database.js         # SQLite connection & schema initialization
│   │   ├── seeders.js          # Pre-configured subjects, modules & quiz seeder
│   │   ├── restoranSandbox.js  # In-memory SQL playground engine
│   │   └── data/               # Subject questions & explanations datasets
│   ├── routes/
│   │   ├── api.js              # Core API endpoints (subjects, CBT, sandboxes)
│   │   ├── auth.js             # User registration, login & profile
│   │   └── admin.js            # Admin management, backup & restore
│   ├── storage/materials/      # Physical storage directory for study files
│   └── server.js               # Express server entry point
├── scripts/
│   └── sync-materials.js       # Auto-indexer for downloadable PDF/PPT materials
├── package.json                # Root scripts and server dependencies
└── README.md
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** v20+ LTS
- **npm** v10+
- **PHP CLI** (optional, required if using the PHP Training sandbox locally)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/zuraruldev/web-study.git
cd web-study

# Install server dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..
```

### 2. Environment Variables (Optional)
Create an `.env` file or export environment variables:
```bash
PORT=3000
NODE_ENV=development
ADMIN_EMAIL=admin@studyhub.local
ADMIN_PASSWORD=change_this_password
JWT_SECRET=your_jwt_secret_key
ADMIN_SECRET_KEY=your_admin_secret_key
```

### 3. Run Development Server
Run backend and frontend concurrently:
```bash
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

### 4. Build for Production
```bash
# Build the client into client/dist/
npm run build

# Start the unified production server
npm start
```
The server serves both the API endpoints and the built frontend application at `http://localhost:3000`.

---

## ⚙️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs backend server and client Vite dev server concurrently |
| `npm run build` | Compiles TypeScript and builds production client assets (`client/dist/`) |
| `npm start` | Launches the production Node.js server |
| `npm run sync` | Scans `server/storage/materials/` and synchronizes files to database |
| `npm run seed` | Re-seeds initial database state |
| `npm test` | Runs component and type integrity verifications |

---

## 🌐 Production Deployment (Systemd + Nginx)

### Systemd Service (`/etc/systemd/system/web-study.service`)
```ini
[Unit]
Description=StudyHub CBT & Exam Platform
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/var/www/web-study
ExecStart=/usr/bin/node server/server.js
Restart=always
RestartSec=5
Environment=PORT=3000
Environment=NODE_ENV=production
Environment=ADMIN_EMAIL=admin@yourdomain.com
Environment=ADMIN_PASSWORD=your_secure_password
Environment=JWT_SECRET=your_jwt_secret
Environment=ADMIN_SECRET_KEY=your_admin_key

[Install]
WantedBy=multi-user.target
```

### Nginx Reverse Proxy Configuration
```nginx
server {
    server_name arul.cc.cd;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 👤 Author
Developed with pride by **Arul** ([@zuraruldev](https://github.com/zuraruldev))
- Email: `manarulhdyt671@gmail.com`
- Platform: StudyHub Exam & UTS Portal
