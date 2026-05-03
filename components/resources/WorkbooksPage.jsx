"use client";
import React from "react";

const enc = (folder, name) => "/workbooks/" + folder + "/" + encodeURIComponent(name);

const sections = [
  {
    id: "lean-thinking",
    folder: "LT",
    title: "Lean Thinking",
    subtitle: "Foundational principles from Toyota",
    workbooks: [
      { title: "Toyota Production System", file: "Workbook - Toyota Production System.pdf" },
      { title: "The Toyota Way", file: "Workbook - The Toyota Way.pdf" },
    ],
  },
  {
    id: "complexity-thinking",
    folder: "CT",
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
    folder: "DL",
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
    folder: "TS",
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
      <section className="bg-brand px-[5%] py-20 md:py-24">
        <div className="container">
          <p className="mb-3 font-semibold text-accent md:mb-4">The Flow System Playbook</p>
          <h1 className="mb-5 text-5xl font-bold text-white md:text-7xl lg:text-8xl">
            Playbook Workbooks
          </h1>
          <p className="max-w-2xl text-white/80 md:text-md">
            Downloadable workbooks for every topic covered in The Flow System Playbook. Each
            workbook pairs with a module of the online training — open or download any PDF to
            follow along.
          </p>
        </div>
      </section>
      <section className="px-[5%] py-20 md:py-24 lg:py-28">
        <div className="container">
          <div className="flex flex-col gap-16 md:gap-20">
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <div className="mb-8 border-b border-border-primary pb-6">
                  <p className="mb-1 text-sm font-bold uppercase tracking-widest text-accent">
                    {section.title}
                  </p>
                  <h2 className="text-3xl font-bold md:text-4xl">{section.title} Workbooks</h2>
                  <p className="mt-2 text-text-secondary">{section.subtitle}</p>
                </div>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {section.workbooks.map((wb, i) => (
                    <li key={i}>
                      <a
                        href={enc(section.folder, wb.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded border border-border-primary p-4 transition-colors hover:border-accent hover:bg-accent-lt"
                      >
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-accent"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
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
