import React, { useState, useEffect } from 'react';
import {
  Award,
  User as UserIcon,
  TrendingUp,
  Target,
  Activity,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { fetchUserProgress, fetchLeaderboard } from '../lib/api';
import { SubjectBadge, getSubjectMeta } from '../components/SubjectBadge';
import type { User } from '../types';

interface DashboardPageProps {
  user: User | null;
  onOpenAuth: () => void;
}

interface RadarChartProps {
  data: Array<{
    slug: string;
    name: string;
    totalQuizzes: number;
    averageScore: number;
    isReady: boolean;
  }>;
  hoveredSlug: string | null;
  onHoverSlug: (slug: string | null) => void;
}

const ReadinessRadarChart: React.FC<RadarChartProps> = ({
  data,
  hoveredSlug,
  onHoverSlug
}) => {
  const cx = 190;
  const cy = 165;
  const R = 105;
  const N = data.length || 8;
  const levels = [0.25, 0.5, 0.75, 1.0];

  const getCoordinates = (index: number, radius: number) => {
    const angle = -Math.PI / 2 + (index * 2 * Math.PI) / N;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
      angle
    };
  };

  const kkmPoints = data
    .map((_, i) => {
      const { x, y } = getCoordinates(i, R * 0.7);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const userPoints = data
    .map((item, i) => {
      const score = Math.max(item.averageScore || 0, 5);
      const { x, y } = getCoordinates(i, (score / 100) * R);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="relative w-full max-w-[390px] mx-auto select-none">
      <svg viewBox="0 0 380 340" className="w-full h-auto overflow-visible">
        <defs>
          <radialGradient id="radarUserGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
          </radialGradient>
          <filter id="radarGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric Web Grid */}
        {levels.map((lvl) => {
          const pts = data
            .map((_, i) => {
              const { x, y } = getCoordinates(i, R * lvl);
              return `${x.toFixed(1)},${y.toFixed(1)}`;
            })
            .join(' ');
          return (
            <polygon
              key={lvl}
              points={pts}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1"
            />
          );
        })}

        {/* Spoke Axes */}
        {data.map((item, i) => {
          const { x, y } = getCoordinates(i, R);
          const isHovered = hoveredSlug === item.slug;
          return (
            <line
              key={item.slug}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke={isHovered ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}
              strokeWidth={isHovered ? '2' : '1'}
              className="transition-colors duration-200"
            />
          );
        })}

        {/* Level Percentage Markers */}
        {levels.map((lvl) => (
          <text
            key={`lvl-${lvl}`}
            x={cx + 4}
            y={cy - R * lvl + 10}
            className="text-[9px] fill-slate-500 font-mono select-none"
          >
            {Math.round(lvl * 100)}%
          </text>
        ))}

        {/* KKM Benchmark Polygon (70%) */}
        <polygon
          points={kkmPoints}
          fill="rgba(245, 158, 11, 0.04)"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.65"
        />

        {/* User Data Polygon */}
        <polygon
          points={userPoints}
          fill="url(#radarUserGlow)"
          stroke="#10b981"
          strokeWidth="2.5"
          filter="url(#radarGlowFilter)"
          className="transition-all duration-300"
        />

        {/* Vertex Nodes and Labels */}
        {data.map((item, i) => {
          const score = Math.max(item.averageScore || 0, 5);
          const { x: nx, y: ny } = getCoordinates(i, (score / 100) * R);
          const { x: lx, y: ly, angle } = getCoordinates(i, R + 26);
          const meta = getSubjectMeta(item.slug);
          const isHovered = hoveredSlug === item.slug;

          const cos = Math.cos(angle);
          const sin = Math.sin(angle);
          let textAnchor: 'start' | 'end' | 'middle' = 'middle';
          if (cos > 0.25) textAnchor = 'start';
          else if (cos < -0.25) textAnchor = 'end';

          let dy = 4;
          if (sin < -0.4) dy = -4;
          else if (sin > 0.4) dy = 12;

          return (
            <g
              key={item.slug}
              className="cursor-pointer"
              onMouseEnter={() => onHoverSlug(item.slug)}
              onMouseLeave={() => onHoverSlug(null)}
            >
              {/* Outer pulse strictly centered on the node */}
              {isHovered && (
                <circle
                  cx={nx}
                  cy={ny}
                  r="5"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="1.5"
                >
                  <animate attributeName="r" values="5;14" dur="1.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.85;0" dur="1.2s" repeatCount="indefinite" />
                </circle>
              )}

              <circle
                cx={nx}
                cy={ny}
                r={isHovered ? 6 : 4}
                fill={item.averageScore >= 70 ? '#10b981' : item.averageScore > 0 ? '#f59e0b' : '#334155'}
                stroke="#0e1422"
                strokeWidth="2"
                className="transition-all duration-200"
              />

              <text
                x={lx}
                y={ly + dy}
                textAnchor={textAnchor}
                className="select-none text-[11px] font-mono transition-colors duration-200"
              >
                <tspan
                  x={lx}
                  fill={isHovered ? '#34d399' : '#cbd5e1'}
                  fontWeight={isHovered ? 'bold' : '600'}
                >
                  {meta.label}
                </tspan>
                <tspan
                  x={lx}
                  dy="12"
                  fill={
                    item.averageScore >= 70
                      ? '#34d399'
                      : item.averageScore > 0
                      ? '#fbbf24'
                      : '#64748b'
                  }
                  fontWeight="bold"
                >
                  {item.averageScore}%
                </tspan>
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend & Indicator Below Radar */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-slate-400 mt-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-500/50" />
          <span>Skor Mahasiswa</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3.5 h-0.5 border-t-2 border-dashed border-amber-400" />
          <span className="text-amber-400/90">Ambang KKM (70%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full border border-white/20" />
          <span className="text-slate-500">Maksimal 100%</span>
        </div>
      </div>
    </div>
  );
};

export const DashboardPage: React.FC<DashboardPageProps> = ({ user, onOpenAuth }) => {
  const [progressData, setProgressData] = useState<any>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'progress' | 'leaderboard'>('progress');
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

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

  useEffect(() => {
    loadDashboard();
  }, [user]);

  const sessions = progressData?.sessions || [];
  const subjectProgress = progressData?.subjectProgress || [];

  const totalQuizzes = sessions.length;
  const overallAvg = totalQuizzes > 0
    ? Math.round(sessions.reduce((acc: number, curr: any) => acc + curr.score, 0) / totalQuizzes)
    : 0;
  const readySubjectsCount = subjectProgress.filter((s: any) => s.isReady).length;

  const examCount = sessions.filter((s: any) => s.mode === 'exam').length;
  const practiceCount = sessions.filter((s: any) => s.mode === 'practice').length;

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
          {/* Top 3 Stat Cards with Metric Gauges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Card 1: Total Kuis */}
            <div className="p-5 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Total Kuis Dikerjakan</span>
                <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Activity size={13} />
                </span>
              </div>
              
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-extrabold text-slate-100">{totalQuizzes}</div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {examCount} Ujian
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {practiceCount} Latihan
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="w-full h-1.5 rounded-full bg-white/[0.05] overflow-hidden flex">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-500"
                    style={{
                      width: totalQuizzes > 0 ? `${(examCount / totalQuizzes) * 100}%` : '0%'
                    }}
                  />
                  <div
                    className="h-full bg-cyan-500 transition-all duration-500"
                    style={{
                      width: totalQuizzes > 0 ? `${(practiceCount / totalQuizzes) * 100}%` : '0%'
                    }}
                  />
                </div>
                <span className="text-[11px] text-slate-500 block">Mencakup mode ujian dan latihan</span>
              </div>
            </div>

            {/* Card 2: Rata-Rata Skor with Circular Ring Gauge */}
            <div className="p-5 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl flex items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Target size={13} className="text-emerald-400" />
                  <span>Rata-Rata Skor Akumulasi</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className={`text-3xl font-extrabold ${overallAvg >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {overallAvg}%
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    overallAvg >= 70 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {overallAvg >= 70 ? 'Lolos KKM' : 'Di Bawah KKM'}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 block">Standar KKM Kelulusan UTS adalah 70%</span>
              </div>

              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="4.5"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="none"
                    stroke={overallAvg >= 70 ? '#10b981' : '#f59e0b'}
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeDasharray={138.23}
                    strokeDashoffset={138.23 * (1 - Math.min(100, Math.max(0, overallAvg)) / 100)}
                    className="transition-all duration-700"
                  />
                </svg>
                <span className="absolute text-[10px] font-mono font-bold text-slate-200">
                  {overallAvg}%
                </span>
              </div>
            </div>

            {/* Card 3: Mata Kuliah Siap UTS with 8-Segment Radial Ring */}
            <div className="p-5 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl flex items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <CheckCircle2 size={13} className="text-cyan-400" />
                  <span>Mata Kuliah Siap UTS</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-extrabold text-cyan-400">
                    {readySubjectsCount} / {subjectProgress.length}
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {subjectProgress.length > 0 ? Math.round((readySubjectsCount / subjectProgress.length) * 100) : 0}% Target
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 block">Mata kuliah dengan rerata nilai ≥ 70%</span>
              </div>

              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                  {subjectProgress.map((sp: any, i: number) => {
                    const segLen = 138.23 / (subjectProgress.length || 8);
                    const dash = segLen - 3.5;
                    const offset = -i * segLen;
                    const isReady = sp.averageScore >= 70;
                    return (
                      <circle
                        key={sp.slug || i}
                        cx="28"
                        cy="28"
                        r="22"
                        fill="none"
                        stroke={isReady ? '#06b6d4' : 'rgba(255, 255, 255, 0.08)'}
                        strokeWidth="4.5"
                        strokeDasharray={`${dash} ${138.23 - dash}`}
                        strokeDashoffset={offset}
                        className="transition-colors duration-500"
                      />
                    );
                  })}
                </svg>
                <span className="absolute text-[10px] font-mono font-bold text-cyan-400">
                  {readySubjectsCount}/{subjectProgress.length}
                </span>
              </div>
            </div>
          </div>

          {/* Section: Radar Kesiapan 8 Mata Kuliah UTS with Real Radar Chart */}
          <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Radar Kesiapan 8 Mata Kuliah UTS</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Visualisasi poligon kapabilitas & kesiapan ujian berdasarkan standar kelulusan KKM 70%.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles size={12} />
                  <span>{readySubjectsCount} dari {subjectProgress.length} Matkul Lolos KKM</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Radar Chart Polygon Visual */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-white/[0.015] border border-white/5">
                <ReadinessRadarChart
                  data={subjectProgress}
                  hoveredSlug={hoveredSlug}
                  onHoverSlug={setHoveredSlug}
                />
              </div>

              {/* Subject Breakdown List */}
              <div className="lg:col-span-7 space-y-3.5">
                {subjectProgress.map((sp: any) => {
                  const isHovered = hoveredSlug === sp.slug;
                  const isReady = sp.averageScore >= 70;
                  const hasAttempts = sp.totalQuizzes > 0;

                  return (
                    <div
                      key={sp.slug}
                      onMouseEnter={() => setHoveredSlug(sp.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      className={`p-2.5 rounded-xl transition-all duration-200 border ${
                        isHovered
                          ? 'bg-white/[0.04] border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                          : 'bg-white/[0.01] border-transparent hover:border-white/10'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <SubjectBadge slug={sp.slug} size="sm" />
                            <span className="text-slate-300 font-medium truncate">{sp.name}</span>
                          </div>
                          <div className="flex items-center gap-2.5 font-mono shrink-0">
                            {isReady ? (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                Siap UTS
                              </span>
                            ) : hasAttempts ? (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                Perlu Latihan
                              </span>
                            ) : (
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-500/10 text-slate-400 border border-slate-500/20">
                                Belum Ada Sesi
                              </span>
                            )}
                            <span className="text-slate-500 text-[11px]">{sp.totalQuizzes} kuis</span>
                            <span className={`font-semibold min-w-[36px] text-right ${isReady ? 'text-emerald-400' : hasAttempts ? 'text-amber-400' : 'text-slate-500'}`}>
                              {sp.averageScore}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar with 70% KKM Benchmark Notch */}
                        <div className="relative w-full h-2 rounded-full bg-white/[0.05] overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isReady
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                                : hasAttempts
                                ? 'bg-gradient-to-r from-amber-500 to-orange-400'
                                : 'bg-transparent'
                            }`}
                            style={{ width: `${Math.min(100, sp.averageScore)}%` }}
                          />
                          {/* 70% KKM threshold indicator notch */}
                          <div
                            className="absolute top-0 bottom-0 w-0.5 bg-white/20 z-10"
                            style={{ left: '70%' }}
                            title="Batas Ambang KKM 70%"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section: Riwayat Pengerjaan Kuis Terkini + Score Trend Graph */}
          <div className="p-6 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Riwayat Pengerjaan Kuis Terkini</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Rekapitulasi riwayat pengerjaan latihan & ujian mandiri mahasiswa.
                </p>
              </div>

              {sessions.length > 0 && (
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-slate-500" />
                    <span>Terakhir: {new Date(sessions[0].completed_at).toLocaleDateString()}</span>
                  </div>
                </div>
              )}
            </div>

            {sessions.length === 0 ? (
              <p className="text-xs text-slate-500 py-6 text-center">
                Belum ada riwayat kuis. Mulai kerjakan kuis CBT di halaman mata kuliah!
              </p>
            ) : (
              <div className="space-y-4">
                {/* Visual Performance Banner / Trend Metric */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.015] border border-white/5 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <BarChart3 size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">Skor Tertinggi</span>
                      <strong className="text-emerald-400 text-sm">
                        {Math.max(...sessions.map((s: any) => s.score))}%
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Target size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">Total Soal Terjawab</span>
                      <strong className="text-slate-200 text-sm">
                        {sessions.reduce((acc: number, curr: any) => acc + curr.total_questions, 0)} Soal
                      </strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Clock size={16} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">Rata-Rata Waktu</span>
                      <strong className="text-slate-200 text-sm">
                        {Math.floor(
                          sessions.reduce((acc: number, curr: any) => acc + curr.time_spent_seconds, 0) /
                            sessions.length /
                            60
                        )}m{' '}
                        {Math.round(
                          (sessions.reduce((acc: number, curr: any) => acc + curr.time_spent_seconds, 0) /
                            sessions.length) %
                            60
                        )}s
                      </strong>
                    </div>
                  </div>
                </div>

                {/* History Table */}
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
