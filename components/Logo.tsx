import Link from "next/link";

type LogoProps = {
  /** `light` — white text on homepage nav overlay; `dark` — ink text everywhere else */
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center justify-center border border-[var(--figma-coral)] px-2.5 py-1.5 max-[767px]:max-w-[58vw] min-[768px]:px-3 min-[768px]:py-2 min-[1060px]:px-4 min-[1060px]:py-2.5 ${
        isLight ? "text-white" : "text-[var(--figma-ink)]"
      } ${className}`}
    >
      <span className="flex flex-col items-center text-center leading-none">
        <span className="font-serif text-[10px] font-normal uppercase tracking-[0.14em] min-[768px]:text-[11px] min-[1060px]:text-[13px] min-[1060px]:tracking-[0.16em]">
          Bright Path
        </span>
        <span
          className={`mt-1 font-serif text-[9px] font-normal uppercase tracking-[0.2em] min-[768px]:text-[10px] min-[1060px]:mt-1.5 min-[1060px]:text-[11px] min-[1060px]:tracking-[0.22em] ${
            isLight ? "text-white/90" : "text-[var(--figma-ink)]/80"
          }`}
        >
          Learning
        </span>
      </span>
    </Link>
  );
}
