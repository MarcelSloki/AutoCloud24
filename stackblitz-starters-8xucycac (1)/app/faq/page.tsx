"use client";

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Häufig gestellte Fragen (FAQ)</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">Was genau ist AutoCloud24?</h2>
          <p>
            AutoCloud24 ist eine zentrale Plattform für gewerbliche Autohändler.
            Wir bündeln führende Börsen und Auktionsplattformen in einer Oberfläche
            und liefern zusätzlich KI-gestützte Marktwertberechnungen und Fahrzeugempfehlungen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Wie funktioniert die KI-Marktwertberechnung?</h2>
          <p>
            Unsere KI analysiert laufend Marktdaten aus verschiedenen Plattformen
            und kombiniert diese mit historischen Transaktionsdaten.
            Dadurch erhältst du realistische Einkaufs- und Verkaufspreise,
            abgestimmt auf deine Region und Strategie.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Wie unterstützt mich die App mit Video-KI?</h2>
          <p>
            Mit unserer App kannst du Fahrzeuge von Privatverkäufern aufnehmen.
            Über die Smartphone-Kamera wird das Auto per Video erfasst,
            Schäden werden erkannt und automatisch in die Berechnung einbezogen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Wie läuft der Fahrzeugeinkauf ab?</h2>
          <p>
            Ein Login, alle Plattformen: AutoCloud24 bündelt führende Börsen und Auktionen.
            Unsere KI schlägt dir passende Fahrzeuge vor,
            du wirst dann direkt zur Plattform weitergeleitet, um den Kauf abzuschließen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Welche Zahlungsmöglichkeiten gibt es?</h2>
          <p>
            Die Nutzung von AutoCloud24 wird per SEPA-Lastschrift abgerechnet.
            Für Fahrzeugkäufe gelten die Zahlungsbedingungen der jeweiligen Plattformen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Kann ich die Plattform testen?</h2>
          <p>
            Ja – mit unserem kostenlosen Demo-Zugang kannst du AutoCloud24 risikofrei kennenlernen,
            bevor du dich für ein Paket entscheidest.
          </p>
        </div>
      </div>
    </main>
  );
}