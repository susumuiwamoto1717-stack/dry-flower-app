"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DiagnosisState, StyleCategory } from "@/data/types";
import { styleResults } from "@/data/styles";
import { getScorePercentages, CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/scoring";
import PhotoCard from "@/components/PhotoCard";
import LinkButton from "@/components/LinkButton";
import SectionTitle from "@/components/SectionTitle";

export default function ResultPage() {
  const router = useRouter();
  const [state, setState] = useState<DiagnosisState | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("diagnosisResult");
    if (stored) {
      setState(JSON.parse(stored));
    } else {
      router.push("/diagnosis");
    }
  }, [router]);

  if (!state || !state.result) return null;

  const style = styleResults[state.result];
  const percentages = getScorePercentages(state.scores);
  const sortedCategories = (Object.entries(percentages) as [StyleCategory, number][]).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Result Hero */}
      <div
        className="rounded-3xl overflow-hidden mb-8 animate-fade-in-up"
        style={{ background: style.imageGradient }}
      >
        <div className="relative h-48 md:h-64 flex items-center justify-center text-center px-6">
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              <circle cx="100" cy="80" r="50" fill="white" />
              <circle cx="300" cy="200" r="40" fill="white" />
              <circle cx="200" cy="120" r="60" fill="white" />
            </svg>
          </div>
          <div className="relative">
            <p className="text-white/70 text-xs tracking-widest mb-2 uppercase">
              Your Style
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-white mb-2">
              {style.name}
            </h1>
            <p className="text-white/80 text-sm">{style.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Score chart */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm animate-fade-in-up animate-delay-100" style={{ opacity: 0 }}>
        <p className="text-xs text-[var(--color-text-light)] mb-4 text-center">
          あなたのスタイル傾向
        </p>
        <div className="space-y-3">
          {sortedCategories.map(([cat, pct]) => (
            <div key={cat} className="flex items-center gap-3">
              <span className="text-xs text-[var(--color-text-secondary)] w-20 text-right">
                {CATEGORY_LABELS[cat]}
              </span>
              <div className="flex-1 h-3 bg-[var(--color-cream)] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full progress-fill"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: CATEGORY_COLORS[cat],
                  }}
                />
              </div>
              <span className="text-xs text-[var(--color-text-light)] w-8">{pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm animate-fade-in-up animate-delay-200" style={{ opacity: 0 }}>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {style.description}
        </p>

        {/* Color palette */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[var(--color-text-light)]">カラー：</span>
          {style.colors.map((color, i) => (
            <div key={i} className="flex items-center gap-1">
              <div
                className="w-5 h-5 rounded-full border border-black/10"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-[var(--color-text-light)]">
                {style.colorNames[i]}
              </span>
            </div>
          ))}
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mt-3">
          {style.keywords.map((kw) => (
            <span
              key={kw}
              className="text-xs px-3 py-1 rounded-full bg-[var(--color-cream)] text-[var(--color-text-secondary)]"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* Recommended flowers */}
      <section className="mb-12">
        <SectionTitle title="おすすめのお花" subtitle="あなたのスタイルに合う花材" />
        <div className="grid grid-cols-2 gap-3">
          {style.flowers.map((flower) => (
            <div key={flower.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-32" style={{ background: flower.imageGradient }}>
                <div className="h-full flex items-center justify-center">
                  <span className="text-white/40 font-serif text-3xl">❁</span>
                </div>
              </div>
              <div className="p-3">
                <p className="font-medium text-sm text-[var(--color-text-primary)]">
                  {flower.name}
                </p>
                <p className="text-xs text-[var(--color-text-light)] mt-1 line-clamp-2">
                  {flower.description}
                </p>
                {flower.price && (
                  <p className="text-xs text-[var(--color-brown-warm)] mt-1">{flower.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to next sections */}
      <div className="grid grid-cols-2 gap-3 mb-8">
        <PhotoCard
          gradient="linear-gradient(135deg, #A8B5A0, #C5D1C5)"
          title="飾り方を見る"
          subtitle="おすすめの飾り方"
          size="sm"
          onClick={() => {
            sessionStorage.setItem("selectedStyle", state.result!);
            router.push("/display");
          }}
        />
        <PhotoCard
          gradient="linear-gradient(135deg, #F5E6B8, #E8C4C4)"
          title="香りを見る"
          subtitle="相性の良い香り"
          size="sm"
          onClick={() => {
            sessionStorage.setItem("selectedStyle", state.result!);
            router.push("/scent");
          }}
        />
      </div>

      {/* Retry */}
      <div className="text-center">
        <LinkButton href="/diagnosis" variant="outline" size="sm">
          もう一度診断する
        </LinkButton>
      </div>
    </div>
  );
}
