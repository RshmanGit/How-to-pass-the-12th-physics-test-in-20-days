// Single source of truth for the dashboard. The agent writes ../../tracker.json after
// each /grade; this module reads it at build time and derives the display values. No
// duplicated state (e.g. no hand-maintained trend array) — everything comes from here.
import trackerJson from '../../tracker.json';

export interface TrendPoint { date: string; worst: number; best: number; }
export interface ActivityRow {
  date: string; tier1_done: number; tier2_done: number; test_marks: number; weighted_activity_score: number;
}
interface Question { chapter: string; marks: number; tier: number; must_introduce: boolean; times_seen: number; label: string; }

const tracker = trackerJson as unknown as {
  meta: { student: string; exam_date: string; pass_mark: number; total_marks: number };
  chapters: Record<string, { name: string; exam_marks: number }>;
  projections: { worst: number | null; best: number | null; trend: TrendPoint[] };
  activity: ActivityRow[];
  questions: Record<string, Question>;
};

export const meta = tracker.meta;
export const projections = tracker.projections;
export const activity = tracker.activity;
export const trend = tracker.projections.trend;

// Countdown — build date is real "today" on Vercel, which is what the student should see.
export const daysToExam = (() => {
  const exam = new Date(tracker.meta.exam_date + 'T00:00:00');
  const now = new Date();
  return Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / 86_400_000));
})();

// git-style heatmap intensity buckets (0–4) from the weighted activity score.
export function activityLevel(score: number): 0 | 1 | 2 | 3 | 4 {
  if (score <= 0) return 0;
  if (score <= 10) return 1;
  if (score <= 20) return 2;
  if (score <= 30) return 3;
  return 4;
}

// How much of the must-cover set has been touched, overall and per chapter.
export function coverage() {
  const qs = Object.values(tracker.questions).filter((q) => q.must_introduce);
  const seen = qs.filter((q) => q.times_seen > 0).length;
  return { total: qs.length, seen, pct: qs.length ? Math.round((seen / qs.length) * 100) : 0 };
}

export function chapterCoverage() {
  return Object.entries(tracker.chapters).map(([key, c]) => {
    const qs = Object.values(tracker.questions).filter((q) => q.chapter === key && q.must_introduce);
    const seen = qs.filter((q) => q.times_seen > 0).length;
    return { key, name: c.name, examMarks: c.exam_marks, total: qs.length, seen };
  });
}

export default tracker;
