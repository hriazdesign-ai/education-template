type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  showKeyline?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  showKeyline = true,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const barAlign = align === "center" ? "mx-auto" : "";

  return (
    <div className={`w-full ${alignClass}`}>
      {eyebrow && (
        <>
          {showKeyline && (
            <span
              className={`mb-3 block h-1 w-10 rounded-none ${barAlign} ${
                light ? "bg-accent-on-dark" : "bg-accent-text"
              }`}
            />
          )}
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
              light ? "text-accent-on-dark" : "text-accent-text"
            }`}
          >
            {eyebrow}
          </p>
        </>
      )}
      <h2
        className={`font-serif text-3xl font-medium tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/90" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
