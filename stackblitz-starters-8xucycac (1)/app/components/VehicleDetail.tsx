"use client";

import { Vehicle } from "../lib/demoData";
import Chart from "./Chart";

export default function VehicleDetail({ vehicle, onClose }: { vehicle: Vehicle; onClose: () => void }) {
  const marginAbs = vehicle.marketValue - vehicle.price;
  const marginPct = (marginAbs / Math.max(1, vehicle.marketValue)) * 100;

  const recommendation =
    marginAbs > 1500 && vehicle.riskScore <= 3
      ? "✅ Sehr gute Kaufgelegenheit basierend auf Marktwert, erwarteter Standzeit und Risiko."
      : marginAbs > 800 && vehicle.riskScore <= 4
      ? "ℹ️ Solide Gelegenheit – prüfe ggf. 200–300 € Nachlass oder Ausstattungsvorteile."
      : "⚠️ Enger Spielraum – nur interessant bei sehr kurzer Standzeit oder besonderen Features.";

  const labels = vehicle.history.map((h) => h.date);
  const values = vehicle.history.map((h) => h.price);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">{vehicle.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
        </div>

        <div className="p-5 grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="text-sm"><b>Plattform:</b> {vehicle.platform}</div>
            <div className="text-sm"><b>Region:</b> {vehicle.region}</div>
            <div className="text-sm"><b>Kaufpreis:</b> {vehicle.price.toLocaleString()} €</div>
            <div className="text-sm"><b>Marktwert (Region):</b> {vehicle.marketValue.toLocaleString()} €</div>
            <div className="text-sm">
              <b>Erwartete Marge:</b> {marginAbs.toLocaleString()} € ({marginPct.toFixed(1)}%)
            </div>
            <div className="text-sm"><b>Reparaturkosten (Schätzung):</b> {vehicle.repairCost.toLocaleString()} €</div>
            <div className="text-sm"><b>Standzeitprognose:</b> {vehicle.standzeitDays} Tage</div>
            <div className="text-sm"><b>Risiko-Score:</b> {vehicle.riskScore}/5</div>

            <div className="mt-3 p-3 rounded bg-blue-50 border border-blue-200 text-sm">
              <b>KI-Empfehlung:</b> {recommendation}
            </div>
          </div>

          <div>
            <Chart labels={labels} values={values} title="Preisverlauf (Demo)" />
            <div className="mt-2 text-xs text-gray-500">
              Hinweis: Verlauf basiert auf Demo-Daten. Live-Daten & weitere Faktoren
              (Saisonalität, Facelifts) werden später einbezogen.
            </div>
          </div>
        </div>

        <div className="px-5 pb-5">
          <button
            onClick={onClose}
            className="bg-[#0084A8] text-white px-4 py-2 rounded hover:opacity-90"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
