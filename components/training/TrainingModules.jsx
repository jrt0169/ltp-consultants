"use client";
import React from "react";

const modules = [
  {
    number: "01",
    title: "Lean Thinking",
    lessons: "41 lessons",
    description: "[Description coming soon — see copy requirements list]",
  },
  {
    number: "02",
    title: "Complexity Thinking",
    lessons: "105 lessons",
    description: "[Description coming soon — see copy requirements list]",
  },
  {
    number: "03",
    title: "Distributed Leadership",
    lessons: "89 lessons",
    description: "[Description coming soon — see copy requirements list]",
  },
  {
    number: "04",
    title: "Team Science & Conclusion",
    lessons: "73 lessons",
    description: "[Description coming soon — see copy requirements list]",
  },
];

export function TrainingModules() {
  return (
    <section className="px-[5%] py-24 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">The Flow System</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Four modules. One framework.
            </h2>
            <p className="md:text-md">
              Each module builds on the last, giving you a complete system for
              leading teams through complexity and delivering lasting results.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-14">
            {modules.map((m, i) => (
              <div key={i} className="flex flex-col border-t border-border-primary pt-8">
                <div className="mb-4 flex items-center gap-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">
                    {m.number}
                  </p>
                  <p className="text-sm text-text-secondary">{m.lessons}</p>
                </div>
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">{m.title}</h3>
                <p className="text-text-secondary">{m.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="mb-6 text-text-secondary">
              Enrol in individual modules or bundle all four for the full Flow System Foundations experience.
            </p>
            <a
              href="https://pdn.thinkific.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand px-8 py-4 font-semibold text-white hover:opacity-90 transition-opacity"
            >
              View all courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
