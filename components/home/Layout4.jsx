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
            <div className="relative overflow-hidden rounded-sm">
              <img
                id="roi-img"
                src="https://tempfile.aiquickdraw.com/image-format-converter/1776175463935-798ix57nue6.jpg"
                className="aspect-[4/5] w-full object-cover"
                alt="Executive team reviewing performance metrics"
              />
              
            </div>
            {/* Decorative bracket */}
            <div className="absolute -left-4 top-8 hidden h-24 w-1 rounded bg-accent lg:block" />
          </div>

          {/* Text column */}
          <div>
            <div className="mb-8 h-1 w-10 rounded bg-accent" />
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Measurable
            </p>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Investing in your people pays dividends
            </h2>
            <p className="mb-8 font-body leading-relaxed text-muted">
              PDN's training, coaching, and consulting programs are designed to deliver
              real, measurable improvements in team performance, retention, and
              engagement -- benefiting your organisation's bottom line.
            </p>

            <div className="mb-10 grid grid-cols-2 gap-6 border-t border-line pt-8">
              <div>
                <p className="mb-2 font-body text-sm font-semibold text-brand">
                  The math
                </p>
                <p className="font-body text-sm leading-relaxed text-muted">
                  Lower turnover means lower recruitment and training expenses
                  across the board.
                </p>
              </div>
              <div>
                <p className="mb-2 font-body text-sm font-semibold text-brand">
                  The impact
                </p>
                <p className="font-body text-sm leading-relaxed text-muted">
                  Engaged teams deliver better results, faster execution, and
                  stronger client relationships.
                </p>
              </div>
            </div>

            <Link
              href="/results/case-studies"
              className="inline-flex items-center gap-3 rounded-sm bg-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-brand-mid"
            >
              See the results
              <span aria-hidden="true">-></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
