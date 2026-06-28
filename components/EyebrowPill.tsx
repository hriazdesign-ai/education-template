type EyebrowPillProps = {
  children: React.ReactNode;
  variant?: "dark" | "light" | "teal" | "white" | "pathway";
  className?: string;
};

const variantClasses = {
  dark: "bg-white/10 text-white",
  light: "bg-[var(--figma-mint-bg)] text-[var(--figma-ink)]",
  teal: "bg-[var(--figma-hero-teal)]/10 text-[var(--figma-ink)]",
  white: "bg-[var(--figma-hero-teal)]/10 text-[var(--figma-ink)]",
  pathway: "bg-[#29626b] text-white",
};

export default function EyebrowPill({
  children,
  variant = "light",
  className = "",
}: EyebrowPillProps) {
  return (
    <span
      className={`inline-flex w-fit items-center justify-center rounded-[52px] px-4 py-2 text-xs font-semibold capitalize leading-4 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
