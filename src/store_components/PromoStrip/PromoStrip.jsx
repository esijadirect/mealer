import PromoCard from "./PromoCard.jsx";

export default function PromoStrip({ promos }) {
  return (
    <section className="promo-strip">
      {promos.map((promo) => (
        <PromoCard key={promo.id} promo={promo} />
      ))}
    </section>
  );
}
