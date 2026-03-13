"use client";

import { useState } from "react";
import { styleResults } from "@/data/styles";
import { StyleCategory } from "@/data/types";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/scoring";
import SectionTitle from "@/components/SectionTitle";

const ALL_STYLES = Object.values(styleResults);
const ALL_FLOWERS = ALL_STYLES.flatMap((s) =>
  s.flowers.map((f) => ({ ...f, styleId: s.id, styleName: s.name }))
);

export default function CatalogPage() {
  const [filter, setFilter] = useState<StyleCategory | "all">("all");

  const displayed = filter === "all"
    ? ALL_FLOWERS
    : ALL_FLOWERS.filter((f) => f.styleId === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle title="お花図鑑" subtitle="ドライフラワーのラインナップ" />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`text-xs px-4 py-2 rounded-full transition-all ${
            filter === "all"
              ? "bg-[var(--color-brown-warm)] text-white"
              : "bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-beige)]"
          }`}
        >
          すべて ({ALL_FLOWERS.length})
        </button>
        {(Object.keys(CATEGORY_LABELS) as StyleCategory[]).map((cat) => {
          const count = ALL_FLOWERS.filter((f) => f.styleId === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                filter === cat
                  ? "text-white shadow-sm"
                  : "bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-beige)]"
              }`}
              style={filter === cat ? { backgroundColor: CATEGORY_COLORS[cat] } : {}}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: CATEGORY_COLORS[cat] }}
              />
              {CATEGORY_LABELS[cat]} ({count})
            </button>
          );
        })}
      </div>

      {/* Flower grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayed.map((flower) => (
          <div
            key={`${flower.styleId}-${flower.id}`}
            className="photo-card bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="relative h-36 md:h-44" style={{ background: flower.imageGradient }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 font-serif text-4xl">❁</span>
              </div>
              <span
                className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: CATEGORY_COLORS[flower.styleId as StyleCategory] }}
              >
                {CATEGORY_LABELS[flower.styleId as StyleCategory]}
              </span>
            </div>
            <div className="p-3">
              <p className="font-medium text-sm text-[var(--color-text-primary)]">
                {flower.name}
              </p>
              <p className="text-xs text-[var(--color-text-light)] mt-1 line-clamp-2">
                {flower.description}
              </p>
              {flower.price && (
                <p className="text-xs text-[var(--color-brown-warm)] mt-2 font-medium">
                  {flower.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {displayed.length === 0 && (
        <p className="text-center text-sm text-[var(--color-text-light)] py-12">
          該当するお花がありません
        </p>
      )}
    </div>
  );
}
