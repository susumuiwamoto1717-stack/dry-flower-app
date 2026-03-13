"use client";

import { useEffect, useState } from "react";
import { StyleCategory } from "@/data/types";
import { styleResults } from "@/data/styles";
import SectionTitle from "@/components/SectionTitle";
import LinkButton from "@/components/LinkButton";

export default function ScentPage() {
  const [styleId, setStyleId] = useState<StyleCategory | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("selectedStyle") as StyleCategory | null;
    if (stored && styleResults[stored]) {
      setStyleId(stored);
    }
  }, []);

  const style = styleId ? styleResults[styleId] : null;
  const displayStyles = style ? [style] : Object.values(styleResults);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SectionTitle
        title="香りの提案"
        subtitle={style ? `「${style.name}」に合う香り` : "スタイル別のおすすめ香り"}
      />

      {!style && (
        <div className="text-center mb-8">
          <p className="text-sm text-[var(--color-text-light)] mb-3">
            診断を受けると、あなたに合った香りが表示されます
          </p>
          <LinkButton href="/diagnosis" variant="outline" size="sm">
            診断を受ける
          </LinkButton>
        </div>
      )}

      {/* Intro */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          ドライフラワーと香りを組み合わせることで、視覚だけでなく嗅覚でも空間を演出できます。
          お花のスタイルに合った香りを選ぶことで、統一感のある心地よい空間が生まれます。
        </p>
      </div>

      {displayStyles.map((s) => (
        <div key={s.id} className="mb-10">
          {!style && (
            <h3 className="font-serif text-lg text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: s.imageGradient }} />
              {s.name}
            </h3>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {s.scents.map((scent) => (
              <div
                key={scent.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Scent visual */}
                <div
                  className="h-32 relative"
                  style={{ background: scent.imageGradient }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl opacity-60">🌿</span>
                    </div>
                  </div>
                  <span className="absolute top-2 right-2 text-xs px-2 py-0.5 bg-white/80 rounded-full text-[var(--color-text-secondary)]">
                    {scent.type}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-medium text-[var(--color-text-primary)] mb-1">
                    {scent.name}
                  </h4>
                  <p className="text-xs text-[var(--color-text-light)] mb-2">
                    {scent.mood}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {scent.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* How to enjoy */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
        <h3 className="font-serif text-lg text-[var(--color-text-primary)] mb-4">
          香りの楽しみ方
        </h3>
        <div className="space-y-3">
          {[
            {
              method: "アロマディフューザー",
              desc: "お部屋全体にやさしく香りを広げます。ドライフラワーの隣に置くと視覚と嗅覚の両方で楽しめます。",
              icon: "💨",
            },
            {
              method: "サシェ（香り袋）",
              desc: "ドライフラワーと一緒にクローゼットや引き出しに。ラベンダーのサシェが特に人気。",
              icon: "👝",
            },
            {
              method: "アロマスプレー",
              desc: "ドライフラワーに直接かけるのはNG。近くの空間にスプレーして間接的に香りを楽しんで。",
              icon: "✨",
            },
            {
              method: "キャンドル",
              desc: "ほのかな灯りと香りでリラックスタイムを演出。ドライフラワーの近くでの使用は火の元に注意。",
              icon: "🕯️",
            },
          ].map((item) => (
            <div key={item.method} className="flex gap-3 p-3 bg-[var(--color-cream)] rounded-xl">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {item.method}
                </p>
                <p className="text-xs text-[var(--color-text-light)] mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-3">
        {style && (
          <LinkButton href="/catalog" variant="primary">
            お花図鑑を見る →
          </LinkButton>
        )}
        <LinkButton href="/result" variant="outline">
          ← 診断結果に戻る
        </LinkButton>
      </div>
    </div>
  );
}
