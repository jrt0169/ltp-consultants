"use client";

import React from "react";

export function Story() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <div className="mb-6 h-1 w-10 rounded bg-accent" />
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Our story
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              A system, not a set of slides
            </h2>
          </div>

          <div className="flex flex-col gap-6 font-body text-lg leading-relaxed text-muted">
            <p>
              Performance Development Network exists to put one integrated
              framework — The Flow System — into the hands of the teams that
              need it. Set out in two published books, the system brings
              together Lean Thinking, Complexity Thinking, Distributed
              Leadership, and Team Science: disciplines that most training
              teaches in isolation, but that only work when they work together.
            </p>
            <p>
              It didn't come from a marketing deck. The Flow System was built by
              practitioners and researchers who had led transformation inside
              large organisations and studied why teams succeed or stall in
              complex, uncertain work. That combination — real delivery
              experience plus peer-reviewed research — is what PDN turns into
              training, coaching, and consulting.
            </p>
            <p>
              We keep the research visible. Our reference site{" "}
              <a
                href="https://science-teams.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand underline underline-offset-2 hover:text-accent"
              >
                science-teams.com
              </a>{" "}
              and ongoing syntheses of the team, leadership, and complexity
              literature are the evidence base beneath everything we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
