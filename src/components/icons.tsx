export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
/** AL + 1 (do): uppercase initials and the first scale degree. */
export function BrandGlyph({ color = "currentColor" }: { color?: string }) {
  return (
    <>
      <g stroke={color} strokeWidth="3.4" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M4 37 15 9l11 28M9 26h12" />
        <path d="M33 9v28h14" />
        <path d="m53 15 8-6v27" />
      </g>
      <ellipse cx="55.5" cy="36" rx="6" ry="3.8" transform="rotate(-20 55.5 36)" fill={color} />
    </>
  );
}

export function Mark() {
  return (
    <svg
      className="brand-mark"
      width="48"
      height="36"
      viewBox="0 0 72 48"
      fill="none"
      aria-hidden="true"
    >
      <BrandGlyph />
    </svg>
  );
}
