import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: LinkButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full font-medium transition-all";
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary: "bg-[var(--color-brown-warm)] text-white hover:bg-[var(--color-brown-light)] shadow-sm",
    secondary: "bg-[var(--color-beige)] text-[var(--color-text-primary)] hover:bg-[var(--color-beige-dark)]",
    outline: "border border-[var(--color-beige-dark)] text-[var(--color-text-secondary)] hover:bg-[var(--color-beige)]/50",
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
