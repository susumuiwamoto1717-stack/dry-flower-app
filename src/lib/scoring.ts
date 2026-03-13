import { StyleCategory, DiagnosisState } from "@/data/types";
import { questions } from "@/data/questions";

const CATEGORIES: StyleCategory[] = ["natural", "cute", "elegant", "calm", "bright"];

export function calculateResult(answers: Record<string, string>): DiagnosisState {
  const scores: Record<StyleCategory, number> = {
    natural: 0,
    cute: 0,
    elegant: 0,
    calm: 0,
    bright: 0,
  };

  for (const question of questions) {
    const answerId = answers[question.id];
    if (!answerId) continue;

    const option = question.options.find((o) => o.id === answerId);
    if (!option) continue;

    for (const [category, points] of Object.entries(option.scores)) {
      scores[category as StyleCategory] += points;
    }
  }

  let maxScore = 0;
  let result: StyleCategory = "natural";

  for (const cat of CATEGORIES) {
    if (scores[cat] > maxScore) {
      maxScore = scores[cat];
      result = cat;
    }
  }

  return { answers, result, scores };
}

export function getScorePercentages(scores: Record<StyleCategory, number>): Record<StyleCategory, number> {
  const total = Object.values(scores).reduce((sum, v) => sum + v, 0);
  if (total === 0) return { natural: 20, cute: 20, elegant: 20, calm: 20, bright: 20 };

  const result: Record<string, number> = {};
  for (const [key, value] of Object.entries(scores)) {
    result[key] = Math.round((value / total) * 100);
  }
  return result as Record<StyleCategory, number>;
}

export const CATEGORY_LABELS: Record<StyleCategory, string> = {
  natural: "ナチュラル",
  cute: "キュート",
  elegant: "エレガント",
  calm: "ヒーリング",
  bright: "ブライト",
};

export const CATEGORY_COLORS: Record<StyleCategory, string> = {
  natural: "#A8B5A0",
  cute: "#D4A5A5",
  elegant: "#8B7355",
  calm: "#C5D1C5",
  bright: "#F5E6B8",
};
