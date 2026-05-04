"use client";

import Link from "next/link";
import React from "react";

export function Header145() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="absolute inset-0">
        <img
          src="https://tempfile.aiquickdraw.com/image-format-converter/1776175382652-pq9r3wijcx.jpg"
          id="hero-bg-img"
          className="h-full w-full object-cover opacity-30"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/80 to-brand/30" />
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

        </div>
      </div>
    </section>
  );
}
