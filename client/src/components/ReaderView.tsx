import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Chapter } from '../types';
import { BookOpen, Copy, Check, Sparkles, Play } from 'lucide-react';

interface ReaderViewProps {
  chapters: Chapter[];
  subjectSlug: string;
  onStartQuizTopic?: (topic: string) => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  chapters,
  onStartQuizTopic
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  if (!chapters || chapters.length === 0) {
    return (
      <div className="p-12 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
        <BookOpen size={36} className="mx-auto text-slate-500 mb-3" />
        <h3 className="text-base font-semibold text-slate-300">Materi Bacaan Belum Tersedia</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
          Ringkasan materi untuk mata kuliah ini sedang dalam penyusunan oleh tim dosen dan asisten.
        </p>
      </div>
    );
  }

  const currentChapter = chapters[activeChapterIndex] || chapters[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Table of Contents Sticky Sidebar */}
      <div className="lg:col-span-4 sticky top-24 bg-[#0e1422] border border-white/10 rounded-2xl p-4 shadow-xl space-y-2">
        <div className="flex items-center gap-2 px-2 py-1 text-xs font-mono text-slate-400 uppercase tracking-wider">
          <BookOpen size={14} className="text-emerald-400" />
          <span>Daftar Bab Pembelajaran</span>
        </div>

        <div className="space-y-1">
          {chapters.map((chap, idx) => (
            <button
              key={chap.id}
              onClick={() => setActiveChapterIndex(idx)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all flex items-start gap-2.5 group ${
                activeChapterIndex === idx
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] border border-transparent'
              }`}
            >
              <span className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 font-mono text-[10px] ${
                activeChapterIndex === idx ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/[0.05] text-slate-400'
              }`}>
                {idx + 1}
              </span>
              <span className="line-clamp-2">{chap.topic_title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chapter Content Container */}
      <div className="lg:col-span-8 bg-[#0e1422] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Bab {activeChapterIndex + 1} dari {chapters.length}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <Sparkles size={12} />
            <span>Materi UTS Terstandar Lengkap</span>
          </div>
        </div>

        <div className="prose-content text-slate-300">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100 mt-6 mb-4 border-b border-white/10 pb-3">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 mt-8 mb-3 border-l-4 border-emerald-500 pl-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-sm sm:text-base font-semibold text-emerald-400 mt-5 mb-2 font-mono">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 my-2.5">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-slate-100">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-slate-200">
                  {children}
                </em>
              ),
              ul: ({ children }) => (
                <ul className="list-disc ml-5 space-y-1.5 my-3 text-xs sm:text-sm text-slate-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal ml-5 space-y-1.5 my-3 text-xs sm:text-sm text-slate-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-relaxed">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-4 p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-amber-200 text-xs sm:text-sm leading-relaxed">
                  {children}
                </blockquote>
              ),
              table: ({ children }) => (
                <div className="my-6 overflow-x-auto rounded-xl border border-white/10 shadow-lg">
                  <table className="w-full text-left text-xs border-collapse">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-[#12192b] border-b border-white/10 text-slate-200 font-semibold font-mono">
                  {children}
                </thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 border-r border-white/5 last:border-r-0">
                  {children}
                </th>
              ),
              tbody: ({ children }) => (
                <tbody className="divide-y divide-white/5">
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="hover:bg-white/[0.02] transition-colors">
                  {children}
                </tr>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-slate-300 border-r border-white/5 last:border-r-0 text-xs leading-relaxed">
                  {children}
                </td>
              ),
              code: ({ inline, className, children, ...props }: any) => {
                const codeString = String(children).replace(/\n$/, '');
                const langMatch = /language-(\w+)/.exec(className || '');
                const lang = langMatch ? langMatch[1] : '';

                if (inline) {
                  return (
                    <code className="px-1.5 py-0.5 rounded bg-white/[0.08] text-emerald-300 font-mono text-[11px] border border-white/10" {...props}>
                      {children}
                    </code>
                  );
                }

                const codeId = `code_${Math.random().toString(36).substring(2, 7)}`;

                return (
                  <div className="my-5 rounded-xl border border-white/10 bg-[#070a10] overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02] text-xs font-mono text-slate-400">
                      <span>{lang || 'php'}</span>
                      <button
                        onClick={() => handleCopy(codeString, codeId)}
                        className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-[11px] text-slate-300 transition-colors"
                      >
                        {copiedCodeId === codeId ? (
                          <>
                            <Check size={12} className="text-emerald-400" />
                            <span className="text-emerald-400">Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-xs font-mono leading-relaxed text-slate-200">
                      <code>{children}</code>
                    </pre>
                  </div>
                );
              }
            }}
          >
            {currentChapter.content_markdown}
          </ReactMarkdown>
        </div>

        {/* Bottom CTA to Jump into Quiz */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] p-4 rounded-xl">
          <div>
            <div className="text-xs font-semibold text-slate-200">Sudah Paham Materi Bab Ini?</div>
            <div className="text-[11px] text-slate-400">Uji daya ingat dan pemahaman Anda lewat latihan soal CBT.</div>
          </div>
          {onStartQuizTopic && (
            <button
              onClick={() => onStartQuizTopic(currentChapter.topic_title)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-all shadow-lg shadow-emerald-900/30 shrink-0"
            >
              <Play size={14} />
              <span>Uji Pemahaman Bab Ini</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
