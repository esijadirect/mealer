import Icon from "../Icon.jsx";

/**
 * Purely presentational + a click handler — the boolean `active` state
 * (whether this listing is favorited) is owned by App via the `favorites`
 * Set, not by this component, so the header could later show a saved count.
 */
export default function FavoriteButton({ active, onToggle }) {
  return (
    <button
      className="fav-btn"
      aria-label={active ? "Remove from saved" : "Save listing"}
      aria-pressed={active}
      onClick={onToggle}
      style={active ? { color: "#e0245e" } : undefined}
    >
      <Icon
        path="M12 21s-7-4.35-9.5-8.5C1 9 2.5 5.5 6 5c2-.2 3.5.9 4.5 2.3C11.5 5.9 13 4.8 15 5c3.5.5 5 4 3.5 7.5C19 16.65 12 21 12 21z"
        size={15}
        strokeWidth={2}
      />
    </button>
  );
}
