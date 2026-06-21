import Image from "next/image";
import { publicImageExists } from "@/lib/image-utils";

type AspectRatio = "hero" | "editorial" | "wide" | "square" | "banner";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label: string;
  aspectRatio?: AspectRatio;
  priority?: boolean;
  className?: string;
};

const aspectClasses: Record<AspectRatio, string> = {
  hero: "aspect-[4/5]",
  editorial: "aspect-[4/5] sm:aspect-[3/4]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
  banner: "h-[180px] sm:h-[240px] lg:h-[280px]",
};

function PlaceholderIcon() {
  return (
    <svg
      className="h-10 w-10 text-primary/35"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
      />
    </svg>
  );
}

export default function ImagePlaceholder({
  src,
  alt,
  label,
  aspectRatio = "wide",
  priority = false,
  className = "",
}: ImagePlaceholderProps) {
  const exists = publicImageExists(src);

  const isBanner = aspectRatio === "banner";

  const containerClass = [
    "relative w-full overflow-hidden rounded-[8px]",
    !isBanner && "shadow-lg shadow-primary/10 ring-1 ring-primary/10",
    isBanner && "shadow-sm shadow-primary/5 ring-1 ring-primary/8",
    aspectClasses[aspectRatio],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const imageSizes = isBanner
    ? "(max-width: 768px) 100vw, 1152px"
    : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px";

  if (exists) {
    return (
      <div className={containerClass}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes={imageSizes}
        />
      </div>
    );
  }

  const filename = src.split("/").pop() ?? src;

  if (isBanner) {
    return (
      <div
        className={`${containerClass} bg-gradient-to-r from-section-warm via-section-mint to-primary/10`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(15,118,110,0.05)_0%,_transparent_40%,_transparent_60%,_rgba(245,158,122,0.07)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(ellipse_at_left,_rgba(15,118,110,0.08)_0%,_transparent_70%)]" />
        <p className="absolute bottom-3 left-4 text-xs font-medium text-text-muted/80 sm:bottom-4 sm:left-5">
          <span className="font-mono text-[11px] text-accent-text">{filename}</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${containerClass} flex flex-col items-center justify-center bg-gradient-to-br from-section-warm via-section-mint to-primary/8`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,_rgba(245,158,122,0.12)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_85%,_rgba(15,118,110,0.07)_0%,_transparent_45%)]" />
      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-section-white/80 ring-1 ring-primary/10">
          <PlaceholderIcon />
        </div>
        <p className="mt-5 font-serif text-lg font-medium text-primary">{label}</p>
        <p className="mt-1.5 text-xs font-medium text-text-muted">
          Replace with{" "}
          <span className="font-mono text-[11px] text-accent-text">{filename}</span>
        </p>
      </div>
    </div>
  );
}
