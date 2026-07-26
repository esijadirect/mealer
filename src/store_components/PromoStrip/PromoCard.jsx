export default function PromoCard({ promo }) {
  return (
    <div className="promo-card">
      <div className="promo-icon">{promo.icon}</div>
      <div className="promo-text">
        <div className="promo-title">{promo.title}</div>
        <div className="promo-sub">{promo.sub}</div>
      </div>
    </div>
  );
}
