"use client";

import { Vehicle } from "../lib/demoData";

export default function VehicleDetailModal({
  v,
  onClose,
}: {
  v: Vehicle & { calc: { totalCost: number; absMargin: number; marginPct: number; composite: number } };
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-xl bg-white shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h3 className="text-lg font-semibold">{v.title} — Detail</h3>
          <button onClick={onClose} className="px-2 py-1 rounded border hover:bg-gray-50">Schließen</button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-5">
          {/* Bild + Basis */}
          <div>
            <img src={v.img} alt={v.title} className="w-full h-48 object-cover rounded-lg border" />
            <div className="mt-3 text-sm text-gray-700">
              {v.year} • {v.km.toLocaleString("de-DE")} km • {v.power} PS • {v.fuel} • {v.gear} • {v.body} • {v.region}
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Quelle: <span className="font-medium">{v.platform}</span>
              {v.platformUrl ? (<a href={v.platformUrl} className="underline ml-1" target="_blank">Inserat öffnen</a>) : null}
            </div>
          </div>

          {/* KPI-Boxen */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded bg-gray-50">
              <div className="text-xs text-gray-500">Angebotspreis</div>
              <div className="text-lg font-semibold">€ {v.price.toLocaleString("de-DE")}</div>
            </div>
            <div className="p-3 rounded bg-gray-50">
              <div className="text-xs text-gray-500">Empf. max. EK (Region)</div>
              <div className="text-lg font-semibold">€ {v.market.buyMax.toLocaleString("de-DE")}</div>
            </div>
            <div className="p-3 rounded bg-gray-50">
              <div className="text-xs text-gray-500">Ø Verkaufspreis (Region)</div>
              <div className="text-lg font-semibold">€ {v.market.sellAvg.toLocaleString("de-DE")}</div>
            </div>
            <div className="p-3 rounded bg-gray-50">
              <div className="text-xs text-gray-500">Standzeit-Prognose</div>
              <div className="text-lg font-semibold">{v.risk.standzeitDays} Tage</div>
            </div>
          </div>

          {/* Preis-Breakdown */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-2">Preisaufschlüsselung</h4>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="p-3 border rounded">
                <div className="text-gray-500 text-xs">Einkauf (Angebot)</div>
                <div className="font-semibold">€ {v.price.toLocaleString("de-DE")}</div>
              </div>
              <div className="p-3 border rounded">
                <div className="text-gray-500 text-xs">
                  Reparatur / Aufbereitung <span className="text-[10px] uppercase ml-1 px-1 py-0.5 rounded bg-gray-100">{v.repair.confidence}</span>
                </div>
                <div className="font-semibold">€ {v.repair.estimate.toLocaleString("de-DE")}</div>
              </div>
              <div className="p-3 border rounded">
                <div className="text-gray-500 text-xs">Gesamtkosten</div>
                <div className="font-semibold">€ {v.calc.totalCost.toLocaleString("de-DE")}</div>
              </div>
              <div className="p-3 border rounded">
                <div className="text-gray-500 text-xs">Ø Verkaufspreis (Region)</div>
                <div className="font-semibold">€ {v.market.sellAvg.toLocaleString("de-DE")}</div>
              </div>
              <div className="p-3 border rounded">
                <div className="text-gray-500 text-xs">Erwartete Marge (€ / %)</div>
                <div className="font-semibold">€ {v.calc.absMargin.toLocaleString("de-DE")} ({v.calc.marginPct}%)</div>
              </div>
              <div className="p-3 border rounded">
                <div className="text-gray-500 text-xs">Risiko-Score • Match-Score</div>
                <div className="font-semibold">{v.risk.score}/10 • {v.calc.composite}</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Hinweis: Marge = Ø VK − (Einkauf + Reparatur). Reparaturkosten werden auf Plausibilität bewertet; Abweichungen je nach Lieferzustand möglich.
            </p>
          </div>

          {/* Upsell-Hinweise */}
          <div className="md:col-span-2">
            <div className="mt-3 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="p-3 rounded border border-[#0084A8]/30">
                <div className="text-xs text-[#0084A8] font-semibold mb-1">Excellence-Feature</div>
                WhatsApp- & E-Mail-Alerts bei neuen Treffern passend zu deinem Profil.
              </div>
              <div className="p-3 rounded border border-[#0084A8]/30">
                <div className="text-xs text-[#0084A8] font-semibold mb-1">Excellence-Feature</div>
                Video-KI zur automatischen Schadenserkennung (App) inkl. Kostenkalkulation.
              </div>
              <div className="p-3 rounded border border-[#0084A8]/30">
                <div className="text-xs text-[#0084A8] font-semibold mb-1">Excellence-Feature</div>
                Export als CSV / Pipeline-Sync in Ihr DMS.
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-4 border-t flex items-center justify-end gap-2">
          <a href={v.platformUrl || "#"} target="_blank" className="px-3 py-2 rounded bg-[#0084A8] text-white hover:bg-[#006d8a]">Zur Plattform</a>
          <button onClick={onClose} className="px-3 py-2 rounded border hover:bg-gray-50">Schließen</button>
        </div>
      </div>
    </div>
  );
}
