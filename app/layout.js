import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

// GA4 Measurement ID for pdnlearn.com (its own property, separate from
// science-teams' G-M3Q4W7YVGP).
const GA_MEASUREMENT_ID = "G-VM6WZ0HYRM";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://pdnlearn.com"),
  title: "Team Training, Coaching & Leadership Development | Performance Development Network",
  description:
    "Team training, coaching, and leadership development from Performance Development Network (PDN) — built on The Flow System: Complexity Thinking, Distributed Leadership, and Team Science.",
  applicationName: "Performance Development Network",
  keywords: [
    "team training",
    "team coaching",
    "leader training",
    "leadership development",
    "leadership training",
    "team performance",
    "The Flow System",
    "complexity thinking",
    "distributed leadership",
    "team science",
    "microlearning",
  ],
  authors: [{ name: "Dr. John R. Turner" }, { name: "Nigel Thurlow" }],
  verification: {
    google: "SLzssEL-oSSH825HXB-Dsk91FdIPcr5pB3QEGkgUjoM",
  },
  openGraph: {
    type: "website",
    siteName: "Performance Development Network",
    url: "https://pdnlearn.com",
    title: "Team Training, Coaching & Leadership Development | PDN",
    description:
      "Team training, coaching, and leadership development built on The Flow System — an integrated system of Complexity Thinking, Distributed Leadership, and Team Science.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Training, Coaching & Leadership Development | PDN",
    description:
      "Team training, coaching, and leadership development built on The Flow System — Complexity Thinking, Distributed Leadership, and Team Science.",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Performance Development Network, LLC",
  alternateName: "PDN",
  url: "https://pdnlearn.com",
  logo: "https://pdnlearn.com/Logo-01.png",
  description:
    "Team training, coaching, and leadership development built on The Flow System — Complexity Thinking, Distributed Leadership, and Team Science.",
  sameAs: [
    "https://science-teams.com",
    "https://getflowtrained.com",
    "https://www.flowconsortium.com/",
    "https://professor-turner.com/",
    "https://flowguides.org/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script id="cal-embed" strategy="afterInteractive">{`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "discovery-call", {origin:"https://cal.com"});
          Cal.ns["discovery-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}</Script>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
