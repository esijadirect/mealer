import ListingCard from "./ListingCard.jsx";

export default function ListingGrid({ listings, favorites, onToggleFavorite }) {
  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          listing={listing}
          isFavorite={favorites.has(listing.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
