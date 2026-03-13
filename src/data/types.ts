export type StyleCategory = "natural" | "cute" | "elegant" | "calm" | "bright";

export interface QuizOption {
  id: string;
  label: string;
  imageColor: string; // CSS gradient for placeholder
  scores: Partial<Record<StyleCategory, number>>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  options: QuizOption[];
}

export interface StyleResult {
  id: StyleCategory;
  name: string;
  subtitle: string;
  description: string;
  colors: string[];
  colorNames: string[];
  keywords: string[];
  imageGradient: string;
  flowers: FlowerItem[];
  displayTips: DisplayTip[];
  scents: ScentItem[];
}

export interface FlowerItem {
  id: string;
  name: string;
  description: string;
  imageGradient: string;
  season?: string;
  price?: string;
}

export interface DisplayTip {
  room: string;
  icon: string;
  size: string;
  description: string;
  tip: string;
  imageGradient: string;
}

export interface ScentItem {
  id: string;
  name: string;
  type: string;
  description: string;
  mood: string;
  imageGradient: string;
}

export interface DiagnosisState {
  answers: Record<string, string>;
  result: StyleCategory | null;
  scores: Record<StyleCategory, number>;
}
