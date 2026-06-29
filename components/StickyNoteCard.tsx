import type { ReactNode } from "react";

export const stickyNoteColors = [
  "bg-[var(--figma-quote-yellow)]",
  "bg-[var(--figma-green)]",
  "bg-[var(--figma-testimonial-peach)]",
  "bg-[var(--figma-mint-bg)]",
] as const;

type StickyNoteCardProps = {
  index: 0 | 1 | 2 | 3;
  title: ReactNode;
  description: ReactNode;
  /** Optional padding override for section-specific rhythm */
  paddingClassName?: string;
};

export default function StickyNoteCard({
  index,
  title,
  description,
  paddingClassName = "px-6 py-7 min-[1060px]:px-6 min-[1060px]:py-8",
}: StickyNoteCardProps) {
  return (
    <div className="flex items-stretch">
      <div
        className={`sticky-note sticky-note-${index + 1} flex w-full flex-col gap-4 min-[1060px]:gap-5 ${paddingClassName} ${stickyNoteColors[index]}`}
      >
        <h3 className="text-xl leading-[22px] tracking-[-0.4px] text-[var(--figma-ink)]">{title}</h3>
        <p className="text-base leading-[22px] text-[var(--figma-ink)]">{description}</p>
      </div>
    </div>
  );
}
