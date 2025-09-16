type Props = {
  title: string;
  price: string;          // z. B. "€ 99 / Monat"
  users?: string;         // z. B. "1 Benutzer"
  features: string[];
  highlight?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
};

function CheckIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white text-xs mr-2">
      ✓
    </span>
  );
}

export default function PricingCard({
  title,
  price,
  users,
  features,
  highlight,
  ctaHref = "#demo",
  ctaLabel = "Vertrag abschließen",
}: Props) {
  return (
    <div
      className={`p-6 rounded-lg shadow bg-white border ${
        highlight ? "border-primary" : "border-gray-100"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        {highlight && (
          <span className="text-xs px-2 py-1 rounded bg-primary text-white">
            Empfohlen
          </span>
        )}
      </div>

      <div className="text-3xl font-bold mt-2">{price}</div>
      {users && <div className="text-sm text-gray-600 mt-1">{users}</div>}

      <ul className="mt-4 space-y-2 text-sm text-gray-800">
        {features.map((f) => (
          <li key={f} className="flex items-start">
            <CheckIcon />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaHref}
        className="mt-6 inline-block w-full text-center px-4 py-2 rounded bg-primary text-white hover:bg-primaryDark"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
