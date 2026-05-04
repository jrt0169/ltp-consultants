"use client";
import React from "react";

const modules = [
  {
    number: "01",
    title: "Lean Thinking",
    lessons: "41 lessons",
    description:
      "Built on the Toyota Production System and the Toyota Way, this module gives you the customer-first, waste-elimination foundation that underpins The Flow System. You'll learn how proven methods for managing predictable processes -- continuous improvement, respect for people, and value-stream thinking -- form the bedrock of high-performing organisations.",
  },
  {
    number: "02",
    title: "Complexity Thinking",
    lessons: "105 lessons",
    description:
      "Not all environments are predictable, and this module equips you with the tools and mindset to lead through uncertainty. Drawing on frameworks including the Cynefin Framework, OODA Loops, and Sensemaking, you'll learn to navigate ambiguity, detect weak signals, and make sound decisions when outcomes can't be known in advance.",
  },
  {
    number: "03",
    title: "Distributed Leadership",
    lessons: "89 lessons",
    description:
      "Leadership doesn't just flow from the top -- this module shows how it operates horizontally, vertically, and everywhere in between. From self-leadership and shared team leadership to functional boundary-spanning roles, you'll build a hybrid leadership model designed for modern complex organisations.",
  },
  {
    number: "04",
    title: "Team Science & Conclusion",
    lessons: "73 lessons",
    description:
      "Teams are dynamic, complex adaptive systems -- and this module draws on the discipline of team science to help you build, design, and sustain high-performing teams. Covering team effectiveness, psychological safety, situational awareness, and multiteam systems, it completes the full Flow System framework with practical tools you can apply immediately.",
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
