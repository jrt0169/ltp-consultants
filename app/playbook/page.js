import Link from "next/link";
import { Navbar10 } from "@/components/shared/Navbar10";
import { Footer3 } from "@/components/shared/Footer3";
import { playbooks } from "@/components/playbook/playbookData";

export const metadata = {
  title: "The Flow System Workbooks | PDN",
  description:
    "Every Flow System participant workbook — Lean Thinking, Complexity Thinking, Distributed Leadership and Team Science. Free PDF downloads.",
  alternates: { canonical: "https://pdnlearn.com/playbook" },
};

const HELIX_ORDER = [
  "Lean Thinking",
  "Complexity Thinking",
  "Distributed Leadership",
  "Team Science",
];

export default function PlaybookIndexRoute() {
  const grouped = HELIX_ORDER.map((helix) => ({
    helix,
    items: playbooks.filter((p) => p.helix === helix),
  })).filter((g) => g.items.length);

  return (
    <div>
      <Navbar10 />
      <div className="min-h-screen bg-white">
        <div className="bg-[#1a3848] px-6 py-16 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9933a]">
            Free resource
          </p>
          <h1 className="mb-4 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl">
            The Flow System Workbooks
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#e8b96a]">
            Every participant workbook across the four disciplines — free to
            download, no sign-up required.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-12">
          {grouped.map((g) => (
            <div key={g.helix} className="mb-12">
              <div className="mb-5 border-b border-[#1a3848]/20 pb-3">
                <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#1a3848]">
                  {g.helix}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/playbook/${p.slug}`}
                    className="group rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:border-[#c9933a] hover:shadow-sm"
                  >
                    <p className="font-semibold leading-snug text-[#1a3848] transition-colors duration-200 group-hover:text-[#c9933a]">
                      {p.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {p.parts.length > 1
                        ? `${p.parts.length} workbooks`
                        : `${p.parts[0].pages} pages`}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer3 />
    </div>
  );
}
