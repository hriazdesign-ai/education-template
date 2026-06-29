import Link from "next/link";
import Container from "@/components/Container";
import { createPageMetadata } from "@/lib/seo";
import { sectionIntroGap, sectionY } from "@/lib/layout";

export const metadata = {
  ...createPageMetadata({
    title: "Page not found",
    description: "The page you are looking for could not be found.",
  }),
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={`bg-[var(--figma-mint-bg)] ${sectionY}`}>
      <Container
        size="prose"
        className={`flex flex-col items-center text-center ${sectionIntroGap}`}
      >
        <h1 className="text-[32px] font-normal leading-[1.12] tracking-[-0.02em] text-[var(--figma-ink)] min-[768px]:text-[40px] min-[768px]:leading-[44px]">
          Page not found
        </h1>
        <p className="text-base leading-[22px] text-[var(--figma-ink)]">
          Sorry, we couldn&apos;t find the page you were looking for. It may have been moved or
          no longer exists.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-[64px] bg-[var(--figma-hero-teal)] px-5 py-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
