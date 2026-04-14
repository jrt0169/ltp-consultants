"use client";

import React from "react";

const stats = [
  { value: "87%",  label: "of clients report sustained improvement after 12 months" },
  { value: "340+", label: "teams transformed across sectors" },
  { value: "4.2×", label: "average ROI within twelve months" },
];

export function Stats19() {
  return (
    <section className="bg-surface px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Proof
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            The numbers speak clearly
          </h2>
          <p className="mt-4 font-body text-muted">
            Organisations see measurable gains within the first quarter
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex flex-col gap-3 py-10 text-center md:px-10 md:py-0"
            >
              <p className="font-display text-6xl font-bold text-brand md:text-7xl lg:text-8xl">
                {s.value}
              </p>
              <p className="font-body text-sm leading-relaxed text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
