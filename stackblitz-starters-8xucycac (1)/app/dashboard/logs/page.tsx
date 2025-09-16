export default function LogsPage() {
  const logs = [
    { id: 1, action: "BMW 320d hinzugefügt", date: "2025-09-16" },
    { id: 2, action: "Audi A4 verkauft", date: "2025-09-15" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Händler-Logs</h1>
      <ul className="space-y-3">
        {logs.map((log) => (
          <li
            key={log.id}
            className="p-4 bg-white shadow rounded-lg flex justify-between"
          >
            <span>{log.action}</span>
            <span className="text-gray-500 text-sm">{log.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

