"use client";

/**
 * Site navigation — desktop bar at min-[1060px], overlay on homepage (`/`).
 * Scroll hide/reveal applies at all viewport widths (same behaviour as mobile).
 * Rendered globally from app/layout.tsx.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/content";
import { homeNavHeight } from "@/lib/homepage-spacing";

const figmaNavLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services", label: "Support Services" },
  { href: "/pricing", label: "Programmes" },
  { href: "/#resources", label: "Resources" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const navMotionClasses =
  "transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity]";

function NavLink({
  href,
  label,
  isHome,
  isActive,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  isHome: boolean;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}) {
  if (isHome) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`text-base font-semibold leading-4 tracking-[-0.04em] transition-opacity hover:opacity-80 ${className}`}
      >
        {label}
      </Link>
    );
  }

  const underlineColor = "bg-accent-button";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-block pb-1 text-base font-semibold leading-4 tracking-[-0.04em] transition-colors ${className}`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${underlineColor} ${
          isActive ? "scale-x-100" : ""
        }`}
      />
    </Link>
  );
}

function LogoMark({ isHome }: { isHome: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center justify-center border border-[var(--figma-coral)] px-2 py-1.5 max-[767px]:max-w-[58vw] min-[768px]:px-3 min-[768px]:py-2.5 min-[1060px]:px-3.5 min-[1060px]:py-2 ${
        isHome ? "text-white" : "text-[var(--figma-ink)]"
      }`}
    >
      <span className="font-serif text-[11px] font-normal uppercase leading-[14px] tracking-[-0.04em] min-[768px]:text-sm min-[768px]:leading-5 min-[1060px]:text-[19px] min-[1060px]:leading-[22px] min-[1060px]:tracking-[-0.76px]">
        {siteConfig.name}
      </span>
    </Link>
  );
}

function BookConsultationButton({
  isHome,
  className = "",
  onClick,
}: {
  isHome: boolean;
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

  const linkColorClass = (href: string) => {
    const isActive = isLinkActive(href);
    if (isHome) {
      return isActive ? "text-white" : "text-white/90 hover:text-white";
    }
    return isActive ? "text-accent-text" : "text-text-muted hover:text-primary";
  };

  const hideNavOnScroll = !navVisible && !mobileOpen;

  return (
    <header
      data-home-nav={isHome ? "" : undefined}
      className={`fixed inset-x-0 top-0 z-50 w-full ${navMotionClasses} ${
        hideNavOnScroll
          ? "pointer-events-none -translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      } ${
        isHome
          ? "bg-[rgba(17,81,90,0.7)] backdrop-blur-[50px]"
          : "border-b border-primary/10 bg-section-white/95 backdrop-blur-md"
      }`}
    >
      <Container
        data-home-nav-inner={isHome ? "" : undefined}
        className={`flex ${homeNavHeight} items-center justify-between gap-3 min-[1060px]:gap-4`}
      >
        <LogoMark isHome={isHome} />

        <nav
          className="hidden items-center gap-5 min-[1060px]:flex"
          aria-label="Main navigation"
        >
          {figmaNavLinks.map((link) => (
            <NavLink
              key={`${link.href}-${link.label}`}
              href={link.href}
              label={link.label}
              isHome={isHome}
              isActive={isLinkActive(link.href)}
              className={linkColorClass(link.href)}
            />
          ))}
        </nav>

        <div className="hidden min-[1060px]:block">
          <BookConsultationButton isHome={isHome} />
        </div>

        <button
          type="button"
          className={`inline-flex h-9 w-9 items-center justify-center min-[1060px]:hidden ${
            isHome ? "text-white" : "text-primary"
          }`}
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
          className={`border-t min-[1060px]:hidden ${
            isHome
              ? "border-white/20 bg-[rgba(17,81,90,0.95)] backdrop-blur-[50px]"
              : "border-primary/10 bg-section-white"
          }`}
          aria-label="Mobile navigation"
        >
          <Container className="py-3">
            <ul className="flex flex-col gap-0.5">
              {figmaNavLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <li key={`mobile-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block border-l-2 px-3 py-2 text-sm font-semibold transition-colors ${
                        isHome
                          ? isActive
                            ? "border-[var(--figma-coral)] text-white"
                            : "border-transparent text-white/90 hover:border-[var(--figma-coral)]/60 hover:text-white"
                          : isActive
                            ? "border-accent-button bg-primary/5 text-accent-text"
                            : "border-transparent text-text hover:border-accent-button/60 hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={`mt-3 border-t pt-3 ${isHome ? "border-white/20" : "border-primary/10"}`}>
              <BookConsultationButton
                isHome={isHome}
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
