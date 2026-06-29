import Container from "@/components/Container";
import EyebrowPill from "@/components/EyebrowPill";
import { sectionIntroGap } from "@/lib/layout";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  pillVariant?: "dark" | "light" | "teal" | "white" | "pathway";
  align?: "center" | "left";
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
  pillVariant,
  align = "center",
  className = "",
}: SectionIntroProps) {
  const resolvedPill = pillVariant ?? (light ? "dark" : "light");
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <Container
      size="prose"
      pad={false}
      className={`flex flex-col ${sectionIntroGap} ${alignClass} ${className}`}
    >
      <EyebrowPill variant={resolvedPill} size="section">
        {eyebrow}
      </EyebrowPill>
      <h2
        className={`text-[28px] font-normal leading-[38px] tracking-[-0.4px] min-[768px]:text-[32px] min-[768px]:leading-[44px] min-[1060px]:text-[40px] ${
          light ? "text-white" : "text-[var(--figma-ink)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-[22px] ${
            light ? "text-white" : "text-[var(--figma-ink)]"
          }`}
        >
          {description}
        </p>
      )}
    </Container>
  );
}
