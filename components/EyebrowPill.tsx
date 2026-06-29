import { eyebrowPillSection } from "@/lib/layout";

type EyebrowPillProps = {
  children: React.ReactNode;
  variant?: "dark" | "light" | "teal" | "white" | "pathway";
  size?: "default" | "section";
  className?: string;
};

const variantClasses = {
  dark: "bg-white/10 text-white",
  light: "bg-[var(--figma-mint-bg)] text-[var(--figma-ink)]",
  teal: "bg-[var(--figma-hero-teal)]/10 text-[var(--figma-ink)]",
  white: "bg-[var(--figma-hero-teal)]/10 text-[var(--figma-ink)]",
  pathway: "bg-[#29626b] text-white",
};

const sizeClasses = {
  default: "px-4 py-2 text-xs font-semibold capitalize leading-4",
  section: eyebrowPillSection,
};

export default function EyebrowPill({
  children,
  variant = "light",
  size = "default",
  className = "",
}: EyebrowPillProps) {
  return (
    <span
      className={`inline-flex w-fit items-center justify-center rounded-[52px] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
