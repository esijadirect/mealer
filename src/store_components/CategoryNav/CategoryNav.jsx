import CategoryPill from "./CategoryPill.jsx";

/**
 * `activeCategory` / `onSelectCategory` are passed down from App so the
 * Sidebar can stay in sync with the nav (both represent "current category").
 */
export default function CategoryNav({ categories, activeCategory, onSelectCategory }) {
  return (
    <nav className="category-nav">
      <div className="category-scroll">
        {categories.map((cat) => (
          <CategoryPill
            key={cat.id}
            category={cat}
            active={cat.id === activeCategory}
            onSelect={onSelectCategory}
          />
        ))}
      </div>
    </nav>
  );
}
