"use client";

import React from "react";

const stats = [
  { value: "450+", label: "Organisations transformed" },
  { value: "87%",  label: "Client return rate" },
  { value: "18yr", label: "Combined expertise" },
];

export function Stats20() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-xl">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Impact
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            What we've delivered
          </h2>
          <p className="mt-4 font-body text-muted">
            Numbers that matter. Real results from real organisations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1.4fr]">
          {/* Stats column */}
          <div className="flex flex-col justify-center gap-10 border-r-0 border-line py-10 md:flex-row md:gap-16 lg:flex-col lg:gap-12 lg:border-r lg:pr-16">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="font-display text-6xl font-bold text-brand md:text-8xl lg:text-9xl">
                  {s.value}
                </p>
                <p className="mt-2 font-body font-semibold text-muted">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Image column */}
          <div className="lg:pl-16">
            <img
              className="aspect-[3/2] w-full object-cover"
              src="https://tempfile.aiquickdraw.com/image-format-converter/1776175382652-pq9r3wijcx.jpg"
              alt="LTP Consultants team training session"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
