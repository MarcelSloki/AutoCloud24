"use client";

export type SearchProfile = {
  region: string;
  targetMarginPct: number;
  minYear: number;
  maxKm: number;
  fuel: string[];
  body: string[];
  platforms: string[];
  budgetMax: number;
};

const ALL_PLATFORMS = ["AUTO1", "CarOnSale", "AutoProff", "AutoScout24", "mobile.de"];

export default function SearchAgent({
  profile,
  onChange,
}: {
  profile: SearchProfile;
  onChange: (p: SearchProfile) => void;
}) {
  function toggle(list: string[], value: string): string[] {
    return list.includes(value) ? list.filter(x => x !== value) : [...list, value];
  }

  return (
    <section className="mb-8 rounded-xl border bg-white p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Suchprofil (KI-Agent)</h2>
        <button
          className="text-sm underline"
          onClick={() =>
            onChange({
              region: "NRW",
              targetMarginPct: 8,
              minYear: 2018,
              maxKm: 120000,
              fuel: ["Benzin", "Diesel"],
              body: ["Kompakt", "Limousine", "Kombi"],
              platforms: [...ALL_PLATFORMS],
              budgetMax: 20000,
            })
          }
        >
          Zurücksetzen
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {/* Region */}
        <div>
          <label className="text-sm text-gray-600">Region</label>
          <select
            value={profile.region}
            onChange={(e) => onChange({ ...profile, region: e.target.value })}
            className="w-full border rounded px-3 py-2 mt-1"
          >
            {["NRW", "BY", "BW", "HE", "NI", "SN", "HH"].map(r => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>

        {/* Zielmarge */}
        <div>
          <label className="text-sm text-gray-600">Zielmarge (%)</label>
          <input
            type="number"
            value={profile.targetMarginPct}
            onChange={(e) => onChange({ ...profile, targetMarginPct: Number(e.target.value) })}
            className="w-full border rounded px-3 py-2 mt-1"
            min={3}
            max={30}
          />
        </div>

        {/* Mindest-Baujahr */}
        <div>
          <label className="text-sm text-gray-600">Mindest-Baujahr</label>
          <input
            type="number"
            value={profile.minYear}
            onChange={(e) => onChange({ ...profile, minYear: Number(e.target.value) })}
            className="w-full border rounded px-3 py-2 mt-1"
            min={2008}
            max={2024}
          />
        </div>

        {/* max. Laufleistung */}
        <div>
          <label className="text-sm text-gray-600">max. Laufleistung (km)</label>
          <input
            type="number"
            value={profile.maxKm}
            onChange={(e) => onChange({ ...profile, maxKm: Number(e.target.value) })}
            className="w-full border rounded px-3 py-2 mt-1"
            min={50000}
            step={5000}
          />
        </div>

        {/* Budget */}
        <div>
          <label className="text-sm text-gray-600">Budget (max. Einkaufspreis €)</label>
          <input
            type="number"
            value={profile.budgetMax}
            onChange={(e) => onChange({ ...profile, budgetMax: Number(e.target.value) })}
            className="w-full border rounded px-3 py-2 mt-1"
            min={5000}
            step={500}
          />
        </div>

        {/* Kraftstoff */}
        <div className="md:col-span-1">
          <label className="text-sm text-gray-600 block mb-1">Kraftstoff</label>
          {["Benzin", "Diesel", "Hybrid", "Elektro"].map(f => (
            <label key={f} className="flex items-center gap-2 text-sm mb-1">
              <input
                type="checkbox"
                checked={profile.fuel.includes(f)}
                onChange={() => onChange({ ...profile, fuel: toggle(profile.fuel, f) })}
              />
              {f}
            </label>
          ))}
        </div>

        {/* Karosserie */}
        <div className="md:col-span-1">
          <label className="text-sm text-gray-600 block mb-1">Karosserie</label>
          {["Kompakt", "Limousine", "Kombi", "SUV"].map(b => (
            <label key={b} className="flex items-center gap-2 text-sm mb-1">
              <input
                type="checkbox"
                checked={profile.body.includes(b)}
                onChange={() => onChange({ ...profile, body: toggle(profile.body, b) })}
              />
              {b}
            </label>
          ))}
        </div>

        {/* Plattformen */}
        <div className="md:col-span-2">
          <label className="text-sm text-gray-600 block mb-1">Plattformen</label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {ALL_PLATFORMS.map(p => {
              const on = profile.platforms.includes(p);
              return (
                <button
                  key={p}
                  onClick={() =>
                    onChange({
                      ...profile,
                      platforms: on
                        ? profile.platforms.filter(x => x !== p)
                        : [...profile.platforms, p],
                    })
                  }
                  className={`px-2 py-1 rounded border text-sm ${
                    on ? "bg-[#0084A8] text-white border-[#0084A8]" : "bg-white"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
