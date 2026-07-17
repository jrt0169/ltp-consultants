"use client";

import Link from "next/link";
import React from "react";

export function Header145() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mid via-brand to-brand" />
        <img
          src="/Flow System Logo SM Transparent.png"
          className="absolute right-[-4%] top-1/2 hidden w-[46%] max-w-2xl -translate-y-1/2 object-contain opacity-10 lg:block"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 px-[5%] py-24 md:py-36 lg:py-48">
        <div className="container max-w-3xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />

          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            The operating system for your team
          </p>

          <h1 className="mb-8 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl">
            Build teams that{" "}
            <em className="not-italic text-accent-lt">perform</em>
            <br />
            at the highest level
          </h1>

          <p className="mb-10 max-w-xl font-body text-lg leading-relaxed text-white/80">
            PDN is a system for how teams work in complex environments. We equip
            HR leaders and senior managers with evidence-based training, coaching,
            and consulting grounded in Lean Thinking, Complexity Thinking,
            Distributed Leadership, and Team Science.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact/book-a-consultation"
              className="inline-flex items-center rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-accent-lt hover:shadow-lg"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services/what-we-do"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors duration-200 hover:text-white"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-8 font-body text-sm text-white/70">
            <span>Authors of <em className="not-italic font-semibold text-white">The Flow System</em></span>
            <span aria-hidden="true" className="text-white/25">/</span>
            <span>Research-grounded</span>
            <span aria-hidden="true" className="text-white/25">/</span>
            <span>77 modules &middot; 3 disciplines</span>
            <span aria-hidden="true" className="text-white/25">/</span>
            <span>English + Espa&ntilde;ol</span>
          </div>

        </div>
      </div>
    </section>
  );
}
