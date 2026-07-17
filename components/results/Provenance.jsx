"use client";

import React from "react";

const clients = [
  "Fidelity",
  "Mathias Corvinus Collegium",
  "Texas A&M University",
  "University of North Texas",
];

export function Provenance() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-6 h-1 w-10 rounded bg-accent" />
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Research provenance
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Evidence, not anecdote
            </h2>
          </div>

          <div className="flex flex-col gap-6 font-body text-lg leading-relaxed text-muted">
            <p>
              The Flow System is grounded in peer-reviewed research across
              complexity science, distributed leadership, and Team Science — the
              academic discipline backed by institutions such as the NIH and
              NASA. That evidence base is what justifies why the practices work,
              rather than a promise that they will.
            </p>
            <p>
              We keep it in the open. Our Team Science reference site{" "}
              <a
                href="https://science-teams.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline underline-offset-2 hover:text-accent"
              >
                science-teams.com
              </a>{" "}
              and our ongoing syntheses of the leadership and complexity
              literature let sceptical buyers check the work for themselves.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <p className="mb-6 font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Organisations we've worked with
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {clients.map((c) => (
              <span
                key={c}
                className="font-display text-xl font-semibold text-brand md:text-2xl"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
