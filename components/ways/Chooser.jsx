"use client";

import Link from "next/link";
import React from "react";

const options = [
  {
    title: "Self-paced training",
    who: "Individuals and teams who want to start now, on their own schedule.",
    gets: [
      "77 microlearning modules, three disciplines",
      "English and Español",
      "Free Start Here course to begin",
    ],
    price: "Modules from $19 · Complete curriculum $799",
    cta: "Explore the training",
    href: "/training",
    external: false,
    featured: false,
  },
  {
    title: "Coaching cohorts",
    who: "Teams who want the modules turned into lasting habits, with guidance.",
    gets: [
      "Small-group virtual coaching",
      "Structured sessions + accountability",
      "Blended with the self-paced modules",
    ],
    price: "Let's talk — tailored to your team",
    cta: "Talk about coaching",
    href: "/contact/book-a-consultation",
    external: false,
    featured: true,
  },
  {
    title: "On-site & consulting",
    who: "Organisations changing how whole teams and functions operate.",
    gets: [
      "In-person workshops",
      "Organisation-wide licensing",
      "Train-the-trainer accreditation",
    ],
    price: "Let's talk — scoped to your organisation",
    cta: "See consulting options",
    href: "/services/what-we-do",
    external: false,
    featured: false,
  },
];

export function Chooser() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-xl lg:mb-16">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Choose your path
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Three ways to work with us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {options.map((o) => (
            <div
              key={o.title}
              className={`flex flex-col rounded-sm border p-8 ${
                o.featured
                  ? "border-accent bg-brand text-white"
                  : "border-line bg-white"
              }`}
            >
              {o.featured && (
                <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent-lt">
                  Most popular
                </p>
              )}
              <h3
                className={`mb-4 font-display text-2xl font-bold ${
                  o.featured ? "text-white" : "text-brand"
                }`}
              >
                {o.title}
              </h3>
              <p
                className={`mb-6 font-body text-sm leading-relaxed ${
                  o.featured ? "text-white/75" : "text-muted"
                }`}
              >
                {o.who}
              </p>
              <ul className="mb-6 flex flex-col gap-3">
                {o.gets.map((g) => (
                  <li
                    key={g}
                    className={`flex gap-3 font-body text-sm ${
                      o.featured ? "text-white/90" : "text-brand"
                    }`}
                  >
                    <span aria-hidden="true" className="text-accent">
                      {"—"}
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
              <p
                className={`mb-6 border-t pt-6 font-body text-sm font-semibold ${
                  o.featured
                    ? "border-white/15 text-accent-lt"
                    : "border-line text-brand"
                }`}
              >
                {o.price}
              </p>
              <Link
                href={o.href}
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-sm px-6 py-4 font-body text-sm font-semibold uppercase tracking-widest transition-all ${
                  o.featured
                    ? "bg-accent text-white hover:bg-accent-lt"
                    : "bg-brand text-white hover:bg-brand-mid"
                }`}
              >
                {o.cta} <span aria-hidden="true">{"→"}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
