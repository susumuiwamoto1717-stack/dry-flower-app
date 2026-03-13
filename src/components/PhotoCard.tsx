"use client";

interface PhotoCardProps {
  gradient: string;
  title: string;
  subtitle?: string;
  size?: "sm" | "md" | "lg";
  selected?: boolean;
  onClick?: () => void;
  badge?: string;
  className?: string;
}

export default function PhotoCard({
  gradient,
  title,
  subtitle,
  size = "md",
  selected = false,
  onClick,
  badge,
  className = "",
}: PhotoCardProps) {
  const heights = { sm: "h-32", md: "h-48", lg: "h-64" };

  return (
    <button
      onClick={onClick}
      className={`
        photo-card relative w-full rounded-2xl overflow-hidden text-left
        ${selected ? "selection-ring selected ring-2 ring-[var(--color-pink-muted)]" : ""}
        ${onClick ? "cursor-pointer" : "cursor-default"}
        ${className}
      `}
    >
      {/* Image placeholder with gradient */}
      <div
        className={`${heights[size]} w-full`}
        style={{ background: gradient }}
      >
        {/* Decorative flower shapes */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="140" cy="60" r="30" fill="white" opacity="0.3" />
            <circle cx="60" cy="140" r="20" fill="white" opacity="0.2" />
            <circle cx="160" cy="150" r="15" fill="white" opacity="0.25" />
          </svg>
        </div>
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-3 pt-8">
        <p className="text-white text-sm font-medium leading-tight">{title}</p>
        {subtitle && (
          <p className="text-white/80 text-xs mt-0.5">{subtitle}</p>
        )}
      </div>

      {/* Badge */}
      {badge && (
        <span className="absolute top-2 right-2 bg-white/90 text-[var(--color-text-primary)] text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}

      {/* Selection check */}
      {selected && (
        <div className="absolute top-2 left-2 w-6 h-6 bg-[var(--color-pink-muted)] rounded-full flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
}
