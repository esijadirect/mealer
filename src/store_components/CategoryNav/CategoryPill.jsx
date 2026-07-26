import Icon from "../Icon.jsx";

export default function CategoryPill({ category, active, onSelect }) {
  return (
    <a
      href="#"
      className={"cat-pill" + (active ? " active" : "")}
      onClick={(e) => {
        e.preventDefault();
        onSelect(category.id);
      }}
    >
      <Icon path={category.icon} size={20} />
      <span>{category.name}</span>
    </a>
  );
}
