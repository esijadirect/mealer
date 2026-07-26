import SearchBar from "./SearchBar.jsx";
import HeaderActions from "./HeaderActions.jsx";

export default function Header({ onSearch, onLoginClick, onPostAdClick }) {
  return (
    <div className="header-inner">
      <div className="logo-block">
        <div className="logo">
          <span className="logo-dot"></span>MarketHub
        </div>
        <span className="tagline">Sell faster · Buy smarter</span>
      </div>

      <SearchBar onSearch={onSearch} />
      <HeaderActions onLoginClick={onLoginClick} onPostAdClick={onPostAdClick} />
    </div>
  );
}
