import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import {
  Download,
  BookOpen,
  HelpCircle,
  Database,
  HardDrive,
  Search,
  ChevronLeft,
  Code2
} from 'lucide-react';
import type { Subject, Material, Chapter, Question } from '../types';
import { fetchMaterials, fetchExplanations, fetchQuiz } from '../lib/api';
import { SubjectBadge, getSubjectMeta } from '../components/SubjectBadge';
import { ReaderView } from '../components/ReaderView';
import { CBTQuiz } from '../components/CBTQuiz';
import { SQLSandbox } from '../components/SQLSandbox';
import { PHPSandbox } from '../components/PHPSandbox';

interface SubjectPageProps {
  subjects: Subject[];
}

export const SubjectPage: React.FC<SubjectPageProps> = ({ subjects }) => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'materials';

  const [materials, setMaterials] = useState<Material[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [searchFilter, setSearchFilter] = useState('');

  const subject = subjects.find(s => s.slug === slug);
  const isBasdat = slug === 'basdat';
  const isAlpro = slug === 'alpro';

  useEffect(() => {
    if (!slug) return;
    loadSubjectData(slug);
  }, [slug]);

  const loadSubjectData = async (subjectSlug: string) => {
    try {
      const [mats, exps, qs] = await Promise.all([
        fetchMaterials(subjectSlug),
        fetchExplanations(subjectSlug),
        fetchQuiz(subjectSlug, 'exam', 40)
      ]);
      setMaterials(mats);
      setChapters(exps);
      setQuestions(qs);
    } catch (err) {
      console.error('Failed to load subject content:', err);
    }
  };

  const handleTabChange = (tabName: string) => {
    setSearchParams({ tab: tabName });
  };

  if (!subject) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold text-slate-200">Mata Kuliah Tidak Ditemukan</h2>
        <Link to="/" className="text-xs text-emerald-400 hover:underline mt-2 inline-block">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const meta = getSubjectMeta(subject.slug);
  const Icon = meta.icon;

  const filteredMaterials = materials.filter(m =>
    m.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    m.file_format.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-8 py-6">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors mb-4"
        >
          <ChevronLeft size={14} />
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#0e1422] border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border ${meta.bg} ${meta.border} ${meta.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Mata Kuliah Semester 1
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  {subject.name}
                </h1>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {subject.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <SubjectBadge slug={subject.slug} size="lg" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 border-b border-white/10 overflow-x-auto pb-1">
        <button
          onClick={() => handleTabChange('materials')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
            currentTab === 'materials'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
          }`}
        >
          <Download size={15} />
          <span>1. Bahan Kuliah & Unduhan ({materials.length})</span>
        </button>

        <button
          onClick={() => handleTabChange('explanations')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
            currentTab === 'explanations'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
          }`}
        >
          <BookOpen size={15} />
          <span>2. Ringkasan & Pembahasan ({chapters.length} Bab)</span>
        </button>

        <button
          onClick={() => handleTabChange('quiz')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
            currentTab === 'quiz'
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
          }`}
        >
          <HelpCircle size={15} />
          <span>3. Latihan Kuis CBT ({questions.length} Soal)</span>
        </button>

        {isAlpro && (
          <button
            onClick={() => handleTabChange('sandbox')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              currentTab === 'sandbox'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
                : 'text-slate-400 hover:text-emerald-300 hover:bg-emerald-500/5'
            }`}
          >
            <Code2 size={15} />
            <span>4. PHP Training</span>
          </button>
        )}

        {isBasdat && (
          <button
            onClick={() => handleTabChange('sql')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              currentTab === 'sql'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold'
                : 'text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/5'
            }`}
          >
            <Database size={15} />
            <span>4. Sandbox SQL & Skema Restoran</span>
          </button>
        )}
      </div>

      {currentTab === 'materials' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search size={16} className="absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="Cari nama berkas, modul, atau format..."
                value={searchFilter}
                onChange={e => setSearchFilter(e.target.value)}
                className="w-full bg-[#0e1422] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/40"
              />
            </div>
            <span className="text-xs font-mono text-slate-500">
              Menampilkan {filteredMaterials.length} dari {materials.length} berkas
            </span>
          </div>

          {filteredMaterials.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
              <HardDrive size={36} className="mx-auto text-slate-500 mb-3" />
              <h3 className="text-sm font-semibold text-slate-300">Belum Ada Berkas Bahan Kuliah</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Berkas untuk mata kuliah ini belum diunggah atau disinkronkan ke server.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredMaterials.map(mat => {
                const isPdf = mat.file_format === 'PDF';
                const isPpt = ['PPT', 'PPTX'].includes(mat.file_format);

                return (
                  <div
                    key={mat.id}
                    className="p-4 rounded-xl bg-[#0e1422] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                        isPdf
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          : isPpt
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      }`}>
                        {mat.file_format}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                          {mat.title}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500 mt-1">
                          <span>{mat.file_size}</span>
                          <span>•</span>
                          <span className="truncate">{mat.filename}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`/api/materials/download/${mat.id}`}
                      download
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-emerald-600 hover:text-white text-xs font-medium text-slate-300 border border-white/10 transition-all shrink-0"
                    >
                      <Download size={13} />
                      <span className="hidden sm:inline">Unduh</span>
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {currentTab === 'explanations' && (
        <ReaderView
          chapters={chapters}
          subjectSlug={subject.slug}
          onStartQuizTopic={() => handleTabChange('quiz')}
        />
      )}

      <div className={currentTab === 'quiz' ? 'block' : 'hidden'}>
        <CBTQuiz
          subjectSlug={subject.slug}
          subjectName={subject.name}
          questions={questions}
          onFinish={() => handleTabChange('materials')}
        />
      </div>

      {currentTab === 'sandbox' && isAlpro && (
        <PHPSandbox />
      )}

      {currentTab === 'sql' && isBasdat && (
        <SQLSandbox />
      )}
    </div>
  );
};
