"use client";

import { Vehicle } from "../lib/demoData";

function Badge({ children, tone="gray" }: {children: React.ReactNode; tone?: "gray"|"green"|"blue"|"red" }) {
  const map = {
    gray:  "bg-gray-100 text-gray-700",
    green: "bg-green-100 text-green-700",
    blue:  "bg-blue-100 text-blue-700",
    red:   "bg-red-100 text-red-700",
  } as const;
  return <span className={`px-2 py-0.5 rounded text-xs ${map[tone]}`}>{children}</span>;
}

export default function VehicleCard({
  v,
  onDetails,
}: {
  v: Vehicle & { calc: { totalCost: number; absMargin: number; marginPct: number; composite: number } };
  onDetails: () => void;
}) {
  const fairRepair =
    v.repair.confidence === "hoch" ? "green" :
    v.repair.confidence === "mittel" ? "blue" : "red";

  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        {/* Bild */}
        <img
          src={v.img}
          alt={v.title}
          className="w-40 h-28 object-cover rounded-lg border"
        />

        {/* Kopf */}
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold">{v.title}</h3>
              <div className="text-sm text-gray-600">
                {v.year} · {v.km.toLocaleString("de-DE")} km · {v.power} PS · {v.fuel} · {v.gear}
              </div>
              <div className="mt-1 flex items-center gap-2">
                <Badge tone="blue">{v.platform}</Badge>
                <Badge>{v.region}</Badge>
                <Badge tone={fairRepair}>Rep: {v.repair.estimate.toLocaleString("de-DE")} € ({v.repair.confidence})</Badge>
                <Badge>Standzeit: {v.risk.standzeitDays} T</Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Angebotspreis</div>
              <div className="text-lg font-semibold">€ {v.price.toLocaleString("de-DE")}</div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="p-2 rounded bg-gray-50">
              <div className="text-xs text-gray-500">Empf. max. EK</div>
              <div className="font-semibold">€ {v.market.buyMax.toLocaleString("de-DE")}</div>
            </div>
            <div className="p-2 rounded bg-gray-50">
              <div className="text-xs text-gray-500">Ø VK (Region)</div>
              <div className="font-semibold">€ {v.market.sellAvg.toLocaleString("de-DE")}</div>
            </div>
            <div className="p-2 rounded bg-gray-50">
              <div className="text-xs text-gray-500">Erwartete Marge</div>
              <div className="font-semibold">
                € {v.calc.absMargin.toLocaleString("de-DE")} ({v.calc.marginPct}%)
              </div>
            </div>
          </div>

          {/* Score & Actions */}
          <div className="mt-3 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Match-Score: <span className="font-semibold text-gray-800">{v.calc.composite}</span> • Risiko: <span className="font-semibold text-gray-800">{v.risk.score}/10</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={v.platformUrl || "#"}
                className="px-3 py-2 rounded bg-[#0084A8] text-white hover:bg-[#006d8a]"
                title="Zur Plattform"
                target="_blank"
              >
                Zur Plattform
              </a>
              <button className="px-3 py-2 rounded border hover:bg-gray-50">Merken</button>
              <button className="px-3 py-2 rounded border hover:bg-gray-50" onClick={onDetails}>Details</button>
            </div>
          </div>

          {/* Hinweis */}
          <div className="mt-3 text-xs text-gray-600">
            Marge berücksichtigt Reparaturkosten. Plausibilität: {v.repair.confidence}.
          </div>
        </div>
      </div>
    </article>
  );
}
