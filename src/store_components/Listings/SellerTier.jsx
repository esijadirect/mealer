/**
 * `tier` must match one of: enterprise | vip_gold | diamond (see .dot classes
 * in index.css). Renders nothing for listings with no tier (tier === "").
 */
export default function SellerTier({ tier }) {
  if (!tier) return <span></span>;

  return (
    <div className="seller-tier">
      <span className={`dot ${tier}`}></span>
      {tier.replace("_", " ")}
    </div>
  );
}
