import React from "react";
import Link from "next/link";
import { playbooks } from "@/components/playbook/playbookData";

const HELIX_ORDER = [
  {
    name: "Lean Thinking",
    subtitle: "Foundational principles from Toyota",
  },
  {
    name: "Complexity Thinking",
    subtitle: "Understanding uncertainty and complex adaptive systems",
  },
  {
    name: "Distributed Leadership",
    subtitle: "The behavior patterns of those who lead people and teams",
  },
  {
    name: "Team Science",
    subtitle: "The science of teams, their interdependencies and interactions",
  },
];

const totalFiles = playbooks.reduce((n, p) => n + p.parts.length, 0);

export default function WorkbooksPage() {
  const groups = HELIX_ORDER.map((h) => ({
    ...h,
    items: playbooks.filter((p) => p.helix === h.name),
  })).filter((g) => g.items.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1a3848] px-6 py-16 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9933a]">
          Free resource
        </p>
        <h1 className="mb-4 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl">
          The Flow System Workbooks
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#e8b96a]">
          {totalFiles} participant workbooks across Lean Thinking, Complexity
          Thinking, Distributed Leadership and Team Science — free to download,
          no sign-up required.
        </p>
      </div>

      {/* All workbooks */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        {groups.map((g) => (
          <div key={g.name} className="mb-14">
            <div className="mb-6 border-b border-[#1a3848]/20 pb-3">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a3848]">
                {g.name}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{g.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((p) => (
                <Link
                  key={p.slug}
                  href={`/playbook/${p.slug}`}
                  className="group flex items-start gap-3 rounded-lg border border-gray-200 p-4 transition-all duration-200 hover:border-[#c9933a] hover:shadow-sm"
                >
                  <svg
                    className="mt-0.5 h-6 w-6 flex-shrink-0 text-[#c9933a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold leading-snug text-[#1a3848] transition-colors duration-200 group-hover:text-[#c9933a]">
                      {p.title}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-400">
                      {p.parts.length > 1
                        ? `${p.parts.length} workbooks`
                        : `PDF · ${p.parts[0].pages} pages`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#254d63] px-6 py-12 text-center">
        <h2 className="mb-3 font-['Playfair_Display'] text-2xl font-bold text-white">
          Want to go deeper?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-[#e8b96a]">
          The workbooks accompany The Flow System courses. Explore the training
          or speak with a coach about what&apos;s right for your team.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/training"
            className="inline-block rounded bg-[#c9933a] px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#e8b96a]"
          >
            Explore Training
          </a>
          <button
            data-tally-open="q4jKz8"
            data-tally-overlay="1"
            className="inline-block cursor-pointer rounded border border-white px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#1a3848]"
          >
            Speak with a Coach
          </button>
        </div>
      </div>
    </div>
  );
}
