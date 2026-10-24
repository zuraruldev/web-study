import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Database, BarChart3, Terminal, ArrowRight, X } from 'lucide-react';
import type { Subject } from '../types';
import { getSubjectMeta } from './SubjectBadge';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  subjects: Subject[];
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, subjects }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredSubjects = subjects.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.slug.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl bg-[#0e1422] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-white/10">
          <Search size={18} className="text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Cari mata kuliah, modul, kuis CBT, atau aksi... (ESC untuk tutup)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200">
            <X size={16} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto p-2 space-y-4">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 py-1">
              Navigasi Cepat Mata Kuliah
            </div>
            <div className="space-y-1">
              {filteredSubjects.map(s => {
                const meta = getSubjectMeta(s.slug);
                const Icon = meta.icon;
                return (
                  <button
                    key={s.slug}
                    onClick={() => handleSelect(`/subject/${s.slug}`)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm text-slate-300 hover:bg-white/[0.04] hover:text-slate-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-md ${meta.bg} ${meta.border} border`}>
                        <Icon size={16} className={meta.color} />
                      </div>
                      <div>
                        <div className="font-medium text-slate-200 group-hover:text-white">{s.name}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{s.description}</div>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 py-1">
              Aksi & Fitur Utama
            </div>
            <div className="space-y-1">
              <button
                onClick={() => handleSelect('/subject/alpro?tab=quiz')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm text-slate-300 hover:bg-white/[0.04] hover:text-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Terminal size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-200">Mulai Latihan CBT Alpro</div>
                    <div className="text-xs text-slate-500">15 Soal simulasi UTS berserta pembahasan lengkap</div>
                  </div>
                </div>
                <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-400" />
              </button>

              <button
                onClick={() => handleSelect('/subject/basdat?tab=sql')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm text-slate-300 hover:bg-white/[0.04] hover:text-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Database size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-200">Buka Sandbox SQL Database Restoran</div>
                    <div className="text-xs text-slate-500">Uji query SQL langsung pada tabel schema riil</div>
                  </div>
                </div>
                <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-400" />
              </button>

              <button
                onClick={() => handleSelect('/dashboard')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm text-slate-300 hover:bg-white/[0.04] hover:text-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <div className="font-medium text-slate-200">Lihat Dashboard & Leaderboard</div>
                    <div className="text-xs text-slate-500">Statistik skor rata-rata, topik lemah, dan peringkat</div>
                  </div>
                </div>
                <ArrowRight size={14} className="text-slate-600 group-hover:text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 py-2 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-slate-500">
          <span>Gunakan panah untuk navigasi</span>
          <span className="font-mono">ESC untuk keluar</span>
        </div>
      </div>
    </div>
  );
};
