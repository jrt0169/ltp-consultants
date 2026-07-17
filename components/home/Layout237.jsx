"use client";

import Link from "next/link";
import React from "react";

const ways = [
  {
    number: "01",
    title: "Self-paced training",
    body: "77 microlearning modules across three disciplines — Complexity Thinking, Distributed Leadership, and Team Science — in English and Español. Start with a single module or a free Start Here course.",
    href: "/training",
    linkText: "Explore the training",
  },
  {
    number: "02",
    title: "Coaching cohorts",
    body: "Small-group virtual coaching that turns the modules into team habits. Structured sessions, real facilitation, and accountability between them — for leaders and their teams.",
    href: "/contact/book-a-consultation",
    linkText: "Talk about coaching",
  },
  {
    number: "03",
    title: "On-site & consulting",
    body: "In-person workshops, organisation-wide licensing, and train-the-trainer accreditation. High-touch delivery when you're changing how a whole team or organisation operates.",
    href: "/services/what-we-do",
    linkText: "See consulting options",
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
              Ways to work with us
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              Three ways to put the system to work
            </h2>
          </div>
          <p className="max-w-sm font-body text-muted md:text-right">
            One integrated framework, delivered at the depth you need — learn
            it yourself, coach your team through it, or bring us in.
          </p>
        </div>

        {/* Ways */}
        <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {ways.map((w) => (
            <div
              key={w.number}
              className="group flex flex-col gap-6 py-10 md:px-10 md:py-0 first:md:pl-0 last:md:pr-0"
            >
              <span className="font-display text-5xl font-bold text-line">
                {w.number}
              </span>
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold leading-snug lg:text-2xl">
                  {w.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted">
                  {w.body}
                </p>
              </div>
              <Link
                href={w.href}
                className="mt-auto inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:text-accent"
              >
                {w.linkText} <span aria-hidden="true">{'→'}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
