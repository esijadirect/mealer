export default function Icon({ path, size = 16, strokeWidth = 1.8 }) {
  const segments = String(path)
    .split(" M")
    .map((part, index) => (index === 0 ? part : `M${part}`));

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {segments.map((segment, index) => (
        <path key={`${segment}-${index}`} d={segment} />
      ))}
    </svg>
  );
}
