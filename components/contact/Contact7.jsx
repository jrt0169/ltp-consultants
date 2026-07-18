"use client";

import React from "react";
import { BookCallButton } from "@/components/shared/BookCall";

export function Contact7() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
        {/* Reach us */}
        <div>
          <div className="mb-8">
            <div className="mb-6 h-1 w-10 rounded bg-accent" />
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Get in touch
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
              Tell us about your team
            </h2>
            <p className="font-body text-muted">
              Send a message and we&apos;ll respond within one business day — or
              book a call and skip the back-and-forth.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              data-tally-open="q4jKz8"
              data-tally-overlay="1"
              className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-mid"
            >
              Send us a message <span aria-hidden="true">{"→"}</span>
            </button>
            <BookCallButton className="inline-flex items-center justify-center gap-3 rounded-sm border border-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-brand transition-all hover:bg-brand hover:text-white">
              Book a discovery call
            </BookCallButton>
          </div>
        </div>

        {/* Image + what to expect */}
        <div className="flex flex-col gap-8">
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm bg-surface p-10">
            <img
              src="/Image-1-300.png"
              alt="The Flow System — the Triple Helix of Complexity Thinking, Distributed Leadership, and Team Science"
              className="w-full max-w-sm object-contain"
            />
          </div>
          <div className="rounded-sm border border-line bg-surface p-7">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              What to expect
            </p>
            <ul className="flex flex-col gap-4 font-body text-sm text-brand">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-accent">&mdash;</span>
                <span>A 30-minute conversation about your team and goals.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-accent">&mdash;</span>
                <span>We listen first &mdash; no generic playbook, no pressure.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-accent">&mdash;</span>
                <span>A clear recommendation on the right way to work together.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
