import SidebarItem from "./SidebarItem.jsx";

export default function Sidebar({ items, activeItem, onSelectItem }) {
  return (
    <aside className="sidebar">
      {items.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
          active={item.id === activeItem}
          onSelect={onSelectItem}
        />
      ))}
    </aside>
  );
}
