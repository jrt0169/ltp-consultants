"use client";
import React from "react";

const enc = (name) => "/workbooks/" + encodeURIComponent(name);

const sections = [
  { id: "lean-thinking", title: "Lean Thinking", subtitle: "Foundational principles from Toyota",
    workbooks: [
      { title: "Toyota Production System", file: "Workbook - Toyota Production System.pdf" },
      { title: "The Toyota Way", file: "Workbook - The Toyota Way.pdf" },
    ],
  },
  { id: "complexity-thinking", title: "Complexity Thinking", subtitle: "Understanding uncertainty and complex adaptive systems",
    workbooks: [
      { title: "Complexity Thinking", file: "Workbook - Complexity Thinking.pdf" },
      { title: "Complex Adaptive Systems", file: "Workbook - Complex Adaptive Systems.pdf" },
      { title: "Cynefin Framework", file: "Workbook - Cynefin Framework.pdf" },
      { title: "Sensemaking Systems", file: "Workbook - Sensemaking Systems.pdf" },
      { title: "Weak Signal Detection Part 1", file: "Workbook 1 - Weak Signal Detection.pdf" },
      { title: "Weak Signal Detection Part 2", file: "Workbook 2 - Weak Signal Detection.pdf" },
      { title: "Network Analysis", file: "Workbook - Network Analysis.pdf" },
      { title: "Storytelling and Narratives", file: "Workbook - Storytelling and Narratives.pdf" },
      { title: "Empirical Process Control", file: "Workbook - Empirical Process Control.pdf" },
      { title: "Constraint Management", file: "Workbook - Constraint Management.pdf" },
      { title: "Prototypes", file: "Workbook - Prototypes.pdf" },
      { title: "The OODA Loop", file: "Workbook - The OODP Loop.pdf" },
      { title: "Scrum the Toyota Way", file: "Workbook - Scrum the Toyota Way.pdf" },
    ],
  },
  { id: "distributed-leadership", title: "Distributed Leadership", subtitle: "The behaviour patterns of those who lead people and teams",
    workbooks: [
      { title: "Psychological Safety", file: "Workbook - Psychological Safety.pdf" },
      { title: "Active Listening", file: "Workbook - Active Listening.pdf" },
      { title: "Leaders Intent", file: "Workbook - Leader's Intent.pdf" },
      { title: "Shared Mental Models", file: "Workbook - Shared Mental Models.pdf" },
      { title: "Wardley Maps", file: "Workbook - Wardley Maps.pdf" },
      { title: "Decision-Making", file: "Workbook - Decision-Making.pdf" },
      { title: "Bias Towards Action", file: "Workbook - Bias Towards Action.pdf" },
      { title: "Collaboration", file: "Workbook - Collaboration.pdf" },
      { title: "Coaching and Mentoring", file: "Workbook - Coaching and Mentoring.pdf" },
      { title: "Complex Facilitation Part 1", file: "Workbook 1 - Complex Facilitation.pdf" },
      { title: "Complex Facilitation Part 2", file: "Workbook 2 - Complex Facilitation.pdf" },
      { title: "Organisational Design Part 1", file: "Workbook 1 - Organizational Design.pdf" },
      { title: "Organisational Design Part 2", file: "Workbook 2 - Organizational Design.pdf" },
    ],
  },
  { id: "team-science", title: "Team Science", subtitle: "The science of teams, their interdependencies and interactions",
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

export default function WorkbooksPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-[#1a3848] py-16 px-6 text-center">
        <h1 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">
          TFS Playbook Workbooks
        </h1>
        <p className="text-[#e8b96a] text-lg max-w-2xl mx-auto">
          39 structured workbooks across Lean Thinking, Complexity Thinking, Distributed Leadership, and Team Science -- free to download.
        </p>
      </div>

      {/* Email Capture Banner */}
      <div className="bg-[#254d63] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-2">
            Stay ahead -- get notified when new modules launch
          </h2>
          <p className="text-[#e8b96a] mb-6 text-sm">
            We're building individual short courses for each of these topics. Register your interest and be first to know when they go live.
          </p>
          <button
            data-tally-open="q4jKz8"
            data-tally-overlay="1"
            className="inline-block bg-[#c9933a] hover:bg-[#e8b96a] text-white font-semibold py-3 px-8 rounded transition-colors duration-200 cursor-pointer"
          >
            Register Your Interest
          </button>
        </div>
      </div>

      {/* Workbook Sections */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {sections.map((section) => (
          <div key={section.id} className="mb-14">
            <div className="mb-6 border-b border-[#1a3848]/20 pb-3">
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a3848]">
                {section.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{section.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.workbooks.map((wb) => (
                <a
                  key={wb.file}
                  href={enc(wb.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#c9933a] hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#c9933a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1a3848] group-hover:text-[#c9933a] transition-colors duration-200 leading-snug">
                      {wb.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">PDF Workbook</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#1a3848] py-12 px-6 text-center">
        <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-3">
          Want to go deeper?
        </h2>
        <p className="text-[#e8b96a] mb-6 max-w-xl mx-auto text-sm">
          These workbooks accompany The Flow System courses. Explore our training options or speak with a coach about what's right for your team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/training"
            className="inline-block bg-[#c9933a] hover:bg-[#e8b96a] text-white font-semibold py-3 px-8 rounded transition-colors duration-200"
          >
            Explore Training
          </a>
          <button
            data-tally-open="q4jKz8"
            data-tally-overlay="1"
            className="inline-block border border-white text-white hover:bg-white hover:text-[#1a3848] font-semibold py-3 px-8 rounded transition-colors duration-200 cursor-pointer"
          >
            Speak with a Coach
          </button>
        </div>
      </div>

    </div>
  );
}
