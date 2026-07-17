import React from "react";

export function TrainingHeader() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/90 to-brand-mid/60" />

      <div className="relative z-10 px-[5%] py-24 md:py-32 lg:py-40">
        <div className="container max-w-3xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />

          <p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            The Flow System &middot; Self-Paced Training
          </p>

          <h1 className="mb-8 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl lg:text-8xl">
            Train your teams in the{" "}
            <em className="not-italic text-accent-lt">whole system</em>
          </h1>

          <p className="mb-10 max-w-xl font-body text-lg leading-relaxed text-white/80">
            The Flow System turns three research-backed disciplines &mdash;
            Complexity Thinking, Distributed Leadership, and Team Science &mdash;
            into short, practical modules, authored by the people who wrote the
            book. Start with a free guided tour.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://pdn.thinkific.com/courses/start-here-the-flow-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-accent-lt hover:shadow-lg"
            >
              Start Free — Take the Guided Tour
            </a>
            <a
              href="https://pdn.thinkific.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors duration-200 hover:text-white"
            >
              Browse the Program
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="font-display text-3xl font-bold text-white">77</p>
              <p className="font-body text-xs uppercase tracking-wider text-white/60">
                Modules
              </p>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div>
              <p className="font-display text-3xl font-bold text-white">3</p>
              <p className="font-body text-xs uppercase tracking-wider text-white/60">
                Helixes
              </p>
            </div>
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <div>
              <p className="font-display text-3xl font-bold text-white">EN + ES</p>
              <p className="font-body text-xs uppercase tracking-wider text-white/60">
                Captioned
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
