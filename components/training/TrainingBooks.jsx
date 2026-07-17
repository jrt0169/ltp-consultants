import React from "react";

const books = [
  {
    title: "The Flow System",
    body: "The theory — how complexity thinking, distributed leadership, and team science combine to help organizations deliver value in a complex world.",
    cta: "Read the theory →",
    href: "https://www.amazon.com/dp/1680400584",
  },
  {
    title: "The Flow System Playbook",
    body: "The practice — tools, plays, and exercises for putting the system to work with real teams.",
    cta: "Master the practice →",
    href: "https://www.amazon.com/dp/B0CKDCKCQQ",
  },
];

export function TrainingBooks() {
  return (
    <section className="bg-surface px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <div className="mb-6 h-1 w-12 rounded bg-accent" />
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            The books behind the system
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {books.map((b) => (
            <div key={b.title} className="border-l-4 border-brand bg-white p-6 md:p-8">
              <h3 className="mb-3 font-display text-2xl font-bold text-brand">
                {b.title}
              </h3>
              <p className="mb-5 font-body text-muted">{b.body}</p>
              <a
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-semibold uppercase tracking-widest text-accent transition-colors hover:text-brand"
              >
                {b.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
