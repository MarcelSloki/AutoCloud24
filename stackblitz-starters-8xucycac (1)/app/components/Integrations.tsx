export default function Integrations() {
  const platforms = [
    { name: "AUTO1.com",   domain: "auto1.com" },
    { name: "CarOnSale",   domain: "caronsale.com" },
    { name: "AutoProff",   domain: "autoproff.com" },
    { name: "AutoScout24", domain: "autoscout24.de" },
    { name: "mobile.de",   domain: "mobile.de" },
  ];

  return (
    <section id="integrations" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Schnittstellen zu allen wichtigen Plattformen
        </h2>
        <p className="mb-10 text-gray-600">
          Ein Login, ein Suchprofil – volle Übersicht über die wichtigsten Börsen & Auktionsplattformen.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
          {platforms.map(({ name, domain }) => (
            <div key={domain} className="flex items-center justify-center">
              <img
                src={`https://logo.clearbit.com/${domain}`}
                alt={name}
                className="h-16 md:h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
