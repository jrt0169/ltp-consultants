import React from "react";

export function TrainingCTA() {
  return (
    <section className="bg-brand px-[5%] py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <div className="mx-auto mb-8 h-1 w-12 rounded bg-accent" />
        <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-6xl">
          Not sure where to start?
        </h2>
        <p className="mx-auto mb-10 max-w-xl font-body text-lg leading-relaxed text-white/80">
          Take the free guided tour. It’s the fastest way to find your starting
          point in the system.
        </p>
        <a
          href="https://pdn.thinkific.com/courses/start-here-the-flow-system"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-accent-lt hover:shadow-lg"
        >
          Start Free
        </a>
      </div>
    </section>
  );
}
