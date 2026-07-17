"use client";

import Link from "next/link";
import React from "react";

export function Layout4() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative order-last md:order-first">
            <div className="relative overflow-hidden rounded-sm bg-surface p-8 md:p-12">
              <img
                src="/Image-1-300.png"
                className="mx-auto w-full max-w-md object-contain"
                alt="The Flow System — the Triple Helix of Complexity Thinking, Distributed Leadership, and Team Science"
              />
            </div>
            {/* Decorative bracket */}
            <div className="absolute -left-4 top-8 hidden h-24 w-1 rounded bg-accent lg:block" />
          </div>

          {/* Text column */}
          <div>
            <div className="mb-8 h-1 w-10 rounded bg-accent" />
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              One integrated system
            </p>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              What the agile conversation leaves out
            </h2>
            <p className="mb-8 font-body leading-relaxed text-muted">
              Most teams have a framework and still struggle in complex,
              uncertain work. The Flow System weaves together the three
              disciplines that framework leaves out — Complexity Thinking,
              Distributed Leadership, and Team Science — into a single operating
              system for how teams actually work.
            </p>

            <div className="mb-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <p className="mb-2 font-body text-sm font-semibold text-brand">
                  Not another topic
                </p>
                <p className="font-body text-sm leading-relaxed text-muted">
                  Competitors teach one discipline in isolation. We teach how
                  all three reinforce each other.
                </p>
              </div>
              <div>
                <p className="mb-2 font-body text-sm font-semibold text-brand">
                  Grounded in research
                </p>
                <p className="font-body text-sm leading-relaxed text-muted">
                  Built on peer-reviewed Team Science and set out in two
                  published books — not slides built last year.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/training"
                className="inline-flex items-center gap-3 rounded-sm bg-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-brand-mid"
              >
                Explore the training
                <span aria-hidden="true">{'→'}</span>
              </Link>
              <a
                href="https://www.amazon.com/dp/1680400584"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-brand transition-colors hover:text-accent"
              >
                Read the book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
