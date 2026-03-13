"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StyleCategory } from "@/data/types";
import { styleResults } from "@/data/styles";
import SectionTitle from "@/components/SectionTitle";
import LinkButton from "@/components/LinkButton";

export default function DisplayPage() {
  const router = useRouter();
  const [styleId, setStyleId] = useState<StyleCategory | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("selectedStyle") as StyleCategory | null;
    if (stored && styleResults[stored]) {
      setStyleId(stored);
    }
  }, []);

  const style = styleId ? styleResults[styleId] : null;

  // Show all styles if no diagnosis result
  const displayStyles = style ? [style] : Object.values(styleResults);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SectionTitle
        title="飾り方の提案"
        subtitle={style ? `「${style.name}」に合わせた飾り方` : "スタイル別の飾り方ガイド"}
      />

      {!style && (
        <div className="text-center mb-8">
          <p className="text-sm text-[var(--color-text-light)] mb-3">
            診断を受けると、あなたに合った飾り方が表示されます
          </p>
          <LinkButton href="/diagnosis" variant="outline" size="sm">
            診断を受ける
          </LinkButton>
        </div>
      )}

      {displayStyles.map((s) => (
        <div key={s.id} className="mb-12">
          {!style && (
            <h3 className="font-serif text-lg text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: s.imageGradient }} />
              {s.name}
            </h3>
          )}

          <div className="space-y-4">
            {s.displayTips.map((tip, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <div className="md:flex">
                  {/* Photo area */}
                  <div
                    className="h-40 md:h-auto md:w-48 md:flex-shrink-0 relative"
                    style={{ background: tip.imageGradient }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">{tip.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-medium text-[var(--color-text-primary)]">
                        {tip.room}
                      </h4>
                      <span className="text-xs px-2 py-0.5 bg-[var(--color-cream)] rounded-full text-[var(--color-text-light)]">
                        {tip.size}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                      {tip.description}
                    </p>
                    <div className="bg-[var(--color-cream)] rounded-lg p-3">
                      <p className="text-xs text-[var(--color-brown-warm)]">
                        💡 {tip.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Care tips */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
        <h3 className="font-serif text-lg text-[var(--color-text-primary)] mb-4">
          飾る時の注意点
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { icon: "☀️", title: "直射日光を避ける", desc: "色あせや劣化の原因になります" },
            { icon: "💧", title: "湿気に注意", desc: "カビの原因に。風通しの良い場所で" },
            { icon: "🌡️", title: "エアコンの風を避ける", desc: "乾燥しすぎて花びらが崩れることも" },
            { icon: "🧹", title: "定期的にほこり取り", desc: "ドライヤー冷風でやさしく" },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 p-3 bg-[var(--color-cream)] rounded-xl">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{item.title}</p>
                <p className="text-xs text-[var(--color-text-light)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-3">
        {style && (
          <LinkButton href="/scent" variant="primary">
            香りの提案を見る →
          </LinkButton>
        )}
        <LinkButton href="/result" variant="outline">
          ← 診断結果に戻る
        </LinkButton>
      </div>
    </div>
  );
}
