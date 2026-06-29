"use client";

/**
 * Site navigation — green overlay header on all pages (matches homepage).
 * Scroll hide/reveal applies at all viewport widths.
 * Rendered globally from app/layout.tsx.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { primaryNavLinks } from "@/lib/content";
import { navHeight } from "@/lib/layout";

const navMotionClasses =
  "transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity]";

function NavLink({
  href,
  label,
  isActive,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block pb-1 text-base font-semibold leading-4 tracking-[-0.04em] text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-[var(--figma-coral)] transition-transform duration-300 ease-out group-hover:scale-x-100 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </Link>
  );
}

function BookConsultationButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-[64px] bg-[var(--figma-green)] px-5 py-3 text-base font-semibold leading-[22px] tracking-[-0.04em] text-[var(--figma-ink)] transition-opacity hover:opacity-90 min-[1060px]:px-6 min-[1060px]:py-3.5 ${className}`}
    >
      Book Consultation
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isHome = pathname === "/";
  const usesOverlayNav = isHome || pathname === "/services" || pathname === "/contact" || pathname === "/programmes";

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (mobileOpen) {
        setNavVisible(true);
        lastScrollY.current = window.scrollY;
        return;
      }

      const currentY = window.scrollY;
      const previousY = lastScrollY.current;
      const diff = currentY - previousY;

      if (currentY <= 10) {
        setNavVisible(true);
      } else if (diff < -4) {
        setNavVisible(true);
      } else if (diff > 4 && currentY > 64) {
        setNavVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mobileOpen]);

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      return isHome;
    }
    return pathname === href;
  };

  const hideNavOnScroll = !navVisible && !mobileOpen;
  const headerPosition = usesOverlayNav ? "fixed" : "sticky";

  return (
    <header
      data-home-nav={usesOverlayNav ? "" : undefined}
      data-internal-nav={usesOverlayNav ? undefined : ""}
      className={`${headerPosition} inset-x-0 top-0 z-50 w-full bg-[rgba(17,81,90,0.9)] backdrop-blur-[50px] ${navMotionClasses} ${
        hideNavOnScroll
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <Container
        data-home-nav-inner=""
        className={`flex ${navHeight} items-center justify-between gap-3 min-[1060px]:gap-4`}
      >
        <Logo variant="light" />

        <nav
          className="hidden items-center gap-5 min-[1060px]:flex"
          aria-label="Main navigation"
        >
          {primaryNavLinks.map((link) => (
            <NavLink
              key={`${link.href}-${link.label}`}
              href={link.href}
              label={link.label}
              isActive={isLinkActive(link.href)}
              className={isLinkActive(link.href) ? "text-white" : "text-white/90"}
            />
          ))}
        </nav>

        <div className="hidden min-[1060px]:block">
          <BookConsultationButton />
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center text-white min-[1060px]:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </Container>

      {mobileOpen && (
        <nav
          className="border-t border-white/20 bg-[rgba(17,81,90,0.95)] backdrop-blur-[50px] min-[1060px]:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="py-3">
            <ul className="flex flex-col gap-0.5">
              {primaryNavLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <li key={`mobile-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block border-l-2 px-3 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? "border-[var(--figma-coral)] text-white"
                          : "border-transparent text-white/90 hover:border-[var(--figma-coral)]/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 border-t border-white/20 pt-3">
              <BookConsultationButton
                className="block w-full px-4 py-3 text-center text-sm"
                onClick={() => setMobileOpen(false)}
              />
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
