"use client";

type Props = {
  labels: string[];
  values: number[];
  title?: string;
  height?: number;
};

export default function Chart({ labels, values, title = "Preisverlauf", height = 160 }: Props) {
  if (!values || values.length === 0) {
    return <div className="text-sm text-gray-500">Keine Verlaufsdaten vorhanden.</div>;
  }
  if (values.length === 1) {
    return <div className="text-sm text-gray-500">Nur ein Datenpunkt vorhanden – Verlauf nicht darstellbar.</div>;
  }

  const width = 420;
  const padding = 28;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(1, max - min);

  const pts = values.map((val, i) => {
    const x = padding + (i * (width - 2 * padding)) / (values.length - 1);
    const y = padding + (height - 2 * padding) * (1 - (val - min) / range);
    return `${x},${y}`;
  });

  const ticks = [min, min + range / 2, max].map((v) => Math.round(v));

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3">
      <div className="text-sm font-medium mb-2">{title}</div>
      <svg width={width} height={height} className="block">
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#e5e7eb" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" />

        {ticks.map((t, i) => {
          const y = padding + (height - 2 * padding) * (1 - (t - min) / range);
          return (
            <g key={i}>
              <line x1={padding - 4} y1={y} x2={padding} y2={y} stroke="#9ca3af" />
              <text x={8} y={y + 4} fontSize="10" fill="#6b7280">{t.toLocaleString()} €</text>
            </g>
          );
        })}

        <polyline fill="none" stroke="#0084A8" strokeWidth="2" points={pts.join(" ")} />

        {pts.map((p, i) => {
          const [x, y] = p.split(",").map(Number);
          return <circle key={i} cx={x} cy={y} r={3} fill="#0084A8" />;
        })}
      </svg>

      <div className="mt-1 grid" style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}>
        {labels.map((l, i) => (
          <div key={i} className="text-[10px] text-gray-500 text-center truncate">{l}</div>
        ))}
      </div>
    </div>
  );
}
