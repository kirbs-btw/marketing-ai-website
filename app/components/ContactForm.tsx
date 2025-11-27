"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [filesInfo, setFilesInfo] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Basic client validation
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    if (!name || (!email && !phone)) {
      setStatus("error");
      setError("Bitte Name und E-Mail oder Telefonnummer angeben.");
      return;
    }

    // Files validation: 1-3 images, max 5MB each
    const files = (formData.getAll("images") as File[]).filter(Boolean);
    if (files.length > 3) {
      setStatus("error");
      setError("Maximal 3 Bilder anhängen.");
      return;
    }
    for (const f of files) {
      if (f.size > 5 * 1024 * 1024) {
        setStatus("error");
        setError("Jedes Bild max. 5 MB.");
        return;
      }
      if (!f.type.startsWith("image/")) {
        setStatus("error");
        setError("Nur Bilddateien sind erlaubt.");
        return;
      }
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Fehler beim Senden.");
      }
      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Fehler beim Senden.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 text-left">
      <div className="sr-only" aria-hidden>
        {/* Honeypot field to catch bots */}
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-200">Name</label>
        <input name="name" type="text" className="mt-2 w-full rounded-xl border border-blue-700 bg-blue-800/70 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Ihr Name" required />
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-200">E-Mail</label>
        <input name="email" type="email" className="mt-2 w-full rounded-xl border border-blue-700 bg-blue-800/70 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Ihre E-Mail-Adresse" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-200">Telefon (optional)</label>
        <input name="phone" type="tel" className="mt-2 w-full rounded-xl border border-blue-700 bg-blue-800/70 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="+49 ..." />
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-200">Ihr Malerbetrieb</label>
        <input name="company" type="text" className="mt-2 w-full rounded-xl border border-blue-700 bg-blue-800/70 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Firmenname" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-amber-200">Nachricht (optional)</label>
        <textarea name="message" rows={4} className="mt-2 w-full rounded-xl border border-blue-700 bg-blue-800/70 px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Ihre Nachricht..." />
      </div>

      <div>
        <label className="block text-sm font-semibold text-amber-200">Bilder anhängen (optional, bis zu 3)</label>
        <input
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            const selected = Array.from(e.target.files || []);
            const info = selected
              .slice(0, 3)
              .map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`)
              .join(", ");
            setFilesInfo(info);
          }}
          className="mt-2 w-full rounded-xl border border-blue-700 bg-blue-800/70 px-4 py-2 text-white file:mr-4 file:rounded-lg file:border-0 file:bg-amber-400 file:px-4 file:py-2 file:text-slate-900 hover:file:bg-amber-300"
        />
        {filesInfo && <p className="mt-1 text-xs text-blue-100">Ausgewählt: {filesInfo}</p>}
        <p className="mt-1 text-xs text-blue-200">Optional • Erlaubt: JPG, PNG, WEBP • Max 3 Dateien • je max 5 MB</p>
      </div>

      <button type="submit" disabled={status === "loading"} className="mt-4 rounded-full bg-amber-400 px-6 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 disabled:opacity-60">
        {status === "loading" ? "Senden..." : "Jetzt kostenlose Beispiel-Posts erhalten"}
      </button>

      {status === "success" && (
        <p className="text-sm text-amber-200">Danke! Wir melden uns innerhalb von 24 Stunden.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-200">{error || "Etwas ist schiefgelaufen."}</p>
      )}
    </form>
  );
}
