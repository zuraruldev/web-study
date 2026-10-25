import type { Subject, Material, Chapter, Question, AnswerItem, QuizEvaluationResult, User } from '../types';

const API_BASE = '/api';

export function getAuthToken(): string | null {
  return localStorage.getItem('studyhub_token');
}

export function setAuthToken(token: string | null) {
  if (token) {
    localStorage.setItem('studyhub_token', token);
  } else {
    localStorage.removeItem('studyhub_token');
  }
}

export function getStoredUser(): User | null {
  const data = localStorage.getItem('studyhub_user');
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function setStoredUser(user: User | null) {
  if (user) {
    localStorage.setItem('studyhub_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('studyhub_user');
  }
}

export async function fetchSubjects(): Promise<Subject[]> {
  const res = await fetch(`${API_BASE}/subjects`);
  const data = await res.json();
  return data.subjects || [];
}

export async function fetchMaterials(subject: string): Promise<Material[]> {
  const res = await fetch(`${API_BASE}/materials/${subject}`);
  const data = await res.json();
  return data.materials || [];
}

export async function fetchExplanations(subject: string): Promise<Chapter[]> {
  const res = await fetch(`${API_BASE}/explanations/${subject}`);
  const data = await res.json();
  return data.chapters || [];
}

export async function fetchQuiz(subject: string, mode: 'exam' | 'practice', limit = 40): Promise<Question[]> {
  const res = await fetch(`${API_BASE}/quiz/${subject}?mode=${mode}&limit=${limit}`);
  const data = await res.json();
  return data.questions || [];
}

export async function evaluateQuiz(
  subject_slug: string,
  answers: AnswerItem[],
  mode: 'exam' | 'practice',
  time_spent_seconds: number,
  guest_name?: string
): Promise<QuizEvaluationResult> {
  const user = getStoredUser();
  const res = await fetch(`${API_BASE}/quiz/evaluate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      subject_slug,
      answers,
      mode,
      time_spent_seconds,
      user_id: user?.id,
      guest_name: user?.name || guest_name || 'Tamu Mahasiswa'
    })
  });
  return await res.json();
}

export async function executeSqlQuery(query: string): Promise<any> {
  const res = await fetch(`${API_BASE}/sql/execute`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });
  return await res.json();
}

export async function executePhpCode(code: string): Promise<{ success: boolean; output: string; error?: string; executionTimeMs: number }> {
  const res = await fetch(`${API_BASE}/php/execute`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  });
  return await res.json();
}

export async function fetchSqlSchema(): Promise<any> {
  const res = await fetch(`${API_BASE}/sql/schema`);
  const data = await res.json();
  return data.schema;
}

export async function resetSqlSandbox(): Promise<any> {
  const res = await fetch(`${API_BASE}/sql/reset`, { method: 'POST' });
  return await res.json();
}

export async function fetchLeaderboard(subject?: string): Promise<any[]> {
  const url = subject ? `${API_BASE}/leaderboard?subject=${subject}` : `${API_BASE}/leaderboard`;
  const res = await fetch(url);
  const data = await res.json();
  return data.leaderboard || [];
}

export async function fetchUserProgress(): Promise<any> {
  const user = getStoredUser();
  const url = user?.id ? `${API_BASE}/user/progress?userId=${user.id}` : `${API_BASE}/user/progress`;
  const res = await fetch(url);
  return await res.json();
}
