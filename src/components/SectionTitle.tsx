interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="font-serif text-xl md:text-2xl text-[var(--color-text-primary)]">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm text-[var(--color-text-light)]">{subtitle}</p>
      )}
      <div className={`mt-3 w-12 h-0.5 bg-[var(--color-beige-dark)] ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
