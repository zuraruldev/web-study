import React, { useState, useEffect } from 'react';
import {
  Award,
  User as UserIcon,
  TrendingUp
} from 'lucide-react';
import { fetchUserProgress, fetchLeaderboard } from '../lib/api';
import { SubjectBadge } from '../components/SubjectBadge';
import type { User } from '../types';

interface DashboardPageProps {
  user: User | null;
  onOpenAuth: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ user, onOpenAuth }) => {
  const [progressData, setProgressData] = useState<any>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'progress' | 'leaderboard'>('progress');

  useEffect(() => {
    loadDashboard();
  }, [user]);

  const loadDashboard = async () => {
    try {
      const [prog, lead] = await Promise.all([
        fetchUserProgress(),
        fetchLeaderboard()
      ]);
      setProgressData(prog);
      setLeaderboard(lead);
    } catch (err) {
      console.error('Failed to load dashboard:', err);
    }
  };

  const sessions = progressData?.sessions || [];
  const subjectProgress = progressData?.subjectProgress || [];

  const totalQuizzes = sessions.length;
  const overallAvg = totalQuizzes > 0
    ? Math.round(sessions.reduce((acc: number, curr: any) => acc + curr.score, 0) / totalQuizzes)
    : 0;
  const readySubjectsCount = subjectProgress.filter((s: any) => s.isReady).length;

  return (
    <div className="space-y-8 py-6">
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1422] border border-white/10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-lg font-mono">
            {user ? user.name.charAt(0) : 'G'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-100">
                {user ? user.name : 'Dashboard Tamu Mahasiswa'}
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {user ? 'Terdaftar' : 'Mode Tamu'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {user
                ? `NIM/ID: ${user.nim_or_email} • Pemantauan Capaian Kesiapan Ujian UTS`
                : 'Skor sesi Anda tersimpan secara lokal. Masuk untuk mengunci riwayat permanen di leaderboard.'}
            </p>
          </div>
        </div>

        {!user && (
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-all shadow-lg shadow-emerald-900/30 shrink-0"
          >
            <UserIcon size={14} />
            <span>Masuk / Buat Akun</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 border-b border-white/10 pb-1">
        <button
          onClick={() => setActiveTab('progress')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
            activeTab === 'progress'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <TrendingUp size={15} />
          <span>Statistik Kesiapan Saya</span>
        </button>

        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
            activeTab === 'leaderboard'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award size={15} />
          <span>Papan Peringkat (Leaderboard)</span>
        </button>
      </div>

      {activeTab === 'progress' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-2">
              <span className="text-xs font-mono text-slate-400">Total Kuis Dikerjakan</span>
              <div className="text-3xl font-extrabold text-slate-100">{totalQuizzes}</div>
              <span className="text-[11px] text-slate-500">Mencakup mode ujian dan latihan</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-2">
              <span className="text-xs font-mono text-slate-400">Rata-Rata Skor Akumulasi</span>
              <div className={`text-3xl font-extrabold ${overallAvg >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {overallAvg}%
              </div>
              <span className="text-[11px] text-slate-500">Standar KKM Kelulusan UTS adalah 70%</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-2">
              <span className="text-xs font-mono text-slate-400">Mata Kuliah Siap UTS</span>
              <div className="text-3xl font-extrabold text-cyan-400">
                {readySubjectsCount} / {subjectProgress.length}
              </div>
              <span className="text-[11px] text-slate-500">Mata kuliah dengan rerata nilai ≥ 70%</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-4">
            <h3 className="text-sm font-semibold text-slate-200">Radar Kesiapan 8 Mata Kuliah UTS</h3>
            <div className="space-y-4">
              {subjectProgress.map((sp: any) => (
                <div key={sp.slug} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <SubjectBadge slug={sp.slug} size="sm" />
                      <span className="text-slate-300 font-medium">{sp.name}</span>
                    </div>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-slate-500">{sp.totalQuizzes} kuis</span>
                      <span className={`font-semibold ${sp.averageScore >= 70 ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {sp.averageScore}%
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        sp.averageScore >= 70 ? 'bg-emerald-500' : sp.averageScore > 0 ? 'bg-amber-500' : 'bg-transparent'
                      }`}
                      style={{ width: `${Math.min(100, sp.averageScore)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-4">
            <h3 className="text-sm font-semibold text-slate-200">Riwayat Pengerjaan Kuis Terkini</h3>
            {sessions.length === 0 ? (
              <p className="text-xs text-slate-500 py-4 text-center">
                Belum ada riwayat kuis. Mulai kerjakan kuis CBT di halaman mata kuliah!
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-[#12192b] text-slate-300 border-b border-white/10 font-mono">
                    <tr>
                      <th className="px-4 py-2.5">Mata Kuliah</th>
                      <th className="px-4 py-2.5">Mode</th>
                      <th className="px-4 py-2.5">Skor</th>
                      <th className="px-4 py-2.5">Ketepatan</th>
                      <th className="px-4 py-2.5">Durasi</th>
                      <th className="px-4 py-2.5">Tanggal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono">
                    {sessions.map((s: any) => (
                      <tr key={s.id} className="hover:bg-white/[0.02]">
                        <td className="px-4 py-2.5">
                          <SubjectBadge slug={s.subject_slug} size="sm" />
                        </td>
                        <td className="px-4 py-2.5 uppercase text-[10px] text-slate-400">{s.mode}</td>
                        <td className="px-4 py-2.5">
                          <span className={`font-bold ${s.score >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {s.score}%
                          </span>
                        </td>
                        <td className="px-4 py-2.5">{s.correct_count} / {s.total_questions}</td>
                        <td className="px-4 py-2.5">{Math.floor(s.time_spent_seconds / 60)}m {s.time_spent_seconds % 60}s</td>
                        <td className="px-4 py-2.5 text-slate-500 text-[11px]">{new Date(s.completed_at).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h3 className="text-sm font-semibold text-slate-200">Papan Peringkat Skor Simulasi Ujian Resmi</h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Peringkat tertinggi berdasarkan skor dan efisiensi waktu pengerjaan.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#12192b] text-slate-300 border-b border-white/10 font-mono">
                <tr>
                  <th className="px-4 py-3 w-16">Rank</th>
                  <th className="px-4 py-3">Nama Mahasiswa</th>
                  <th className="px-4 py-3">Mata Kuliah</th>
                  <th className="px-4 py-3">Skor</th>
                  <th className="px-4 py-3">Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {leaderboard.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                      Belum ada sesi ujian resmi yang diselesaikan.
                    </td>
                  </tr>
                ) : (
                  leaderboard.map((row: any, idx: number) => {
                    const isTop1 = idx === 0;
                    const isTop2 = idx === 1;
                    const isTop3 = idx === 2;

                    return (
                      <tr key={row.id} className="hover:bg-white/[0.02]">
                        <td className="px-4 py-3 font-bold">
                          {isTop1 ? (
                            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">1</span>
                          ) : isTop2 ? (
                            <span className="w-6 h-6 rounded-full bg-slate-300/20 text-slate-300 flex items-center justify-center">2</span>
                          ) : isTop3 ? (
                            <span className="w-6 h-6 rounded-full bg-amber-700/20 text-amber-600 flex items-center justify-center">3</span>
                          ) : (
                            <span className="text-slate-500 pl-2">{idx + 1}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 font-sans font-medium text-slate-200">
                          {row.student_name}
                        </td>
                        <td className="px-4 py-3">
                          <SubjectBadge slug={row.subject_slug} size="sm" />
                        </td>
                        <td className="px-4 py-3 text-emerald-400 font-bold text-sm">
                          {row.score}%
                        </td>
                        <td className="px-4 py-3 text-slate-400">
                          {Math.floor(row.time_spent_seconds / 60)}m {row.time_spent_seconds % 60}s
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
