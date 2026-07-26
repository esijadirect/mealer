/**
 * `type` must match one of the CSS classes defined for .badge in index.css:
 * verified | vip | diamond | premium
 */
export default function Badge({ type, label }) {
  if (!type) return null;
  return <span className={`badge ${type}`}>{label}</span>;
}
