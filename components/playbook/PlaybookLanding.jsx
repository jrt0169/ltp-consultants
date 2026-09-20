"use client";
import React from "react";

const HELIX_BLURB = {
  "Lean Thinking": "Foundational principles from Toyota",
  "Complexity Thinking": "Understanding uncertainty and complex adaptive systems",
  "Distributed Leadership": "The behavior patterns of those who lead people and teams",
  "Team Science": "The science of teams, their interdependencies and interactions",
};

const fmtSize = (b) => `${(b / 1048576).toFixed(1)} MB`;

function DownloadCard({ part, showLabel }) {
  return (
    <a
      href={`/playbook/${part.file}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-5 transition-all duration-200 hover:border-[#c9933a] hover:shadow-sm"
    >
      <svg
        className="h-8 w-8 flex-shrink-0 text-[#c9933a]"
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
        <p className="font-semibold text-[#1a3848] transition-colors duration-200 group-hover:text-[#c9933a]">
          {showLabel ? part.label : "Download the workbook"}
        </p>
        <p className="mt-0.5 text-xs text-gray-500">
          PDF · {part.pages} pages · {fmtSize(part.bytes)}
        </p>
      </div>
      <span className="flex-shrink-0 rounded bg-[#1a3848] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-[#c9933a]">
        Download
      </span>
    </a>
  );
}

export default function PlaybookLanding({ playbook }) {
  const { title, helix, description, parts } = playbook;
  const multi = parts.length > 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1a3848] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9933a]">
            {helix}
          </p>
          <h1 className="mb-4 font-['Playfair_Display'] text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#e8b96a]">
            The Flow System participant workbook
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 h-1 w-12 rounded bg-[#c9933a]" />
        <p className="text-lg leading-relaxed text-gray-700">{description}</p>

        <div className="mt-10">
          <h2 className="mb-4 font-['Playfair_Display'] text-xl font-bold text-[#1a3848]">
            {multi ? `Download both workbooks` : `Download`}
          </h2>
          {multi && (
            <p className="mb-4 text-sm text-gray-500">
              This topic is covered across two workbooks. Work through them in
              order.
            </p>
          )}
          <div className="flex flex-col gap-3">
            {parts.map((p) => (
              <DownloadCard key={p.file} part={p} showLabel={multi} />
            ))}
          </div>
        </div>

        {/* Pointer to the full set */}
        <div className="mt-12 rounded-lg border border-[#1a3848]/15 bg-[#f2efe9] p-6 text-center">
          <p className="font-['Playfair_Display'] text-lg font-bold text-[#1a3848]">
            Want the whole set?
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
            Every Flow System workbook across Lean Thinking, Complexity Thinking,
            Distributed Leadership and Team Science — free, no sign-up.
          </p>
          <a
            href="/resources/workbooks"
            className="mt-5 inline-block rounded bg-[#c9933a] px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#e8b96a]"
          >
            Browse all the workbooks
          </a>
          <p className="mt-3 text-xs text-gray-500">
            {HELIX_BLURB[helix]} — and the other three disciplines.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#254d63] px-6 py-12 text-center">
        <h2 className="mb-3 font-['Playfair_Display'] text-2xl font-bold text-white">
          Go deeper than the workbook
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-sm text-[#e8b96a]">
          Each workbook accompanies a module in The Flow System training.
          Explore the curriculum or talk to a coach about your team.
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
