import { useState } from "react";
import Icon from "../Icon.jsx";

/**
 * Controlled search bar. Lifts `onSearch` so a parent (e.g. App) can filter
 * `listings` — the original static mockup had no filtering behavior, this is
 * the natural hook point to add it.
 */
export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch?.(query);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-segment">
        <Icon path="M4 6h16M4 12h16M4 18h16" size={14} strokeWidth={2} />
        All Categories
      </div>
      <div className="search-segment">
        <Icon
          path="M12 22s8-7.58 8-13A8 8 0 0 0 4 9c0 5.42 8 13 8 13z M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
          size={14}
          strokeWidth={2}
        />
        All Nigeria
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="What are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-btn" type="submit">
        <Icon path="M11 11m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0 M21 21l-4.3-4.3" size={16} strokeWidth={2} />
        Search
      </button>
    </form>
  );
}
