"use client";

import React, { Fragment } from "react";

const steps = [
  {
    number: "01",
    label: "Assess the gap",
    heading: "We diagnose before we design",
    body: "You tell us where teams are struggling. We look at the environment, the constraints, and how the team actually works — so any programme targets the real gap, not a generic one.",
  },
  {
    number: "02",
    label: "Build the programme",
    heading: "Drawn from the system, shaped to you",
    body: "We assemble the right modules from the Flow System library and adapt them to your language, sector, and goals — blending self-paced learning, live sessions, and coaching to fit your team.",
  },
  {
    number: "03",
    label: "Embed & measure",
    heading: "Make the change stick",
    body: "Coaching between sessions and clear signals of adoption keep new practices alive after delivery ends — with an optional train-the-trainer path so your own people carry it forward.",
  },
];

export function Layout356() {
  return (
    <section id="relume">
      <div className="sticky top-0">
        {steps.map((step, i) => (
          <Fragment key={step.number}>
            <div className="relative -top-32 h-0" />
            <div
              className={`relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:mb-16 ${
                i === 0
                  ? "top-0 lg:mb-32"
                  : i === 1
                    ? "lg:top-16 lg:-mt-16"
                    : "lg:top-32"
              }`}
            >
              <div className="px-[5%]">
                <div className="container">
                  <div className="flex h-16 w-full items-center">
                    <span className="mr-5 font-semibold md:mr-6 md:text-md">
                      {step.number}
                    </span>
                    <h3 className="font-semibold md:text-md">{step.label}</h3>
                  </div>
                  <div className="py-8 md:py-10 lg:py-12">
                    <div className="grid grid-cols-1 gap-y-8 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                      <div>
                        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent md:mb-4">
                          Step {step.number}
                        </p>
                        <h2 className="rb-5 mb-5 font-display text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                          {step.heading}
                        </h2>
                        <p className="font-body leading-relaxed text-muted md:text-md">
                          {step.body}
                        </p>
                      </div>
                      <div className="relative flex h-full min-h-[18rem] items-center justify-center rounded-sm bg-brand p-10 sm:min-h-[24rem] lg:min-h-[50vh]">
                        <span className="font-display text-[7rem] font-bold leading-none text-white/10 sm:text-[10rem] lg:text-[14rem]">
                          {step.number}
                        </span>
                        <div className="absolute inset-x-10 bottom-10">
                          <div className="mb-4 h-1 w-10 rounded bg-accent" />
                          <p className="font-display text-xl font-semibold text-white md:text-2xl">
                            {step.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
