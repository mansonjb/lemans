import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Barlow_Condensed, Inter } from "next/font/google";
import Script from "next/script";
import { SITE_URL } from "@/lib/seo";
import { STAY22_LMA_ID } from "@/lib/stay22";
import { SiteSchema } from "@/components/schema";
import { AffiliateTracker } from "@/components/AffiliateTracker";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const barlow = Barlow_Condensed({
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "RaceWeekStays",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${inter.variable} ${barlow.variable}`}>
      <head>
        <link rel="preconnect" href="https://scripts.stay22.com" />
        <link rel="preconnect" href="https://www.stay22.com" />
        <link rel="dns-prefetch" href="https://www.booking.com" />
      </head>
      <body>
        <AffiliateTracker />
        <SiteSchema siteName="RaceWeekStays" />
        {children}
        <Script
          id="stay22-letmeallez"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (s, t, a, y, twenty, two) {
    s.Stay22 = s.Stay22 || {};
    s.Stay22.params = { lmaID: '${STAY22_LMA_ID}' };
    twenty = t.createElement(a);
    two = t.getElementsByTagName(a)[0];
    twenty.async = 1;
    twenty.src = y;
    two.parentNode.insertBefore(twenty, two);
  })(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XR39SLZKX6"
          strategy="afterInteractive"
        />
        <Script id="ga4-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XR39SLZKX6');`}
        </Script>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xazb3oqles");`}
        </Script>
      </body>
    </html>
  );
}
