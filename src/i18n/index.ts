import type { Locale } from "@/lib/types";
import { en, type Dict } from "./en";
import { fr } from "./fr";
import { nl } from "./nl";
import { de } from "./de";
import { it } from "./it";
import { es } from "./es";

export type { Dict };

export const DICTS: Record<Locale, Dict> = { en, fr, nl, de, it, es };

export const t = (locale: Locale): Dict => DICTS[locale] ?? en;
