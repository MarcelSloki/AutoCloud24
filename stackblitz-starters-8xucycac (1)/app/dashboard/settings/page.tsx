"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Händler Muster");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Einstellungen</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md">
        <label className="block mb-2 text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Speichern
        </button>
      </div>
    </div>
  );
}

