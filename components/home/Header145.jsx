"use client";

import Link from "next/link";
import React from "react";

export function Header145() {
  return (
    <section className="relative overflow-hidden bg-brand">
      {/* Background image — replaced by KIE-generated hero */}
      <div className="absolute inset-0">
        <img
          src="https://tempfile.aiquickdraw.com/image-format-converter/1776175382652-pq9r3wijcx.jpg"
          id="hero-bg-img"
          className="h-full w-full object-cover opacity-30"
          alt=""
          aria-hidden="true"
        />
        {/* Dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/80 to-brand/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[5%] py-24 md:py-36 lg:py-48">
        <div className="container max-w-3xl">
          {/* Gold accent rule */}
          <div className="mb-8 h-1 w-12 rounded bg-accent animate-fade-in" />

          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent animate-fade-up">
            Team &amp; Organisational Training
          </p>

          <h1 className="mb-8 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl animate-fade-up-delay-1">
            Build teams that{" "}
            <em className="not-italic text-accent-lt">perform</em>
            <br />
            at the highest level
          </h1>

          <p className="mb-10 max-w-xl font-body text-lg leading-relaxed text-white/80 animate-fade-up-delay-2">
            LTP Consultants works with HR leaders and senior managers to
            transform organisational performance through evidence-based team
            development. We deliver measurable results.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-up-delay-3">
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
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 animate-fade-up-delay-3">
            <div>
              <p className="font-display text-3xl font-bold text-white">340%</p>
              <p className="font-body text-xs text-white/60 uppercase tracking-wider">Avg. ROI Year 1</p>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div>
              <p className="font-display text-3xl font-bold text-white">200+</p>
              <p className="font-body text-xs text-white/60 uppercase tracking-wider">Organisations Served</p>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div>
              <p className="font-display text-3xl font-bold text-white">94%</p>
              <p className="font-body text-xs text-white/60 uppercase tracking-wider">Client Return Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
