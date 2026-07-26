import Badge from "./Badge.jsx";
import SellerTier from "./SellerTier.jsx";
import FavoriteButton from "./FavoriteButton.jsx";

export default function ListingCard({ listing, isFavorite, onToggleFavorite }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={listing.img} alt={listing.title} loading="lazy" />
        <Badge type={listing.badge} label={listing.badgeLabel} />
        <FavoriteButton
          active={isFavorite}
          onToggle={() => onToggleFavorite(listing.id)}
        />
      </div>
      <div className="card-body">
        <div className="card-price">{listing.price}</div>
        <div className="card-title">{listing.title}</div>
        <div className="card-desc">{listing.desc}</div>
        <div className="card-meta">
          <span className="tag">{listing.cond}</span>
          {listing.extra && listing.extra !== "-" && listing.extra !== "—" && (
            <span className="tag">{listing.extra}</span>
          )}
          <span className="tag loc">📍 {listing.loc}</span>
          <span className="tag time">{listing.time}</span>
        </div>
        <div className="card-footer">
          <SellerTier tier={listing.tier} />
        </div>
      </div>
    </article>
  );
}
