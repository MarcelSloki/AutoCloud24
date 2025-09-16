import MarketValueExplainer from "./components/MarketValueExplainer";
import TrustedBy from "./components/TrustedBy";
import Integrations from "./components/Integrations";
import Pricing from "./components/Pricing";
import RegistrationForm from "./components/RegistrationForm";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1613545325278-3b08d1a5d1d0?auto=format&fit=crop&w=1600&q=80"
          alt="Fahrzeuge im Autohaus"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center py-24 px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Fahrzeugeinkauf datenbasiert optimieren
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            AutoCloud24 bündelt die wichtigsten Fahrzeugbörsen und
            Auktionsplattformen an einem Ort. Mit KI-gestützter
            Marktwertberechnung und Suchprofilen finden Händler schneller die
            Fahrzeuge, die wirklich zu ihrer Strategie passen.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#pricing"
              className="px-6 py-3 bg-[#0084A8] text-white font-semibold rounded-lg shadow hover:bg-[#006d8a] transition"
            >
              Preise ansehen
            </a>
            <a
              href="#demo"
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-[#0084A8] transition"
            >
              Demo buchen
            </a>
          </div>
        </div>
      </section>

      {/* Plattform-Integrationen */}
      <Integrations />

      {/* Marktwert-Erklärung */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
            alt="KI Marktwertberechnung"
            className="rounded-lg shadow"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              KI-Marktwertberechnung für jede Region
            </h2>
            <p className="mt-4 text-gray-600">
              Schluss mit Bauchentscheidungen: Unsere KI analysiert Millionen
              von Fahrzeugdaten aus allen relevanten Plattformen und berechnet
              den optimalen Einkaufspreis für Ihr Suchprofil. Sie erhalten
              auf einen Blick die Fahrzeuge, die wirklich zu Ihrer Strategie passen.
            </p>
          </div>
        </div>
      </section>

      {/* Preise */}
      <Pricing />

      {/* App-Vorschau */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Die AutoCloud24 App</h2>
            <p className="mt-4 text-gray-600">
              Mit der AutoCloud24 App können Händler Fahrzeuge von privaten
              Verkäufern schnell aufnehmen. Unsere Video-KI erkennt automatisch
              optische Schäden und kalkuliert diese in die Marktwertberechnung ein.
              So können Sie Kaufentscheidungen direkt vor Ort treffen.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
            alt="App Vorschau"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Händler-Referenzen (jetzt unter der App-Sektion) */}
      <TrustedBy />

      {/* Registrierung */}
      <section id="demo" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Jetzt Demo buchen
          </h2>
          <p className="mt-4 text-gray-600">
            Testen Sie AutoCloud24 unverbindlich und erleben Sie, wie einfach
            der datenbasierte Fahrzeugeinkauf sein kann.
          </p>
          <div className="mt-8">
            <RegistrationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
