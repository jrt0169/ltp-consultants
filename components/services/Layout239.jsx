"use client";

import React from "react";
import { BookCallButton } from "@/components/shared/BookCall";

const includes = [
  {
    number: "01",
    title: "Diagnostic assessment",
    body: "We start by understanding where your teams actually struggle — the environment, the constraints, and the goals — before recommending anything.",
  },
  {
    number: "02",
    title: "Tailored content & delivery",
    body: "Programmes are drawn from the 77-module Flow System library and shaped to your organisation's language, challenges, and priorities.",
  },
  {
    number: "03",
    title: "Coaching & measurement",
    body: "Structured coaching between sessions, plus clear ways to see whether new practices are taking hold — so the change outlasts the workshop.",
  },
  {
    number: "04",
    title: "Licensing & accreditation",
    body: "Organisation-wide access and a train-the-trainer pathway, so your own people can carry the framework forward across teams.",
  },
];

export function Layout239() {
  return (
    <section className="bg-surface px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-xl lg:mb-16">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Included
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            What comes with every engagement
          </h2>
          <p className="font-body leading-relaxed text-muted">
            We don't hand off a program and disappear. Every engagement is built
            around assessment, tailored delivery, coaching, and a path to make
            it self-sustaining.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {includes.map((item) => (
            <div key={item.number} className="flex flex-col gap-4 border-t border-line pt-6">
              <span className="font-display text-4xl font-bold text-line">
                {item.number}
              </span>
              <h3 className="font-display text-xl font-semibold leading-snug lg:text-2xl">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <BookCallButton className="inline-flex items-center gap-3 rounded-sm bg-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-brand-mid">
            Book a consultation
            <span aria-hidden="true">{'→'}</span>
          </BookCallButton>
        </div>
      </div>
    </section>
  );
}
