"use client";

import React from "react";

const testimonials = [
  {
    quote: "LTP didn't just train our teams — they rewired how we operate as a leadership group.",
    name: "Sarah Mitchell",
    role: "Chief HR Officer, Fortune 500 manufacturer",
    initial: "S",
  },
  {
    quote: "The ROI was undeniable. We paid for the entire engagement in the first month alone.",
    name: "James Chen",
    role: "VP of Operations, mid-market technology",
    initial: "J",
  },
  {
    quote: "They understood our culture from day one. No generic playbook — just real solutions.",
    name: "Dr. Patricia Okonkwo",
    role: "Chief Medical Officer, regional healthcare network",
    initial: "P",
  },
];

export function Testimonial3() {
  return (
    <section className="bg-brand px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            What leaders say
          </h2>
          <p className="mt-4 font-body text-white/60">
            Direct feedback from those who made the decision
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-sm bg-brand-mid p-8"
            >
              <blockquote className="mb-8 font-display text-lg font-semibold italic leading-snug text-white md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-body text-sm font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-white">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
