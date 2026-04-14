"use client";

import React from "react";

export function Header64() {
  return (
    <section className="bg-brand px-[5%] py-24 md:py-36 lg:py-48">
      <div className="container max-w-4xl">
        <div className="mb-8 h-1 w-12 rounded bg-accent animate-fade-in" />
        <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent animate-fade-up">
          Results
        </p>
        <h1 className="mb-8 font-display text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl animate-fade-up-delay-1">
          Results that{" "}
          <em className="not-italic text-accent-lt">matter</em>
        </h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-white/75 animate-fade-up-delay-2">
          See how leading organisations transformed their teams and performance
          metrics through evidence-based LTP programmes.
        </p>
      </div>
    </section>
  );
}
