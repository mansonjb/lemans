import type { GuideContent, Locale } from "@/lib/types";
import { everythingBooked } from "./everything-booked";
import { whenToBook } from "./when-to-book";
import { gettingThere } from "./getting-there";

export const GUIDE_CONTENT: Record<string, Record<Locale, GuideContent>> = {
  "everything-booked": everythingBooked,
  "when-to-book": whenToBook,
  "getting-there": gettingThere,
};
