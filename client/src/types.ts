export interface Subject {
  id: string;
  slug: string;
  name: string;
  icon: string;
  accent: string;
  description: string;
  order_index: number;
  materials_count: number;
  explanations_count: number;
  questions_count: number;
}

export interface Material {
  id: string;
  subject_slug: string;
  title: string;
  filename: string;
  file_size: string;
  file_format: string;
  file_path: string;
  uploaded_at: string;
}

export interface Chapter {
  id: string;
  subject_slug: string;
  topic_title: string;
  chapter_order: number;
  content_markdown: string;
}

export interface Question {
  id: string;
  subject_slug: string;
  subtopic: string;
  question_text: string;
  code_snippet: string | null;
  options: string[];
  points: number;
  correct_index?: number;
  explanation?: string;
}

export interface AnswerItem {
  questionId: string;
  selectedOptionIndex: number;
}

export interface QuestionBreakdown {
  questionId: string;
  questionText: string;
  codeSnippet: string | null;
  subtopic: string;
  selectedOptionIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  explanation: string;
  points: number;
}

export interface WeakTopic {
  topic: string;
  accuracy: number;
  total: number;
  correct: number;
}

export interface QuizEvaluationResult {
  sessionId: string;
  score: number;
  isPassed: boolean;
  correctCount: number;
  totalQuestions: number;
  earnedPoints: number;
  totalPoints: number;
  timeSpentSeconds: number;
  weakTopics: WeakTopic[];
  breakdown: QuestionBreakdown[];
}

export interface User {
  id: string;
  nim_or_email: string;
  name: string;
  role: string;
}
