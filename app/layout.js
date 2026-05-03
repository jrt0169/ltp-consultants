import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  title: "PDN | Performance Development Network",
  description:
    "Performance Development Network (PDN) delivers online training, coaching, and consulting services that drive measurable results. Book a consultation today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
        <Script id="cal-embed" strategy="afterInteractive">{`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "discovery-call", {origin:"https://cal.com"});
          Cal.ns["discovery-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}</Script>
      </body>
    </html>
  );
}
