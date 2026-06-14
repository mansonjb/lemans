import { JsonLd } from "./JsonLd";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqBlock({ heading, items }: { heading: string; items: FaqItem[] }) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold uppercase italic tracking-tight sm:text-3xl">
        {heading}
      </h2>
      <div className="speedline mt-2 w-24" />
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-line bg-card p-5 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-start gap-4 font-semibold marker:hidden">
              <span className="flex-1">{item.q}</span>
              <span className="mt-1 shrink-0 text-bleu transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((i) => ({
            "@type": "Question",
            name: i.q,
            acceptedAnswer: { "@type": "Answer", text: i.a },
          })),
        }}
      />
    </section>
  );
}
