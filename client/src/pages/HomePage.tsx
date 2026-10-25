import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Download,
  BookOpen,
  HelpCircle,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import type { Subject } from '../types';
import { getSubjectMeta } from '../components/SubjectBadge';

interface HomePageProps {
  subjects: Subject[];
}

export const HomePage: React.FC<HomePageProps> = ({ subjects }) => {
  return (
    <div className="space-y-16 py-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0e1422] p-8 sm:p-14 shadow-2xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles size={13} />
            <span>Portal Belajar UTS — Jurusan Teknik Informatika</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
            Persiapan Ujian Tengah Semester & Latihan Soal.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Akses modul perkuliahan terstandarisasi, ringkasan teori mendalam, simulasi kuis berwaktu,
            serta sandbox praktikum mandiri.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/subject/alpro"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-900/30 group"
            >
              <span>Pelajari Algoritma (Alpro)</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/subject/alpro?tab=quiz"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-medium text-sm transition-all"
            >
              <Terminal size={16} className="text-emerald-400" />
              <span>Simulasi CBT UTS</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Akses Terbuka Tanpa Wajib Login</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>Standar Kurikulum Semester 1</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>8 Mata Kuliah Terintegrasi</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-100">8 Mata Kuliah Semester 1</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Pilih mata kuliah untuk mengakses bahan kuliah, ringkasan bab, dan bank soal ujian.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Hi! <span className="text-emerald-400">Selamat Mengerjakan:3</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map(s => {
            const meta = getSubjectMeta(s.slug);
            const Icon = meta.icon;
            const isAlpro = s.slug === 'alpro';
            const isBasdat = s.slug === 'basdat';

            return (
              <Link
                key={s.slug}
                to={`/subject/${s.slug}`}
                className={`group relative p-5 rounded-2xl bg-[#0e1422] border transition-all flex flex-col justify-between hover:-translate-y-1 ${
                  isAlpro
                    ? 'border-emerald-500/30 hover:border-emerald-500/60 shadow-lg shadow-emerald-950/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${meta.bg} ${meta.border} ${meta.color}`}>
                      <Icon size={20} />
                    </div>
                    {isAlpro && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Lengkap 7 Modul
                      </span>
                    )}
                    {isBasdat && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        SQL Sandbox
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-slate-100 group-hover:text-white transition-colors text-base mb-1.5">
                    {s.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {s.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Download size={12} /> {s.materials_count} Berkas
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={12} /> {s.explanations_count} Bab
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-slate-400 group-hover:text-slate-200">
                    <HelpCircle size={12} /> {s.questions_count} Soal
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-[#0e1422] to-[#0e1422] border border-emerald-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Terminal size={12} />
            <span>Note:</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-100">These learning materials are based on pdf</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Jikalau ada kekurangan materi/kurang tepat atau ada saran bisa hubungi 081770225738
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            to="/subject/alpro?tab=explanations"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-slate-200 transition-colors"
          >
            <BookOpen size={14} />
            <span>Baca 7 Modul</span>
          </Link>
          <Link
            to="/subject/alpro?tab=quiz"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-lg shadow-emerald-900/30"
          >
            <Terminal size={14} />
            <span>Mulai Tes Quiz</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
