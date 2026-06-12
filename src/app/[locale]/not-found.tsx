import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-display text-7xl font-bold italic text-bleu">404</p>
      <p className="text-muted">
        This page took the wrong exit. / Cette page a raté la sortie.
      </p>
      <Link
        href="/en"
        className="rounded-lg bg-bleu px-5 py-2.5 font-display font-bold uppercase tracking-wide text-white"
      >
        Home / Accueil
      </Link>
    </div>
  );
}
