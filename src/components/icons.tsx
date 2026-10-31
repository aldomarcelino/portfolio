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
/** AL + 1 (do): the L shares its stem with 1 and ends in a note head. */
export function BrandGlyph({ color = "currentColor" }: { color?: string }) {
  return (
    <>
      <g stroke={color} strokeWidth="3.4" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M8 37 20 10l12 27M13 26h14" />
        <path d="m32 16 8-6v27h14" />
      </g>
      <ellipse cx="35" cy="37" rx="6" ry="3.8" transform="rotate(-20 35 37)" fill={color} />
    </>
  );
}

export function Mark() {
  return (
    <svg
      className="brand-mark"
      width="48"
      height="36"
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
    >
      <BrandGlyph />
    </svg>
  );
}
