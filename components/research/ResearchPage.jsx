"use client";

import Link from "next/link";
import React from "react";

const SCHOLAR_URL = "https://scholar.google.com/citations?hl=en&user=YMkGOZcAAAAJ";

const disciplines = [
  {
    name: "Complexity Thinking",
    color: "#C73832",
    body: "Draws on complexity science and sensemaking — Cynefin, complex adaptive systems, weak-signal detection — to give teams a vocabulary and toolkit for uncertainty that most training never addresses.",
  },
  {
    name: "Distributed Leadership",
    color: "#345C8C",
    body: "Grounded in decades of leadership and organisational research on psychological safety, shared cognition, and how decision-making really works when authority is distributed rather than held by one person.",
  },
  {
    name: "Team Science",
    color: "#468C4B",
    body: "An academic discipline backed by institutions such as the NIH and NASA. It provides the peer-reviewed evidence for why the practices work — the credibility signal no commercial training provider grounds their content in.",
  },
];

const sources = [
  {
    label: "Reference site",
    title: "science-teams.com",
    body: "Our Team Science reference library — the research, models, and evidence behind the framework, kept in the open.",
    href: "https://science-teams.com",
    cta: "Visit science-teams.com",
  },
  {
    label: "Published scholarship",
    title: "100+ peer-reviewed articles",
    body: "The Flow System's co-creator, Dr. John R. Turner, has published over 100 articles and book chapters on team science, complexity, and leadership.",
    href: SCHOLAR_URL,
    cta: "View the Google Scholar profile",
  },
  {
    label: "The books",
    title: "The Flow System & Playbook",
    body: "The framework is set out in full in two published books — a public, third-party-validated intellectual foundation.",
    href: "https://www.amazon.com/dp/1680400584",
    cta: "See the books on Amazon",
  },
];

export default function ResearchPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand px-[5%] py-24 md:py-32 lg:py-40">
        <div className="container max-w-4xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />
          <p className="mb-5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            The evidence base
          </p>
          <h1 className="mb-8 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
            Grounded in research, <br />
            <span className="text-accent-lt">not opinion</span>
          </h1>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-white/75">
            Every discipline in The Flow System rests on peer-reviewed research.
            We keep that evidence visible — so you don&apos;t have to take our
            word for it.
          </p>
        </div>
      </section>

      {/* Why it holds up */}
      <section className="px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mb-14 max-w-xl">
            <div className="mb-6 h-1 w-10 rounded bg-accent" />
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Why it holds up
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              Three disciplines, each evidence-based
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {disciplines.map((d) => (
              <div key={d.name} className="rounded-sm border border-line bg-white p-8">
                <div
                  className="mb-6 h-1 w-10 rounded"
                  style={{ backgroundColor: d.color }}
                />
                <h3 className="mb-4 font-display text-xl font-bold leading-snug lg:text-2xl">
                  {d.name}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Check the work */}
      <section className="bg-surface px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="mb-14 max-w-xl">
            <div className="mb-6 h-1 w-10 rounded bg-accent" />
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Check the work
            </p>
            <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
              Read the evidence yourself
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {sources.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-sm border border-line bg-white p-8"
              >
                <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  {s.label}
                </p>
                <h3 className="mb-3 font-display text-xl font-bold leading-snug">
                  {s.title}
                </h3>
                <p className="mb-6 font-body text-sm leading-relaxed text-muted">
                  {s.body}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-brand transition-colors hover:text-accent"
                >
                  {s.cta} <span aria-hidden="true">{"→"}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand px-[5%] py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Put the evidence to work
          </h2>
          <p className="mx-auto mb-10 max-w-xl font-body text-lg leading-relaxed text-white/75">
            See where your team stands, then start with the research-backed
            training built for it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/diagnose"
              className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-lt"
            >
              Diagnose your team <span aria-hidden="true">{"→"}</span>
            </Link>
            <Link
              href="/training"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10"
            >
              Explore the training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
