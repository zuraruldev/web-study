import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  GraduationCap,
  Search,
  BarChart3,
  User as UserIcon,
  LogOut,
  ChevronDown,
  ShieldAlert,
  Sun,
  Moon
} from 'lucide-react';
import type { User, Subject } from '../types';
import { getSubjectMeta } from './SubjectBadge';
import { setAuthToken, setStoredUser } from '../lib/api';
import { useTheme } from '../lib/theme';

interface NavbarProps {
  user: User | null;
  onOpenAuth: () => void;
  onOpenCommand: () => void;
  subjects: Subject[];
  onUserLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenAuth,
  onOpenCommand,
  subjects,
  onUserLogout
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    setAuthToken(null);
    setStoredUser(null);
    onUserLogout();
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090d16]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <GraduationCap size={18} />
            </div>
            <div>
              <span className="font-semibold text-slate-100 tracking-tight flex items-center gap-1.5">
                StudyHub <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">UTS</span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'bg-white/[0.06] text-white' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
              }`}
            >
              Beranda
            </Link>

            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] transition-colors"
              >
                <span>Mata Kuliah</span>
                <ChevronDown size={14} />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-xl bg-[#0e1422] border border-white/10 shadow-2xl p-2 z-50 space-y-1">
                  {subjects.map(s => {
                    const meta = getSubjectMeta(s.slug);
                    const Icon = meta.icon;
                    return (
                      <Link
                        key={s.slug}
                        to={`/subject/${s.slug}`}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-slate-300 hover:bg-white/[0.04] hover:text-white transition-colors"
                      >
                        <Icon size={14} className={meta.color} />
                        <span className="truncate">{s.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/dashboard"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                location.pathname === '/dashboard' 
                  ? 'bg-white/[0.06] text-white' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
              }`}
            >
              <BarChart3 size={14} />
              <span>Dashboard & Leaderboard</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommand}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 hover:border-white/20 text-xs text-slate-400 hover:text-slate-200 transition-all"
          >
            <Search size={14} />
            <span>Cari topik...</span>
            <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 text-slate-400">
              Ctrl+K
            </kbd>
          </button>

          <Link
            to="/admin"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-colors"
            title="Admin Manager"
          >
            <ShieldAlert size={16} />
          </Link>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-colors"
            title={isDark ? "Ganti ke Mode Terang (White Time)" : "Ganti ke Mode Gelap"}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun size={17} className="text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon size={17} className="text-indigo-400 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <div className="flex flex-col text-right">
                <span className="text-xs font-medium text-slate-200 truncate max-w-[120px]">
                  {user.name}
                </span>
                <span className="text-[10px] font-mono text-emerald-400">
                  {user.nim_or_email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                title="Keluar"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 text-xs font-medium transition-all"
            >
              <UserIcon size={14} />
              <span>Masuk</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
