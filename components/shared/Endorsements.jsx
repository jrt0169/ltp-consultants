"use client";

import React from "react";

const endorsements = [
  {
    quote:
      "The authors thankfully make no claims at offering a roadmap. Instead, they suggest a set of concepts and practices to serve as invaluable aids in navigating the uncharted waters ahead.",
    name: "John Shook",
    role: "Chairman, Lean Global Network",
    initial: "JS",
  },
  {
    quote:
      "The Flow System is a practical guide to surviving and thriving in these times of crises.",
    name: "Stephen Denning",
    role: "Author, The Age of Agile",
    initial: "SD",
  },
  {
    quote: "The Flow System allows more iteration and experimentation.",
    name: "Dr. Ivar Jacobson",
    role: "Chairman & CEO, Ivar Jacobson International",
    initial: "IJ",
  },
  {
    quote:
      "The Flow System is a potential game changer for business, government, and healthcare.",
    name: "Charles & Daniel Protzman",
    role: "Business Improvement Group LLC",
    initial: "P",
  },
];

export function Endorsements() {
  return (
    <section className="bg-brand px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Endorsed by
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Praise for The Flow System
          </h2>
          <p className="mt-4 font-body text-white/60">
            Recognized by leaders across Lean, Agile, and complexity practice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {endorsements.map((e) => (
            <div
              key={e.name}
              className="flex flex-col justify-between rounded-sm bg-brand-mid p-8"
            >
              <blockquote className="mb-8 font-display text-lg font-semibold italic leading-snug text-white md:text-xl">
                &ldquo;{e.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-body text-sm font-bold text-white">
                  {e.initial}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-white">
                    {e.name}
                  </p>
                  <p className="font-body text-xs text-white/50">{e.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
