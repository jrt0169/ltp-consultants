"use client";

import React from "react";

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
            Content coming soon.
          </p>
        </div>

        <div className="w-full">
          <img
            className="aspect-[3/2] w-full object-cover"
            src="https://tempfile.aiquickdraw.com/image-format-converter/1776175382652-pq9r3wijcx.jpg"
            alt="PDN team training session"
          />
        </div>
      </div>
    </section>
  );
}
