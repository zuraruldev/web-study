import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CommandMenu } from './components/CommandMenu';
import { AuthModal } from './components/AuthModal';
import { HomePage } from './pages/HomePage';
import { SubjectPage } from './pages/SubjectPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdminPage } from './pages/AdminPage';
import { fetchSubjects, getStoredUser } from './lib/api';
import type { Subject, User } from './types';

export function App() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    setUser(getStoredUser());
    loadSubjects();
  }, []);

  const loadSubjects = async () => {
    try {
      const data = await fetchSubjects();
      setSubjects(data);
    } catch (err) {
      console.error('Failed to load subjects:', err);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-white">
        <Navbar
          user={user}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenCommand={() => setIsCommandOpen(true)}
          subjects={subjects}
          onUserLogout={() => setUser(null)}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage subjects={subjects} />} />
            <Route path="/subject/:slug" element={<SubjectPage subjects={subjects} />} />
            <Route path="/dashboard" element={<DashboardPage user={user} onOpenAuth={() => setIsAuthOpen(true)} />} />
            <Route path="/admin" element={<AdminPage subjects={subjects} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="border-t border-white/[0.08] bg-[#090d16] py-8 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">StudyHub</span>
              <span>•</span>
              <span>Portal Bank Soal & Materi Kuliah UTS</span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[11px]">
              <span>TI Semester 1</span>
              <span>•</span>
              <span className="text-emerald-400">Arul (260102025)</span>
            </div>
          </div>
        </footer>

        <CommandMenu
          isOpen={isCommandOpen}
          onClose={() => setIsCommandOpen(false)}
          subjects={subjects}
        />

        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          onSuccess={u => setUser(u)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
