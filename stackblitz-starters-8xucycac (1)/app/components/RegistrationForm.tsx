"use client";
import { useState } from "react";

export default function RegistrationForm() {
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: später an Backend/API senden
    const success = true; // Platzhalter

    if (success) {
      setMessage({ type: "success", text: "Registrierung empfangen. Wir melden uns per E-Mail." });
      (e.target as HTMLFormElement).reset();
    } else {
      setMessage({ type: "error", text: "Fehler beim Absenden." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Unternehmen</label>
        <input type="text" required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">E-Mail</label>
        <input type="email" required className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Telefon</label>
        <input type="tel" required className="w-full border rounded px-3 py-2" />
      </div>
      <button type="submit" className="bg-primary text-white px-5 py-2 rounded hover:bg-primaryDark">
        Vertrag abschließen
      </button>
      {message && (
        <p className={message.type === "success" ? "text-green-600" : "text-red-600"}>{message.text}</p>
      )}
    </form>
  );
}
