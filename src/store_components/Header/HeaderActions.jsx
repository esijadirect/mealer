import Icon from "../Icon.jsx";

export default function HeaderActions({ onLoginClick, onPostAdClick }) {
  return (
    <div className="header-actions">
      <a className="login-link" href="#" onClick={(e) => { e.preventDefault(); onLoginClick?.(); }}>
        Log in
      </a>
      <button className="btn-sell" onClick={onPostAdClick}>
        <Icon path="M12 5v14M5 12h14" size={15} strokeWidth={2.5} />
        Post Ad
      </button>
    </div>
  );
}
