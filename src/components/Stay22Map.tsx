import { stay22MapUrl, type MapParams } from "@/lib/stay22";

export function Stay22Map({
  title,
  note,
  ...params
}: MapParams & { title: string; note: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-sm">
        <iframe
          src={stay22MapUrl(params)}
          title={title}
          loading="lazy"
          className="h-[460px] w-full sm:h-[520px]"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted">
        {note}
      </figcaption>
    </figure>
  );
}
