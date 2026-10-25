import React, { useState, useEffect } from 'react';
import {
  ShieldAlert,
  Plus,
  Trash2,
  Edit3,
  RotateCcw,
  Download,
  Check,
  AlertCircle,
  Users,
  HelpCircle,
  Search,
  X,
  LogOut
} from 'lucide-react';
import type { Subject, User } from '../types';
import { getAuthToken } from '../lib/api';

interface AdminPageProps {
  subjects: Subject[];
  user?: User | null;
  onOpenAuth?: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ subjects, user, onOpenAuth }) => {
  // Purge legacy hardcoded default key if present in browser localStorage
  if (typeof window !== 'undefined' && localStorage.getItem('studyhub_admin_key') === 'studyhub-admin-secret-2026') {
    localStorage.removeItem('studyhub_admin_key');
  }

  const [adminKey, setAdminKey] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('studyhub_admin_key') && localStorage.getItem('studyhub_admin_key') !== 'studyhub-admin-secret-2026')
      ? localStorage.getItem('studyhub_admin_key')!
      : ''
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'questions' | 'users'>('questions');

  // Questions State
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>('alpro');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [subtopic, setSubtopic] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [points, setPoints] = useState(10);

  // Users State
  const [users, setUsers] = useState<any[]>([]);
  const [userSearch, setUserSearch] = useState('');
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [userNimOrEmail, setUserNimOrEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState<'student' | 'admin'>('student');
  const [userPassword, setUserPassword] = useState('');

  const getAdminHeaders = (extra: Record<string, string> = {}) => {
    const headers: Record<string, string> = { ...extra };
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (adminKey) {
      headers['x-admin-key'] = adminKey;
    }
    return headers;
  };

  useEffect(() => {
    // Only auto-verify if the user is explicitly an admin OR if they previously saved an admin key
    if (user?.role === 'admin' || (adminKey && adminKey.trim().length > 0)) {
      verifyKey();
    } else {
      setIsAuthenticated(false);
    }
  }, [user, selectedSubject, activeTab]);

  const handleAdminLogout = () => {
    localStorage.removeItem('studyhub_admin_key');
    setAdminKey('');
    setIsAuthenticated(false);
    setAuthError(null);
  };

  const verifyKey = async () => {
    setLoading(true);
    setAuthError(null);
    try {
      const qRes = await fetch(`/api/admin/questions?subject=${selectedSubject}`, {
        headers: getAdminHeaders()
      });

      if (qRes.ok) {
        const qData = await qRes.json();
        setQuestions(qData.questions || []);
        setIsAuthenticated(true);
        if (adminKey && adminKey.trim().length > 0) {
          localStorage.setItem('studyhub_admin_key', adminKey.trim());
        }

        if (activeTab === 'users') {
          const uRes = await fetch('/api/admin/users', {
            headers: getAdminHeaders()
          });
          if (uRes.ok) {
            const uData = await uRes.json();
            setUsers(uData.users || []);
          }
        }
      } else {
        const err = await qRes.json().catch(() => ({}));
        setIsAuthenticated(false);
        setAuthError(err.error || 'Akses ditolak: Kunci admin atau akun tidak valid.');
      }
    } catch {
      setIsAuthenticated(false);
      setAuthError('Gagal menghubungkan ke server.');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload = {
      subject_slug: selectedSubject,
      subtopic,
      question_text: questionText,
      code_snippet: codeSnippet.trim() ? codeSnippet : null,
      options,
      correct_index: correctIndex,
      explanation,
      points
    };

    try {
      const endpoint = editingId ? `/api/admin/questions/${editingId}` : '/api/admin/questions';
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: getAdminHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Gagal menyimpan soal.');

      setMessage({ text: 'Soal berhasil disimpan.', type: 'success' });
      resetQuestionForm();
      verifyKey();
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuestion = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus butir soal ini?')) return;
    try {
      const res = await fetch(`/api/admin/questions/${id}`, {
        method: 'DELETE',
        headers: getAdminHeaders()
      });
      if (res.ok) {
        setMessage({ text: 'Soal berhasil dihapus.', type: 'success' });
        verifyKey();
      }
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    }
  };

  const handleEditQuestion = (q: any) => {
    setEditingId(q.id);
    setSubtopic(q.subtopic);
    setQuestionText(q.question_text);
    setCodeSnippet(q.code_snippet || '');
    setOptions(q.options || ['', '', '', '']);
    setCorrectIndex(q.correct_index);
    setExplanation(q.explanation || '');
    setPoints(q.points || 10);
  };

  const resetQuestionForm = () => {
    setEditingId(null);
    setSubtopic('');
    setQuestionText('');
    setCodeSnippet('');
    setOptions(['', '', '', '']);
    setCorrectIndex(0);
    setExplanation('');
    setPoints(10);
  };

  // User Management Handlers
  const handleOpenAddUser = () => {
    setEditingUserId(null);
    setUserNimOrEmail('');
    setUserName('');
    setUserRole('student');
    setUserPassword('');
    setIsUserModalOpen(true);
  };

  const handleOpenEditUser = (user: any) => {
    setEditingUserId(user.id);
    setUserNimOrEmail(user.nim_or_email);
    setUserName(user.name);
    setUserRole(user.role);
    setUserPassword('');
    setIsUserModalOpen(true);
  };

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload: any = {
      nim_or_email: userNimOrEmail,
      name: userName,
      role: userRole
    };
    if (userPassword.trim()) {
      payload.password = userPassword.trim();
    }

    try {
      const endpoint = editingUserId ? `/api/admin/users/${editingUserId}` : '/api/admin/users';
      const method = editingUserId ? 'PUT' : 'POST';

      const res = await fetch(endpoint, {
        method,
        headers: getAdminHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Gagal menyimpan data pengguna.');

      setMessage({ text: data.message, type: 'success' });
      setIsUserModalOpen(false);
      verifyKey();
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id: string, name: string) => {
    if (!confirm(`Hapus akun pengguna "${name}" beserta seluruh riwayat pengerjaan kuisnya?`)) return;
    try {
      const res = await fetch(`/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: getAdminHeaders()
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ text: data.message, type: 'success' });
        verifyKey();
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      setMessage({ text: err.message, type: 'error' });
    }
  };

  const handleSyncMaterials = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch('/api/admin/sync-materials', {
        method: 'POST',
        headers: getAdminHeaders()
      });
      const data = await res.json();
      if (res.ok) {
        setMessage({ text: `Sinkronisasi selesai! ${data.syncedCount} berkas dipetakan ke server.`, type: 'success' });
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      setMessage({ text: `Gagal sinkronisasi: ${err.message}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-16">
        <div className="p-8 rounded-2xl bg-[#0e1422] border border-white/10 shadow-2xl space-y-4">
          <div className="flex items-center gap-3 text-amber-400">
            <ShieldAlert size={24} />
            <h2 className="font-bold text-slate-100 text-lg">Autentikasi Administrator</h2>
          </div>

          {user && user.role !== 'admin' ? (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-1">
              <p className="font-semibold">Akses Terbatas Mahasiswa</p>
              <p className="text-slate-300">
                Anda sedang masuk sebagai <strong>{user.name}</strong> ({user.nim_or_email}). Panel ini dikhususkan untuk Administrator (<code className="text-amber-200">usmanarul90@gmail.com</code>).
              </p>
            </div>
          ) : (
            <p className="text-xs text-slate-400 leading-relaxed">
              Masuk dengan akun Administrator atau masukkan Admin Secret Key untuk mengelola portal StudyHub.
            </p>
          )}

          {authError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 flex items-center gap-2">
              <AlertCircle size={15} />
              <span>{authError}</span>
            </div>
          )}

          {!user && onOpenAuth && (
            <button
              type="button"
              onClick={onOpenAuth}
              className="w-full py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/10 text-xs font-medium transition-colors"
            >
              Masuk dengan Akun Admin
            </button>
          )}

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink mx-3 text-[11px] text-slate-500 uppercase font-mono">atau gunakan Secret Key</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <form onSubmit={e => { e.preventDefault(); verifyKey(); }} className="space-y-3">
            <input
              type="password"
              value={adminKey}
              onChange={e => setAdminKey(e.target.value)}
              placeholder="Masukkan Admin Secret Key..."
              className="w-full bg-[#161f33] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
            />

            <button
              type="submit"
              disabled={loading || !adminKey.trim()}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-xs transition-all shadow-lg shadow-emerald-900/30"
            >
              {loading ? 'Memverifikasi...' : 'Buka Panel Admin'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    u.nim_or_email.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className="space-y-8 py-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono">
            <ShieldAlert size={14} />
            <span>Sesi Administrator Aktif</span>
          </div>
          <h1 className="text-xl font-bold text-slate-100 mt-1">Panel Pengelolaan Portal StudyHub</h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSyncMaterials}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-200 border border-white/10 transition-colors"
          >
            <RotateCcw size={13} className={loading ? 'animate-spin' : ''} />
            <span>Sinkronkan Berkas GDrive</span>
          </button>

          <a
            href={`/api/admin/backup?admin_key=${adminKey}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-200 border border-white/10 transition-colors"
          >
            <Download size={13} />
            <span>Ekspor Backup JSON</span>
          </a>

          <button
            onClick={handleAdminLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/20 text-xs font-medium transition-colors"
          >
            <LogOut size={13} />
            <span>Keluar Admin</span>
          </button>
        </div>
      </div>

      {message && (
        <div className={`p-4 rounded-xl text-xs flex items-center gap-2.5 border ${
          message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' : 'bg-rose-500/10 border-rose-500/20 text-rose-300'
        }`}>
          {message.type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
          <span>{message.text}</span>
        </div>
      )}

      {/* Main Tabs: Questions vs Users */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-1">
        <button
          onClick={() => setActiveTab('questions')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
            activeTab === 'questions'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle size={15} />
          <span>Kelola Bank Soal CBT</span>
        </button>

        <button
          onClick={() => setActiveTab('users')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-colors ${
            activeTab === 'users'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users size={15} />
          <span>Basis Data Pengguna (Users)</span>
        </button>
      </div>

      {/* Tab 1: Questions Management */}
      {activeTab === 'questions' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Plus size={16} className="text-emerald-400" />
                <span>{editingId ? 'Edit Butir Soal' : 'Tambah Soal Baru'}</span>
              </h3>
              {editingId && (
                <button onClick={resetQuestionForm} className="text-xs text-slate-400 hover:text-slate-200">
                  Batal Edit
                </button>
              )}
            </div>

            <form onSubmit={handleSaveQuestion} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Mata Kuliah</label>
                  <select
                    value={selectedSubject}
                    onChange={e => setSelectedSubject(e.target.value)}
                    className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2 text-slate-200"
                  >
                    {subjects.map(s => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Subtopik / Bab Modul</label>
                  <input
                    type="text"
                    required
                    value={subtopic}
                    onChange={e => setSubtopic(e.target.value)}
                    placeholder="Contoh: Modul II: Array Homogen"
                    className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2 text-slate-200 placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Teks Pertanyaan</label>
                <textarea
                  required
                  rows={3}
                  value={questionText}
                  onChange={e => setQuestionText(e.target.value)}
                  placeholder="Tuliskan butir soal pertanyaan di sini..."
                  className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2 text-slate-200 placeholder-slate-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Cuplikan Kode / Snippet (Opsional)</label>
                <textarea
                  rows={3}
                  value={codeSnippet}
                  onChange={e => setCodeSnippet(e.target.value)}
                  placeholder="<?php echo 'Hello World'; ?>"
                  className="w-full bg-[#070a10] border border-white/10 rounded-lg p-2 font-mono text-slate-200 placeholder-slate-600 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-slate-400">Pilihan Jawaban (Pilih Radio untuk Kunci Benar):</label>
                {options.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="correct_choice"
                      checked={correctIndex === idx}
                      onChange={() => setCorrectIndex(idx)}
                      className="accent-emerald-500"
                    />
                    <span className="font-mono text-slate-400 w-4">{String.fromCharCode(65 + idx)}.</span>
                    <input
                      type="text"
                      required
                      value={opt}
                      onChange={e => {
                        const updated = [...options];
                        updated[idx] = e.target.value;
                        setOptions(updated);
                      }}
                      placeholder={`Opsi ${String.fromCharCode(65 + idx)}`}
                      className="flex-1 bg-[#161f33] border border-white/10 rounded-lg p-2 text-slate-200"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Pembahasan / Rationale Konsep</label>
                <textarea
                  rows={2}
                  value={explanation}
                  onChange={e => setExplanation(e.target.value)}
                  placeholder="Jelaskan alasan mengapa opsi tersebut benar secara teoritis..."
                  className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2 text-slate-200 placeholder-slate-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-lg shadow-emerald-900/30"
              >
                {loading ? 'Menyimpan...' : editingId ? 'Perbarui Soal' : 'Tambahkan ke Bank Soal'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-6 bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-semibold text-slate-200">
                Daftar Soal ({questions.length})
              </h3>
              <span className="text-xs font-mono text-emerald-400 uppercase">{selectedSubject}</span>
            </div>

            <div className="space-y-3 max-h-[700px] overflow-y-auto pr-1">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-white/[0.05] flex items-center justify-center font-mono text-[10px] text-slate-400">
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">{q.subtopic}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleEditQuestion(q)}
                        className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                        title="Edit"
                      >
                        <Edit3 size={13} />
                      </button>
                      <button
                        onClick={() => handleDeleteQuestion(q.id)}
                        className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-rose-500/10"
                        title="Hapus"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-200 font-medium line-clamp-2">{q.question_text}</p>
                  <div className="text-[11px] text-slate-400">
                    Kunci: <span className="font-mono text-emerald-400">{String.fromCharCode(65 + q.correct_index)}</span> ({q.options[q.correct_index]})
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Users Database Management */}
      {activeTab === 'users' && (
        <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-base font-bold text-slate-100">Manajemen Pengguna & Mahasiswa</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Kelola hak akses role, reset password, dan pantau aktivitas peserta ujian.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search size={14} className="absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Cari nama atau NIM..."
                  value={userSearch}
                  onChange={e => setUserSearch(e.target.value)}
                  className="w-full bg-[#161f33] border border-white/10 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <button
                onClick={handleOpenAddUser}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-lg shadow-emerald-900/30 shrink-0"
              >
                <Plus size={14} />
                <span>Tambah Pengguna</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#12192b] text-slate-200 border-b border-white/10 font-mono">
                <tr>
                  <th className="px-4 py-3">Nama Mahasiswa</th>
                  <th className="px-4 py-3">NIM / Email</th>
                  <th className="px-4 py-3">Peran (Role)</th>
                  <th className="px-4 py-3">Total Kuis</th>
                  <th className="px-4 py-3">Rerata Skor</th>
                  <th className="px-4 py-3">Terdaftar</th>
                  <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                      Tidak ada data pengguna yang cocok.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map(u => (
                    <tr key={u.id} className="hover:bg-white/[0.02]">
                      <td className="px-4 py-3 font-sans font-medium text-slate-100">{u.name}</td>
                      <td className="px-4 py-3 text-emerald-400">{u.nim_or_email}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          u.role === 'admin'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        }`}>
                          {u.role.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-4 py-3">{u.quiz_count} kali</td>
                      <td className="px-4 py-3 font-bold text-slate-100">{u.avg_score}%</td>
                      <td className="px-4 py-3 text-slate-500 text-[11px]">{new Date(u.created_at).toLocaleDateString()}</td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEditUser(u)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]"
                            title="Edit Akun"
                          >
                            <Edit3 size={13} />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(u.id, u.name)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10"
                            title="Hapus Akun"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* User Add/Edit Modal */}
      {isUserModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-[#0e1422] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-semibold text-slate-100 text-sm">
                {editingUserId ? 'Edit Akun Pengguna' : 'Tambah Pengguna Baru'}
              </h3>
              <button onClick={() => setIsUserModalOpen(false)} className="text-slate-400 hover:text-slate-200">
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveUser} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={e => setUserName(e.target.value)}
                  placeholder="Contoh: Manarul Hidayat"
                  className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">NIM atau Email Kampus</label>
                <input
                  type="text"
                  required
                  value={userNimOrEmail}
                  onChange={e => setUserNimOrEmail(e.target.value)}
                  placeholder="260102025 atau nama@student.ac.id"
                  className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Peran (Role)</label>
                <select
                  value={userRole}
                  onChange={e => setUserRole(e.target.value as any)}
                  className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2.5 text-slate-100"
                >
                  <option value="student">Student (Mahasiswa)</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">
                  {editingUserId ? 'Kata Sandi Baru (Kosongkan jika tidak diubah)' : 'Kata Sandi'}
                </label>
                <input
                  type="password"
                  required={!editingUserId}
                  value={userPassword}
                  onChange={e => setUserPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#161f33] border border-white/10 rounded-lg p-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsUserModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-slate-400 hover:text-slate-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-900/30"
                >
                  {loading ? 'Menyimpan...' : 'Simpan Data'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
