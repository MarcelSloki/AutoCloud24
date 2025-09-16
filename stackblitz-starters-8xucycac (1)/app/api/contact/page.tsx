"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setStatus("success");
      e.currentTarget.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      <p className="text-gray-700 mb-6">
        Hast du Fragen zu AutoCloud24 oder möchtest du eine persönliche Beratung? 
        Nutze einfach unser Formular – wir melden uns schnellstmöglich bei dir.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">E-Mail</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nachricht</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-5 py-2 rounded hover:bg-primaryDark"
        >
          Nachricht senden
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">Danke für deine Nachricht – wir haben sie erhalten!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Es gab ein Problem beim Absenden. Bitte versuche es erneut.</p>
      )}
    </main>
  );
}
