export default function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-2">AutoCloud24 GmbH</h4>
          <p>Musterstraße 123<br />40210 Düsseldorf</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Unternehmen</h4>
          <ul className="space-y-1">
            <li><a href="/karriere" className="hover:underline">Karriere</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Rechtliches</h4>
          <ul className="space-y-1">
            <li><a href="/impressum" className="hover:underline">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:underline">Datenschutz</a></li>
            <li><a href="/agb" className="hover:underline">AGB</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Kontakt</h4>
          <p>Email: info@autocloud24.com<br />Tel: 0211 / 123456</p>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">
        © {new Date().getFullYear()} AutoCloud24 GmbH
      </p>
    </footer>
  );
}
