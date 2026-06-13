import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/seo";

export interface Crumb {
  name: string;
  href: string;
}

/** Visible breadcrumb trail plus BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-4 py-2.5 sm:px-6">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-muted">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-line">/</span>}
                {last ? (
                  <span className="font-medium text-ink">{c.name}</span>
                ) : (
                  <Link href={c.href} className="hover:text-bleu">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.href}`,
          })),
        }}
      />
    </nav>
  );
}
