"use client";

import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

const cases = [
  {
    img: "https://tempfile.aiquickdraw.com/image-format-converter/1776175420763-baxldzt5phm.jpg",
    alt: "Fortune 500 manufacturer executive team meeting",
    tag: "Leadership",
    readTime: "8 min read",
    title: "A Fortune 500 manufacturer rebuilt its culture",
    excerpt: "Executive team alignment improved by 76% in six months",
  },
  {
    img: "https://tempfile.aiquickdraw.com/image-format-converter/1776175432423-dvi1fimwv5.jpg",
    alt: "Tech company team celebrating productivity milestone",
    tag: "Performance",
    readTime: "6 min read",
    title: "Mid-market tech company doubled team productivity",
    excerpt: "Engagement scores jumped 64% after implementing the LTP framework",
  },
  {
    img: "https://tempfile.aiquickdraw.com/image-format-converter/1776175382652-pq9r3wijcx.jpg",
    alt: "Healthcare network cross-functional leadership team",
    tag: "Team",
    readTime: "7 min read",
    title: "Healthcare network transformed cross-functional collaboration",
    excerpt: "Project delivery times fell 42% through better team dynamics",
  },
];

export function Blog34() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Cases
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            How organisations built stronger teams
          </h2>
          <p className="mt-4 font-body text-muted">
            Real outcomes from real clients in your industry
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-sm border border-line bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.alt}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-sm bg-surface px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-brand">
                    {c.tag}
                  </span>
                  <span className="font-body text-xs text-muted">{c.readTime}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold leading-snug">
                  {c.title}
                </h3>
                <p className="mb-6 font-body text-sm leading-relaxed text-muted">
                  {c.excerpt}
                </p>
                <Link
                  href="/results/case-studies"
                  className="mt-auto inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:text-accent"
                >
                  Read more <RxChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact/book-a-consultation"
            className="inline-flex items-center gap-3 rounded-sm bg-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-mid"
          >
            Book a consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
