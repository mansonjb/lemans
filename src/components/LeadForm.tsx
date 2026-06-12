"use client";

import { useState } from "react";
import type { Dict } from "@/i18n";

type FormLabels = Dict["lead"]["form"];

export function LeadForm({
  labels,
  eventOptions,
  locale,
}: {
  labels: FormLabels;
  eventOptions: { key: string; label: string }[];
  locale: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      locale,
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      town: data.get("town"),
      propertyType: data.get("propertyType"),
      capacity: data.get("capacity"),
      events: data.getAll("events"),
      message: data.get("message"),
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-lg border border-line bg-card px-3 py-2.5 text-[15px] outline-none focus:border-bleu focus:ring-2 focus:ring-bleu/20";
  const label = "block text-sm font-semibold";

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-grass/40 bg-grass/10 p-6 text-[15px] font-medium text-grass">
        {labels.success}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            {labels.name}
          </label>
          <input id="name" name="name" required className={`${input} mt-1.5`} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            {labels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`${input} mt-1.5`}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            {labels.phone}
          </label>
          <input id="phone" name="phone" className={`${input} mt-1.5`} />
        </div>
        <div>
          <label className={label} htmlFor="town">
            {labels.town}
          </label>
          <input id="town" name="town" required className={`${input} mt-1.5`} />
        </div>
        <div>
          <label className={label} htmlFor="propertyType">
            {labels.propertyType}
          </label>
          <select
            id="propertyType"
            name="propertyType"
            className={`${input} mt-1.5`}
          >
            <option value="house">{labels.types.house}</option>
            <option value="rooms">{labels.types.rooms}</option>
            <option value="pitch">{labels.types.pitch}</option>
            <option value="other">{labels.types.other}</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="capacity">
            {labels.capacity}
          </label>
          <input
            id="capacity"
            name="capacity"
            type="number"
            min={1}
            className={`${input} mt-1.5`}
          />
        </div>
      </div>

      <fieldset>
        <legend className={label}>{labels.events}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {eventOptions.map((opt) => (
            <label
              key={opt.key}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-line bg-card px-3 py-2 text-sm has-checked:border-bleu has-checked:bg-bleu/5"
            >
              <input
                type="checkbox"
                name="events"
                value={opt.key}
                className="accent-bleu"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={label} htmlFor="message">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${input} mt-1.5`}
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input type="checkbox" required className="mt-1 accent-bleu" />
        {labels.gdpr}
      </label>

      {status === "error" && (
        <p className="text-sm font-medium text-signal">{labels.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-bleu px-6 py-3 font-display text-base font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-bleu-deep disabled:opacity-60"
      >
        {status === "sending" ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
