const socials = [
  { id: "facebook", label: "f" },
  { id: "instagram", label: "◎" },
  { id: "youtube", label: "▶" },
  { id: "x", label: "𝕏" },
];

export default function SocialRow() {
  return (
    <div className="social-row">
      {socials.map((s) => (
        <a key={s.id} className="social-btn" href="#" aria-label={s.id}>
          {s.label}
        </a>
      ))}
    </div>
  );
}
