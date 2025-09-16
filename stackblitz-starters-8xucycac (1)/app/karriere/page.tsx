export default function Karriere() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Karriere bei AutoCloud24</h1>

      <p className="mb-6">
        Aktuell haben wir keine offenen Stellen zu besetzen. 
        Doch wir sind immer auf der Suche nach talentierten Menschen,
        die unsere Vision teilen und die Zukunft des Fahrzeugeinkaufs mitgestalten wollen.
      </p>

      <p className="mb-6">
        Wenn du denkst, dass du mit deinen Fähigkeiten und deiner Leidenschaft zu uns passt,
        freuen wir uns jederzeit über deine Initiativbewerbung.
      </p>

      <a
        href="mailto:jobs@autocloud24.com?subject=Initiativbewerbung"
        className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primaryDark font-semibold"
      >
        Jetzt Initiativbewerbung senden
      </a>

      <h2 className="text-xl font-semibold mt-12 mb-3">Warum AutoCloud24?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Innovatives Umfeld: Arbeit mit modernsten KI-Technologien im Automobilbereich.</li>
        <li>Gestaltungsspielraum: Deine Ideen zählen und fließen in die Produktentwicklung ein.</li>
        <li>Flexibles Arbeiten: Remote-Möglichkeiten und flexible Arbeitszeiten.</li>
        <li>Starkes Team: Zusammenarbeit in einem dynamischen, motivierten Umfeld.</li>
      </ul>
    </main>
  );
}
