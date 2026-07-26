import FooterColumn from "./FooterColumn.jsx";
import SocialRow from "./SocialRow.jsx";
import StoreBadges from "./StoreBadges.jsx";

const companyLinks = [
  { label: "About MarketHub", href: "#" },
  { label: "We're hiring", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Billing Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const supportLinks = [
  { label: "FAQ", href: "#" },
  { label: "Safety Tips", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Report an Issue", href: "#" },
];

const regions = ["Kenya", "Uganda", "Tanzania", "Ghana", "Ethiopia"];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
          <FooterColumn title="Support" links={supportLinks} />
          <div className="footer-col">
            <h4>Get the app</h4>
            <StoreBadges />
            <h4 style={{ marginTop: 20 }}>Follow us</h4>
            <SocialRow />
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MarketHub. Free classifieds, made simple.</span>
          <div className="region-links">
            {regions.map((r) => (
              <a key={r} href="#">
                {r}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
