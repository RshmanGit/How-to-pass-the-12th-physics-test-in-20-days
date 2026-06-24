// Single source of truth for the dashboard. The agent writes ../../tracker.json after
// each /grade; this module reads it at build time and derives the display values. No
// duplicated state — everything comes from here. Schema v2 (MD Medicine, 4-paper model).
import trackerJson from '../../tracker.json';

export interface PaperProj { worst: number; best: number; }
export interface TrendPoint {
  date: string;
  papers: Record<string, PaperProj | null>;
  aggregate: { worst_pct: number; best_pct: number };
}
export interface ActivityRow {
  date: string; tier1_done: number; tier2_done: number; test_marks: number; weighted_activity_score: number;
}
interface Question { system: string; marks: number; tier: number; must_introduce: boolean; times_seen: number; label: string; }

const tracker = trackerJson as unknown as {
  meta: {
    student: string; institution: string; exam_name: string; scope: string;
    milestones: { prelim: string; final: string };
    pass_rule: {
      per_paper_floor_pct: number; aggregate_pct: number;
      papers_count: number; marks_per_paper: number; total_marks: number;
    };
    practical_note: string;
    bands: { weak: number; shaky: number; solid: number };
  };
  papers: Record<string, { name: string; marks: number }>;
  systems: Record<string, { name: string; paper_id: string | null; exam_marks: number }>;
  projections: {
    papers: Record<string, PaperProj | null>;
    aggregate: { worst_pct: number | null; best_pct: number | null };
    verdict: { binding: string | null; at_risk_papers: string[]; passProjectedBest: boolean | null };
    trend: TrendPoint[];
  };
  activity: ActivityRow[];
  questions: Record<string, Question>;
};

export const meta = tracker.meta;
export const papers = tracker.papers;
export const systems = tracker.systems;
export const projections = tracker.projections;
export const activity = tracker.activity;
export const trend = tracker.projections.trend;

// Countdowns — build date is real "today" on Vercel, which is what the student should see.
function daysUntil(iso: string): number {
  const target = new Date(iso + 'T00:00:00');
  const now = new Date();
  return Math.max(0, Math.ceil((target.getTime() - now.getTime()) / 86_400_000));
}
export const daysToPrelim = daysUntil(tracker.meta.milestones.prelim);
export const daysToFinal = daysUntil(tracker.meta.milestones.final);

// git-style heatmap intensity buckets (0–4) from the weighted activity score.
export function activityLevel(score: number): 0 | 1 | 2 | 3 | 4 {
  if (score <= 0) return 0;
  if (score <= 10) return 1;
  if (score <= 20) return 2;
  if (score <= 30) return 3;
  return 4;
}

// How much of the must-cover set has been touched, overall / per system / per paper.
export function coverage() {
  const qs = Object.values(tracker.questions).filter((q) => q.must_introduce);
  const seen = qs.filter((q) => q.times_seen > 0).length;
  return { total: qs.length, seen, pct: qs.length ? Math.round((seen / qs.length) * 100) : 0 };
}

export function systemCoverage() {
  return Object.entries(tracker.systems).map(([key, s]) => {
    const qs = Object.values(tracker.questions).filter((q) => q.system === key && q.must_introduce);
    const seen = qs.filter((q) => q.times_seen > 0).length;
    return { key, name: s.name, paperId: s.paper_id, examMarks: s.exam_marks, total: qs.length, seen };
  });
}

export function paperCoverage() {
  return Object.entries(tracker.papers).map(([pid, p]) => {
    const qs = Object.values(tracker.questions).filter((q) => {
      const s = tracker.systems[q.system];
      return s && s.paper_id === pid && q.must_introduce;
    });
    const seen = qs.filter((q) => q.times_seen > 0).length;
    return { key: pid, name: p.name, marks: p.marks, total: qs.length, seen };
  });
}

// Join per-paper projections to paper names + at-risk flag, for the gauges.
export function papersWithProjection() {
  return Object.entries(tracker.papers).map(([pid, p]) => {
    const proj = tracker.projections.papers?.[pid] ?? null;
    const atRisk = tracker.projections.verdict?.at_risk_papers?.includes(pid) ?? false;
    return { key: pid, name: p.name, marks: p.marks, proj, atRisk };
  });
}

export default tracker;
