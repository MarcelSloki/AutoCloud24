"use client";

export default function MarketValueExplainer() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold text-blue-700 mb-3">Wie berechnet unsere KI den Marktwert?</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Analyse von Millionen Inseraten auf Auto1, CarOnSale, AutoProff, mobile.de, AutoScout24.</li>
        <li>Berücksichtigung von Marke, Modell, Baujahr, Laufleistung und Ausstattung.</li>
        <li>Regionale Marktpreise – ein Golf in München kostet oft mehr als derselbe in Dortmund.</li>
        <li>Prognose der Standzeit basierend auf Nachfrage und Saisonalität.</li>
        <li>Einschätzung realistischer Reparaturkosten durch KI-gestützte Daten + Videoanalyse.</li>
        <li>Berechnung einer fairen Einkaufsspanne für Händler (maximaler Einkaufspreis).</li>
      </ul>
      <p className="mt-3 text-gray-600">
        So triffst du datenbasierte Entscheidungen – keine Bauchentscheidungen mehr.
      </p>
    </div>
  );
}
