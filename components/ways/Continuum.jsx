"use client";

import React from "react";

const steps = [
  {
    n: "01",
    title: "Start free",
    body: "Workbooks, the free Start Here course, and the diagnostic. See the system before you spend a cent.",
  },
  {
    n: "02",
    title: "Self-paced training",
    body: "77 microlearning modules across three disciplines, in English and Español. Learn at your own pace.",
  },
  {
    n: "03",
    title: "Coaching cohorts",
    body: "Small-group virtual coaching that turns the modules into team habits — with real facilitation and accountability.",
  },
  {
    n: "04",
    title: "On-site & consulting",
    body: "Workshops, org-wide licensing, and train-the-trainer when you're changing how a whole organisation operates.",
  },
];

export function Continuum() {
  return (
    <section className="bg-brand px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl lg:mb-20">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            One continuum
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Learning to coaching to consulting
          </h2>
          <p className="font-body text-lg leading-relaxed text-white/70">
            It&apos;s one journey, not four products. Enter at whatever level
            fits today — and move up as your team is ready.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 md:block" />
          {steps.map((s) => (
            <div key={s.n} className="relative flex flex-col">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-brand font-display text-lg font-bold text-accent-lt">
                {s.n}
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-white">
                {s.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
