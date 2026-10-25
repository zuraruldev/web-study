import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Timer,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Bookmark,
  Award,
  AlertTriangle,
  Flame,
  ArrowRight,
  Play,
  Clock,
  Sparkles,
  BookOpen
} from 'lucide-react';
import type { Question, AnswerItem, QuizEvaluationResult } from '../types';
import { evaluateQuiz } from '../lib/api';

interface CBTQuizProps {
  subjectSlug: string;
  subjectName: string;
  questions: Question[];
  onFinish?: () => void;
}

export const CBTQuiz: React.FC<CBTQuizProps> = ({
  subjectSlug,
  subjectName,
  questions,
  onFinish
}) => {
  const STORAGE_KEY = `studyhub_cbt_${subjectSlug}`;
  const TOTAL_TIME = 60 * 60; // 1 hour (3600 seconds)

  const [mode, setMode] = useState<'exam' | 'practice'>('exam');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuizEvaluationResult | null>(null);
  const [showPracticeRationale, setShowPracticeRationale] = useState<Record<string, boolean>>({});

  // Restore active quiz session from sessionStorage
  useEffect(() => {
    try {
      const savedRaw = sessionStorage.getItem(STORAGE_KEY);
      if (!savedRaw) return;
      const saved = JSON.parse(savedRaw);
      if (saved && saved.isStarted) {
        setMode(saved.mode || 'exam');
        setCurrentIndex(saved.currentIndex || 0);
        setSelectedAnswers(saved.selectedAnswers || {});
        setFlaggedQuestions(saved.flaggedQuestions || {});
        setIsSubmitted(!!saved.isSubmitted);
        setResult(saved.result || null);
        setIsStarted(true);

        if (saved.mode === 'exam' && !saved.isSubmitted) {
          const elapsed = Math.floor((Date.now() - (saved.timestamp || Date.now())) / 1000);
          const remaining = Math.max(0, (saved.timeLeft || TOTAL_TIME) - elapsed);
          setTimeLeft(remaining);
        } else {
          setTimeLeft(saved.timeLeft || TOTAL_TIME);
        }
      }
    } catch (e) {
      // ignore parse error
    }
  }, [subjectSlug]);

  // Keep sessionStorage in sync while quiz is started
  useEffect(() => {
    if (!isStarted) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        isStarted,
        mode,
        currentIndex,
        selectedAnswers,
        flaggedQuestions,
        timeLeft,
        isSubmitted,
        result,
        timestamp: Date.now()
      }));
    } catch (e) {
      // ignore storage quota
    }
  }, [isStarted, mode, currentIndex, selectedAnswers, flaggedQuestions, timeLeft, isSubmitted, result, subjectSlug]);

  useEffect(() => {
    if (!isStarted || mode !== 'exam' || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, mode, isSubmitted]);

  const formatTimer = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));

    if (mode === 'practice') {
      setShowPracticeRationale(prev => ({ ...prev, [questionId]: true }));
    }
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleSubmitQuiz = async () => {
    if (isSubmitted || loading) return;
    setLoading(true);

    const answersPayload: AnswerItem[] = questions.map(q => ({
      questionId: q.id,
      selectedOptionIndex: selectedAnswers[q.id] !== undefined ? selectedAnswers[q.id] : -1
    }));

    const timeSpent = TOTAL_TIME - timeLeft;

    try {
      const evaluation = await evaluateQuiz(
        subjectSlug,
        answersPayload,
        mode,
        timeSpent > 0 ? timeSpent : 30
      );
      setResult(evaluation);
      setIsSubmitted(true);

      if (evaluation.score >= 70) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } catch (err) {
      console.error('Failed to submit quiz:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setIsSubmitted(false);
    setResult(null);
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setShowPracticeRationale({});
    setCurrentIndex(0);
    setTimeLeft(TOTAL_TIME);
    setIsStarted(false);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="p-12 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
        <HelpCircle size={36} className="mx-auto text-slate-500 mb-3" />
        <h3 className="text-base font-semibold text-slate-300">Bank Soal Kuis Belum Tersedia</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
          Soal-soal latihan CBT untuk mata kuliah ini sedang dipersiapkan sesuai kisi-kisi UTS.
        </p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  if (isSubmitted && result) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                <Award size={14} />
                <span>Hasil Evaluasi CBT UTS</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-100">{subjectName}</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Mode: {mode === 'exam' ? 'Simulasi Ujian Resmi (Batas Waktu)' : 'Latihan Mandiri'}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[11px] font-mono text-slate-400">Skor Akhir</div>
                <div className={`text-3xl font-extrabold ${result.score >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {result.score}%
                </div>
              </div>
              <div className="text-center px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[11px] font-mono text-slate-400">Ketepatan</div>
                <div className="text-xl font-bold text-slate-200">
                  {result.correctCount} / {result.totalQuestions}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs text-slate-400">Status Kelulusan KKM UTS</span>
              <div className="flex items-center gap-2 mt-1">
                {result.isPassed ? (
                  <>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <span className="font-semibold text-emerald-400 text-sm">MEMENUHI KKM (≥ 70)</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle size={18} className="text-amber-400" />
                    <span className="font-semibold text-amber-400 text-sm">PERLU PENGAYAAN (&lt; 70)</span>
                  </>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs text-slate-400">Durasi Pengerjaan</span>
              <div className="font-mono text-slate-200 font-semibold text-sm mt-1">
                {formatTimer(result.timeSpentSeconds)} Menit
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-xs text-slate-400">Poin Akumulasi</span>
              <div className="font-semibold text-slate-200 text-sm mt-1">
                {result.earnedPoints} / {result.totalPoints} Poin
              </div>
            </div>
          </div>

          {result.weakTopics && result.weakTopics.length > 0 && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-2">
                <Flame size={16} />
                <span>Topik yang Perlu Ditingkatkan Sebelum Ujian UTS:</span>
              </div>
              <div className="space-y-1.5">
                {result.weakTopics.map(w => (
                  <div key={w.topic} className="flex items-center justify-between text-xs text-slate-300">
                    <span>{w.topic}</span>
                    <span className="font-mono text-amber-400 font-medium">Akurasi: {w.accuracy}% ({w.correct}/{w.total})</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-200 transition-colors"
            >
              <RotateCcw size={14} />
              <span>Ulangi Kuis</span>
            </button>
            {onFinish && (
              <button
                onClick={onFinish}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-medium text-white transition-all shadow-lg shadow-emerald-900/30"
              >
                <span>Selesai & Buka Modul Lain</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-semibold text-slate-100 text-base">Pembahasan Lengkap Tiap Butir Soal</h3>
            <span className="text-xs font-mono text-slate-500">{result.breakdown.length} Soal Dinilai</span>
          </div>

          <div className="space-y-6">
            {result.breakdown.map((item, idx) => {
              const origQ = questions.find(q => q.id === item.questionId);
              return (
                <div
                  key={item.questionId}
                  className={`p-5 rounded-xl border transition-colors ${
                    item.isCorrect ? 'bg-emerald-500/[0.03] border-emerald-500/20' : 'bg-rose-500/[0.03] border-rose-500/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold ${
                        item.isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">{item.subtopic}</span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      item.isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {item.isCorrect ? 'Tepat (+10)' : 'Salah (0)'}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-200 mb-3">{item.questionText}</p>

                  {item.codeSnippet && (
                    <div className="p-3 rounded-lg bg-[#070a10] border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto mb-3">
                      <pre><code>{item.codeSnippet}</code></pre>
                    </div>
                  )}

                  {origQ && (
                    <div className="space-y-1.5 mb-3">
                      {origQ.options.map((opt, oIdx) => {
                        const isChosen = item.selectedOptionIndex === oIdx;
                        const isTheCorrectOne = item.correctIndex === oIdx;

                        let style = 'bg-white/[0.02] border-white/5 text-slate-400';
                        if (isTheCorrectOne) {
                          style = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-medium';
                        } else if (isChosen && !item.isCorrect) {
                          style = 'bg-rose-500/10 border-rose-500/40 text-rose-300';
                        }

                        return (
                          <div key={oIdx} className={`px-3 py-2 rounded-lg border text-xs flex items-center justify-between ${style}`}>
                            <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                            {isTheCorrectOne && <CheckCircle2 size={14} className="text-emerald-400" />}
                            {isChosen && !item.isCorrect && <XCircle size={14} className="text-rose-400" />}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-slate-300">
                    <span className="font-semibold text-emerald-400">Pembahasan Konsep: </span>
                    <span>{item.explanation}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (!isStarted && !isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-6 space-y-6">
        <div className="p-8 rounded-3xl bg-[#0e1422] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

          <div className="flex items-center gap-2.5 text-emerald-400 text-xs font-mono mb-3">
            <Sparkles size={15} />
            <span>Simulasi Ujian Computer Based Test (CBT) UTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            {subjectName}
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed max-w-xl">
            Uji pemahaman dan kesiapan Anda menghadapi Ujian Tengah Semester (UTS) dengan bank soal terstandar kurikulum.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-6">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <HelpCircle size={20} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Jumlah Soal</div>
                <div className="text-base font-bold text-slate-100">{questions.length} Butir</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Batas Waktu</div>
                <div className="text-base font-bold text-slate-100">60 Menit (1 Jam)</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Award size={20} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Standar KKM</div>
                <div className="text-base font-bold text-slate-100">Nilai ≥ 70</div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="text-xs font-semibold text-slate-300">Pilih Mode Pengerjaan:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMode('exam')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  mode === 'exam'
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/40'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-slate-200">Mode Simulasi Ujian</span>
                  {mode === 'exam' && <CheckCircle2 size={16} className="text-emerald-400" />}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Timer 60 menit berjalan mundur. Pembahasan dan skor dianalisis setelah seluruh soal selesai dikirim.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setMode('practice')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  mode === 'practice'
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/40'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-xs text-slate-200">Mode Latihan Mandiri</span>
                  {mode === 'practice' && <CheckCircle2 size={16} className="text-emerald-400" />}
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Bebas waktu. Penjelasan konsep dan kebenaran jawaban langsung muncul seketika saat opsi dipilih.
                </p>
              </button>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5 text-xs text-slate-400 mb-6">
            <BookOpen size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Fitur Bebas Tab:</strong> Anda dapat membuka tab <em>Ringkasan Materi</em> atau <em>Modul & Slide</em> kapan saja saat mengerjakan ujian untuk mencari referensi jawaban tanpa khawatir waktu atau progres kuis tereset.
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsStarted(true)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-xl shadow-emerald-900/40 flex items-center justify-center gap-2.5"
          >
            <Play size={16} fill="currentColor" />
            <span>Mulai Kuis Sekarang</span>
          </button>
        </div>
      </div>
    );
  }

  const switchMode = (newMode: 'exam' | 'practice') => {
    if (newMode === mode) return;
    if (Object.keys(selectedAnswers).length > 0) {
      if (!confirm('Mengganti mode akan mengulang kuis dari awal. Lanjutkan?')) return;
    }
    setMode(newMode);
    handleReset();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0e1422] border border-white/10 shadow-xl">
        <div className="flex items-center gap-2">
          <button
            onClick={() => switchMode('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              mode === 'exam' 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Simulasi Ujian (Timer 1 Jam)
          </button>
          <button
            onClick={() => switchMode('practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              mode === 'practice' 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Latihan Mandiri
          </button>
        </div>

        <div className="flex items-center gap-3">
          {mode === 'exam' && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs">
              <Timer size={14} className="text-emerald-400 animate-pulse" />
              <span className={`font-semibold ${timeLeft < 180 ? 'text-rose-400' : 'text-slate-200'}`}>
                {formatTimer(timeLeft)}
              </span>
            </div>
          )}

          <button
            onClick={() => handleToggleFlag(currentQ.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              flaggedQuestions[currentQ.id]
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bookmark size={14} />
            <span>Tandai Soal</span>
          </button>
        </div>
      </div>

      <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-300">
              Soal {currentIndex + 1} dari {questions.length}
            </span>
            <span className="text-xs text-slate-400">{currentQ.subtopic}</span>
          </div>
          <span className="text-xs font-mono text-emerald-400">+{currentQ.points} Poin</span>
        </div>

        <div className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed">
          {currentQ.question_text}
        </div>

        {currentQ.code_snippet && (
          <div className="p-4 rounded-xl bg-[#070a10] border border-white/10 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed">
            <pre><code>{currentQ.code_snippet}</code></pre>
          </div>
        )}

        <div className="space-y-3 pt-2">
          {currentQ.options.map((opt, oIdx) => {
            const isChosen = selectedAnswers[currentQ.id] === oIdx;
            const isPracticeMode = mode === 'practice';
            const showRationale = isPracticeMode && showPracticeRationale[currentQ.id];
            const isCorrectAnswer = currentQ.correct_index === oIdx;

            let tileClasses = 'bg-[#12192b] border-white/10 hover:border-white/20 text-slate-200';

            if (isChosen && !showRationale) {
              tileClasses = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 ring-1 ring-emerald-500/30';
            } else if (showRationale) {
              if (isCorrectAnswer) {
                tileClasses = 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 font-medium';
              } else if (isChosen && !isCorrectAnswer) {
                tileClasses = 'bg-rose-500/10 border-rose-500/50 text-rose-300';
              }
            }

            return (
              <button
                key={oIdx}
                onClick={() => handleSelectOption(currentQ.id, oIdx)}
                className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${tileClasses}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/10 flex items-center justify-center font-mono text-xs font-medium text-slate-300 shrink-0">
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span>{opt}</span>
                </div>
                {showRationale && isCorrectAnswer && <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />}
                {showRationale && isChosen && !isCorrectAnswer && <XCircle size={16} className="text-rose-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        {mode === 'practice' && showPracticeRationale[currentQ.id] && currentQ.explanation && (
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-300 animate-in fade-in duration-200">
            <span className="font-semibold text-emerald-400">Pembahasan Jawaban: </span>
            <span>{currentQ.explanation}</span>
          </div>
        )}

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 disabled:opacity-40 transition-colors"
          >
            <ChevronLeft size={16} />
            <span>Sebelumnya</span>
          </button>

          <div className="flex items-center gap-2">
            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-medium text-slate-100 transition-colors"
              >
                <span>Selanjutnya</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white transition-all shadow-lg shadow-emerald-900/30 disabled:opacity-50"
              >
                <span>{loading ? 'Menilai...' : 'Kumpulkan & Selesai'}</span>
                <CheckCircle2 size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#0e1422] border border-white/10 rounded-2xl p-4 shadow-xl">
        <div className="text-xs font-mono text-slate-400 mb-3 px-1">Navigasi Nomor Soal</div>
        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => {
            const answered = selectedAnswers[q.id] !== undefined;
            const flagged = flaggedQuestions[q.id];
            const isCurrent = currentIndex === idx;

            let btnClass = 'bg-white/[0.03] text-slate-400 border-white/10';
            if (isCurrent) {
              btnClass = 'bg-white text-slate-950 font-bold border-white ring-2 ring-emerald-500/50';
            } else if (flagged) {
              btnClass = 'bg-amber-500/20 text-amber-400 border-amber-500/30 font-medium';
            } else if (answered) {
              btnClass = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 font-medium';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-9 h-9 rounded-lg border text-xs font-mono transition-all flex items-center justify-center ${btnClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
