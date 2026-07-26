import Icon from "../Icon.jsx";

export default function SidebarItem({ item, active, onSelect }) {
  if (item.divider) {
    return <div className="sidebar-divider" />;
  }

  return (
    <a
      href="#"
      className={"sidebar-item" + (active ? " active" : "")}
      onClick={(e) => {
        e.preventDefault();
        onSelect(item.id);
      }}
    >
      <Icon path={item.icon} size={16} />
      <span>{item.name}</span>
    </a>
  );
}
