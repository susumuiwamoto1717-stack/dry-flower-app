import SectionTitle from "@/components/SectionTitle";
import LinkButton from "@/components/LinkButton";
import { learnSections } from "@/data/learn";

export default function LearnPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SectionTitle title="ドライフラワーを知る" subtitle="まずは基本を押さえましょう" />

      <div className="space-y-8">
        {learnSections.map((section, index) => (
          <article
            key={section.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Image header */}
            <div
              className="h-40 md:h-48 relative"
              style={{ background: section.imageGradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/30 font-serif text-6xl md:text-8xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-lg text-[var(--color-text-primary)] mb-1">
                {section.title}
              </h3>
              <p className="text-xs text-[var(--color-text-light)] mb-4">
                {section.subtitle}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {section.content}
              </p>

              {/* Tips */}
              <div className="bg-[var(--color-cream)] rounded-xl p-4">
                <p className="text-xs font-medium text-[var(--color-brown-warm)] mb-2">
                  ポイント
                </p>
                <ul className="space-y-1.5">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="text-[var(--color-green-sage)] mt-0.5">●</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-sm text-[var(--color-text-light)] mb-4">
          基本がわかったら、次は診断へ
        </p>
        <LinkButton href="/diagnosis">自分に合うスタイルを診断する</LinkButton>
      </div>
    </div>
  );
}
