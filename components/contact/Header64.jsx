"use client";

import React from "react";

export function Header64() {
  return (
    <section className="bg-brand px-[5%] py-24 md:py-36 lg:py-48">
      <div className="container max-w-4xl">
        <div className="mb-8 h-1 w-12 rounded bg-accent animate-fade-in" />
        <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent animate-fade-up">
          Book a Consultation
        </p>
        <h1 className="mb-8 font-display text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl animate-fade-up-delay-1">
          Let's talk about{" "}
          <em className="not-italic text-accent-lt">your team</em>
        </h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-white/75 animate-fade-up-delay-2">
          A 30-minute conversation is all it takes to determine whether LTP
          Consultants is the right fit for your organisation.
        </p>
      </div>
    </section>
  );
}
