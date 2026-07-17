import React from "react";

export function TrainingJourney() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-10 max-w-3xl md:mb-12">
          <div className="mb-6 h-1 w-12 rounded bg-accent" />
          <h2 className="mb-4 font-display text-4xl font-bold md:text-6xl">
            The learner’s journey
          </h2>
          <p className="font-body text-lg leading-relaxed text-muted">
            The recommended path through all 77 modules — work each helix in
            order, top to bottom, then move to the next stage. Every topic
            breaks into one to three short modules, and each helix ends with a
            capstone.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-line bg-white p-3 shadow-sm md:p-5">
          <img
            src="/tfs-journey-map.png"
            alt="The Flow System learner's journey — all 77 modules across three helixes: Complexity Thinking, Distributed Leadership, and Team Science, each with 13 topics from foundations to a capstone."
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
