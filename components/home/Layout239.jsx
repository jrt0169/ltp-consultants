"use client";

import Link from "next/link";
import React from "react";

export function Layout239() {
  return (
    <section className="bg-brand px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-8 h-1 w-10 rounded bg-accent" />
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Free resource
            </p>
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Start with 39 free workbooks
            </h2>
            <p className="font-body text-lg leading-relaxed text-white/75">
              A structured workbook for every topic in The Flow System — across
              Lean Thinking, Complexity Thinking, Distributed Leadership, and
              Team Science. Use them with your team today, and see how the
              system fits together before you spend a cent.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-md">
              {[
                { n: "39", l: "workbooks" },
                { n: "3", l: "disciplines" },
                { n: "77", l: "modules" },
                { n: "EN/ES", l: "bilingual" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-sm border border-white/15 bg-brand-mid p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-accent-lt">
                    {s.n}
                  </p>
                  <p className="font-body text-xs uppercase tracking-wider text-white/60">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/resources/workbooks"
              className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-accent-lt"
            >
              Get the free workbooks
              <span aria-hidden="true">{'→'}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
