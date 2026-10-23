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
/** Al + 1 (do): a geometric A, a lowercase l, and the first scale degree. */
export function Mark() {
  return (
    <svg
      className="brand-mark"
      width="44"
      height="32"
      viewBox="0 0 48 36"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <path d="M4 28 13 7l9 21M8 20h10" />
        <path d="M28 7v21h4" />
        <path d="m37 12 5-4v20m-5 0h10" />
      </g>
      <path
        d="M37 33h10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity=".55"
      />
    </svg>
  );
}
