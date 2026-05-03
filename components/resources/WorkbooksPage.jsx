"use client";
import React from "react";

// All PDFs live in /public/workbooks/ — served at /workbooks/filename.pdf
const enc = (name) => "/workbooks/" + encodeURIComponent(name);

const sections = [
  {
    id: "lean-thinking",
    title: "Lean Thinking",
    subtitle: "Foundational principles from Toyota",
    workbooks: [
      { title: "Toyota Production System", file: "Workbook - Toyota Production System.pdf" },
      { title: "The Toyota Way", file: "Workbook - The Toyota Way.pdf" },
    ],
  },
  {
    id: "complexity-thinking",
    title: "Complexity Thinking",
    subtitle: "Understanding uncertainty and complex adaptive systems",
    workbooks: [
      { title: "Complexity Thinking", file: "Workbook - Complexity Thinking.pdf" },
      { title: "Complex Adaptive Systems", file: "Workbook - Complex Adaptive Systems.pdf" },
      { title: "Cynefin Framework", file: "Workbook - Cynefin Framework.pdf" },
      { title: "Sensemaking Systems", file: "Workbook - Sensemaking Systems.pdf" },
      { title: "Weak Signal Detection — Part 1", file: "Workbook 1 - Weak Signal Detection.pdf" },
      { title: "Weak Signal Detection — Part 2", file: "Workbook 2 - Weak Signal Detection.pdf" },
      { title: "Network Analysis", file: "Workbook - Network Analysis.pdf" },
      { title: "Storytelling and Narratives", file: "Workbook - Storytelling and Narratives.pdf" },
      { title: "Empirical Process Control", file: "Workbook - Empirical Process Control.pdf" },
      { title: "Constraint Management", file: "Workbook - Constraint Management.pdf" },
      { title: "Prototypes", file: "Workbook - Prototypes.pdf" },
      { title: "The OODA Loop", file: "Workbook - The OODP Loop.pdf" },
      { title: "Scrum the Toyota Way", file: "Workbook - Scrum the Toyota Way.pdf" },
    ],
  },
  {
    id: "distributed-leadership",
    title: "Distributed Leadership",
    subtitle: "The behaviour patterns of those who lead people and teams",
    workbooks: [
      { title: "Psychological Safety", file: "Workbook - Psychological Safety.pdf" },
      { title: "Active Listening", file: "Workbook - Active Listening.pdf" },
      { title: "Leader's Intent", file: "Workbook - Leader's Intent.pdf" },
      { title: "Shared Mental Models", file: "Workbook - Shared Mental Models.pdf" },
      { title: "Wardley Maps", file: "Workbook - Wardley Maps.pdf" },
      { title: "Decision-Making", file: "Workbook - Decision-Making.pdf" },
      { title: "Bias Towards Action", file: "Workbook - Bias Towards Action.pdf" },
      { title: "Collaboration", file: "Workbook - Collaboration.pdf" },
      { title: "Coaching and Mentoring", file: "Workbook - Coaching and Mentoring.pdf" },
      { title: "Complex Facilitation — Part 1", file: "Workbook 1 - Complex Facilitation.pdf" },
      { title: "Complex Facilitation — Part 2", file: "Workbook 2 - Complex Facilitation.pdf" },
      { title: "Organisational Design — Part 1", file: "Workbook 1 - Organizational Design.pdf" },
      { title: "Organisational Design — Part 2", file: "Workbook 2 - Organizational Design.pdf" },
    ],
  },
  {
    id: "team-science",
    title: "Team Science",
    subtitle: "The science of teams, their interdependencies and interactions",
    workbooks: [
      { title: "Teamwork Training", file: "Workbook - Teamwork Training.pdf" },
      { title: "Human-Centred Design", file: "Workbook - Human-Centred Design.pdf" },
      { title: "Team Design", file: "Workbook - Team Design.pdf" },
      { title: "Goal Identification", file: "Workbook - Goal Identification.pdf" },
      { title: "Situational Awareness", file: "Workbook - Situational Awareness.pdf" },
      { title: "Developing Cognitions", file: "Workbook - Developing Cognitions.pdf" },
      { title: "Influencing Conditions", file: "Workbook - Influencing Conditions.pdf" },
      { title: "Team Learning", file: "Workbook - Team Learning.pdf" },
      { title: "Team Effectiveness", file: "Workbook - Team Effectiveness.pdf" },
      { title: "Red Teaming", file: "Workbook - Red Teaming.pdf" },
      { title: "Multiteam Systems", file: "Workbook - Multiteam Systems.pdf" },
    ],
  },
];

export function WorkbooksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand px-[5%] py-20 md:py-24">
        <div className="container">
          <p className="mb-3 font-semibold text-accent md:mb-4">The Flow System Playbook</p>
          <h1 className="mb-5 text-5xl font-bold text-white md:text-7xl lg:text-8xl">
            Playbook Workbooks
          </h1>
          <p className="max-w-2xl text-white/80 md:text-md">
            Downloadable workbooks for every topic covered in The Flow System Playbook. Each opens
            in a new tab — click any title below to view or download the PDF.
          </p>
        </div>
      </section>

      {/* Workbooks Index */}
      <section className="px-[5%] py-20 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex flex-col gap-16 md:gap-20">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <div className="mb-8 border-b border-border-primary pb-6">
                  <p className="mb-1 text-sm font-bold uppercase tracking-widest text-accent">
                    {section.title}
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">{section.title} Index</h2>
                  <p className="mt-2 text-text-secondary">{section.subtitle}</p>
                </div>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {section.workbooks.map((wb, i) => (
                    <li key={i}>
                      <a
                        href={enc(wb.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded border border-border-primary p-4 transition-colors hover:border-accent hover:bg-accent-lt"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-sm font-medium group-hover:text-accent">
                          {wb.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
