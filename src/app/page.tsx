import LinkButton from "@/components/LinkButton";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="h-[60vh] min-h-[400px] flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #FAF6F1 0%, #E8DDD3 30%, #C5D1C5 60%, #E8C4C4 100%)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <circle cx="200" cy="150" r="80" fill="#8B7355" />
              <circle cx="600" cy="100" r="60" fill="#D4A5A5" />
              <circle cx="400" cy="400" r="100" fill="#A8B5A0" />
              <circle cx="700" cy="350" r="40" fill="#F5E6B8" />
              <circle cx="100" cy="400" r="50" fill="#E8C4C4" />
            </svg>
          </div>

          <div className="relative text-center px-6 animate-fade-in-up">
            <p className="text-sm tracking-widest text-[var(--color-text-light)] mb-3 uppercase">
              Dried Flower Guide
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)] leading-tight mb-4">
              あなたにぴったりの
              <br />
              ドライフラワーを見つけよう
            </h1>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-md mx-auto mb-8">
              簡単な質問に答えるだけで、好みに合うお花・飾り方・香りをご提案します
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <LinkButton href="/diagnosis" size="lg">
                診断をはじめる
              </LinkButton>
              <LinkButton href="/learn" variant="outline" size="lg">
                ドライフラワーを知る
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Flow section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">
            ４つのステップでぴったりが見つかる
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-[var(--color-beige-dark)] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "知る", desc: "ドライフラワーの基本", gradient: "linear-gradient(135deg, #E8DDD3, #C5D1C5)", href: "/learn" },
            { step: "2", title: "選ぶ", desc: "スタイル診断", gradient: "linear-gradient(135deg, #E8C4C4, #D4A5A5)", href: "/diagnosis" },
            { step: "3", title: "飾る", desc: "飾り方の提案", gradient: "linear-gradient(135deg, #A8B5A0, #C5D1C5)", href: "/display" },
            { step: "4", title: "香る", desc: "香りの提案", gradient: "linear-gradient(135deg, #F5E6B8, #E8C4A0)", href: "/scent" },
          ].map((item) => (
            <a
              key={item.step}
              href={item.href}
              className="photo-card relative rounded-2xl overflow-hidden group"
            >
              <div className="h-40 md:h-48" style={{ background: item.gradient }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-xs font-medium opacity-70 mb-1">STEP {item.step}</span>
                  <span className="font-serif text-2xl mb-1">{item.title}</span>
                  <span className="text-xs opacity-80">{item.desc}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="bg-white/50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)] mb-6">
            ドライフラワーのある暮らし
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
            水やり不要で、長く楽しめるドライフラワー。
            <br />
            独特のくすみカラーと、時を重ねるほどに深まる風合いが魅力です。
            <br />
            あなたの暮らしに、やさしい彩りを添えてみませんか？
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { label: "手軽さ", value: "水やり不要", gradient: "linear-gradient(135deg, #C5D1C5, #E8DDD3)" },
              { label: "長持ち", value: "数ヶ月〜1年", gradient: "linear-gradient(135deg, #E8DDD3, #FAF6F1)" },
              { label: "おしゃれ", value: "アンティーク感", gradient: "linear-gradient(135deg, #E8C4C4, #E8DDD3)" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl overflow-hidden">
                <div className="h-20" style={{ background: item.gradient }} />
                <div className="p-2 bg-white">
                  <p className="text-xs text-[var(--color-text-light)]">{item.label}</p>
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-4">
        <p className="text-sm text-[var(--color-text-light)] mb-4">
          約2分で完了します
        </p>
        <LinkButton href="/diagnosis" size="lg">
          さっそく診断してみる
        </LinkButton>
      </section>
    </div>
  );
}
