export default function TrustedBy() {
  const refs = [
    { name: "BOB Automobile", domain: "bob-automobile.de" },
    { name: "Fleischhauer", domain: "fleischhauer.com" },
    { name: "Hülpert", domain: "autohaus-huelpert.de" },
    { name: "Jürgens", domain: "autohaus-juergens.de" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">
          Diese Händler vertrauen bereits auf AutoCloud24
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {refs.map(({ name, domain }) => (
            <div key={domain} className="flex items-center justify-center">
              <img
                src={`https://logo.clearbit.com/${domain}`}
                alt={name}
                className="h-20 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
