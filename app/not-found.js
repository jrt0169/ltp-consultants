import Link from "next/link";
import { Navbar10 } from "@/components/shared/Navbar10";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Page not found | PDN",
  description:
    "That page isn't here. Find The Flow System workbooks, training and resources on pdnlearn.com.",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  {
    href: "/resources/workbooks",
    title: "The Flow System Workbooks",
    body: "All 39 participant workbooks, free to download — no sign-up.",
  },
  {
    href: "/training",
    title: "Training",
    body: "The 77-module curriculum across all three disciplines.",
  },
  {
    href: "/the-flow-system",
    title: "The Flow System",
    body: "How Complexity Thinking, Distributed Leadership and Team Science fit together.",
  },
  {
    href: "/ways-to-work",
    title: "Ways to Work",
    body: "Self-paced learning, coaching, or consulting — enter anywhere.",
  },
];

export default function NotFound() {
  return (
    <div>
      <Navbar10 />

      <div className="min-h-screen bg-white">
        <div className="bg-[#1a3848] px-6 py-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9933a]">
            Page not found
          </p>
          <h1 className="mb-4 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl">
            That page isn&apos;t here
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#e8b96a]">
            The link may be out of date, or the page may have moved. Everything
            below is a good place to pick up.
          </p>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8 h-1 w-12 rounded bg-[#c9933a]" />

          <p className="mb-8 text-gray-700">
            Looking for a workbook? Every Flow System workbook now lives on{" "}
            <Link
              href="/resources/workbooks"
              className="font-semibold text-[#c9933a] underline"
            >
              one page
            </Link>{" "}
            — free, and with no email required.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group rounded-lg border border-gray-200 p-5 transition-all duration-200 hover:border-[#c9933a] hover:shadow-sm"
              >
                <p className="font-['Playfair_Display'] text-lg font-bold text-[#1a3848] transition-colors duration-200 group-hover:text-[#c9933a]">
                  {d.title}
                </p>
                <p className="mt-1 text-sm text-gray-600">{d.body}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-block rounded bg-[#1a3848] px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#254d63]"
            >
              Back to the homepage
            </Link>
          </div>
        </div>
      </div>

      <Footer3 />
    </div>
  );
}
