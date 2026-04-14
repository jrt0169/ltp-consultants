"use client";

import Link from "next/link";
import React from "react";

const pillars = [
  {
    number: "01",
    title: "Evidence-based methodology",
    body: "Every intervention is grounded in organisational psychology and validated through real-world outcomes — not intuition.",
    href: "/services/what-we-do",
  },
  {
    number: "02",
    title: "Built for your organisation",
    body: "We customise every programme to your specific challenges, culture, and strategic goals. No off-the-shelf workshops.",
    href: "/services/what-we-do",
  },
  {
    number: "03",
    title: "Delivered by experts",
    body: "Our consultants bring decades of combined experience in team dynamics and organisational transformation.",
    href: "/about",
  },
];

export function Layout237() {
  return (
    <section className="bg-surface px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:mb-20">
          <div className="max-w-xl">
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Proven
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              Results that matter to your bottom line
            </h2>
          </div>
          <p className="max-w-sm font-body text-muted md:text-right">
            Our clients see measurable improvements in team performance,
            retention, and engagement within the first 90 days.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="group flex flex-col gap-6 py-10 md:px-10 md:py-0 first:md:pl-0 last:md:pr-0"
            >
              <span className="font-display text-5xl font-bold text-line">
                {p.number}
              </span>
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold leading-snug lg:text-2xl">
                  {p.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
              <Link
                href={p.href}
                className="mt-auto inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:text-accent"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
