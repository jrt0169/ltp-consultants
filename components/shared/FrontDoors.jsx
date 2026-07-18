"use client";

import Link from "next/link";
import React from "react";

const doors = [
  {
    label: "Read",
    title: "39 free workbooks",
    body: "A structured workbook for every topic in The Flow System. Use them with your team today.",
    href: "/resources/workbooks",
    cta: "Get the workbooks",
    external: false,
  },
  {
    label: "Watch",
    title: "Free Start Here course",
    body: "A short course that introduces the whole curriculum — the fastest way to see how it fits together.",
    href: "https://pdn.thinkific.com/courses/start-here-the-flow-system",
    cta: "Start the free course",
    external: true,
  },
  {
    label: "Assess",
    title: "Diagnose your team",
    body: "A two-minute quiz that names your environment, your biggest gap, and the right first step.",
    href: "/diagnose",
    cta: "Take the diagnostic",
    external: false,
  },
];

export function FrontDoors() {
  return (
    <section className="bg-surface px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-xl">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Start free
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Three free ways in
          </h2>
          <p className="mt-4 font-body text-muted">
            No commitment. Pick a door and see the system for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {doors.map((d) => (
            <div
              key={d.title}
              className="flex flex-col rounded-sm border border-line bg-white p-8"
            >
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {d.label}
              </p>
              <h3 className="mb-3 font-display text-xl font-bold leading-snug lg:text-2xl">
                {d.title}
              </h3>
              <p className="mb-6 font-body text-sm leading-relaxed text-muted">
                {d.body}
              </p>
              {d.external ? (
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:text-accent"
                >
                  {d.cta} <span aria-hidden="true">{"→"}</span>
                </a>
              ) : (
                <Link
                  href={d.href}
                  className="mt-auto inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:text-accent"
                >
                  {d.cta} <span aria-hidden="true">{"→"}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
