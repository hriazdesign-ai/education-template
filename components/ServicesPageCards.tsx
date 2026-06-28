import Link from "next/link";
import Container from "@/components/Container";
import { IconArrowRight } from "@/components/icons";
import { services } from "@/lib/content";
import { sectionBottom, sectionTop } from "@/lib/layout";

const cardSurfaceClasses = [
  "relative flex h-full min-h-full flex-col overflow-hidden",
  "bg-[var(--figma-mint-bg)]",
  "transition-colors duration-[250ms] ease-out",
  "group-hover:bg-white group-focus-within:bg-white",
].join(" ");

const accentBarClasses = [
  "pointer-events-none absolute left-0 top-0 z-10 block h-1 w-full",
  "origin-left bg-[var(--figma-coral)] opacity-0",
  "[transform:scaleX(0)]",
  "transition-[transform,opacity]",
  "[transition-duration:350ms,120ms]",
  "[transition-timing-function:cubic-bezier(0.22,1,0.36,1),ease-out]",
  "group-hover:opacity-100 group-hover:[transform:scaleX(1)]",
  "group-focus-within:opacity-100 group-focus-within:[transform:scaleX(1)]",
  "motion-reduce:transition-none",
].join(" ");

export default function ServicesPageCards() {
  return (
    <section className={`bg-[var(--figma-mint-bg)] ${sectionTop} ${sectionBottom}`}>
      <Container>
        <ul className="grid gap-4 min-[768px]:grid-cols-3 min-[768px]:gap-0 min-[768px]:border min-[768px]:border-[var(--figma-hero-teal)]/40">
          {services.map((service, index) => {
            const isLast = index === services.length - 1;
            const isLastCol = index % 3 === 2;
            const isLastRow = index >= 3;

            return (
              <li
                key={service.title}
                className={`group relative h-full border border-[var(--figma-hero-teal)]/40 min-[768px]:border-0 ${
                  !isLast ? "min-[768px]:border-b" : ""
                } ${!isLastCol ? "min-[768px]:border-r" : ""} ${
                  isLastRow ? "min-[768px]:border-b-0" : ""
                }`}
              >
                <div
                  className={`${cardSurfaceClasses} flex flex-col gap-6 px-6 py-8 min-[768px]:gap-10 min-[768px]:px-7 min-[768px]:py-10`}
                >
                  <span aria-hidden="true" className={accentBarClasses} />
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white text-lg tracking-[-0.36px] text-[var(--figma-ink)] transition-colors duration-[250ms] ease-out group-hover:bg-[#F2F7F7] group-focus-within:bg-[#F2F7F7]">
                    {index + 1}
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl leading-[22px] tracking-[-0.2px] text-[var(--figma-ink)]">
                      {service.title}
                    </h3>
                    <p className="text-base leading-[22px] text-[var(--figma-ink)]">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-auto flex items-center justify-between gap-4 text-base font-medium uppercase leading-[22px] text-[var(--figma-ink)]/60 transition-[color] duration-[250ms] ease-out group-hover:text-[var(--figma-ink)] group-focus-within:text-[var(--figma-ink)]"
                  >
                    <span>Learn More</span>
                    <IconArrowRight className="h-4 w-4 shrink-0 transition-transform duration-[250ms] ease-out group-hover:translate-x-1.5 group-focus-within:translate-x-1.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-within:translate-x-0" />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
