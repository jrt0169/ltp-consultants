"use client";
import React from "react";
import { sections } from "./workbooksData";

// Dedicated "Workbook Access" Tally form (tally.so/r/yPRVWd) — captures the
// email and, via Tally's redirect-on-completion, forwards to
// /resources/workbooks/library. The "Speak with a Coach" buttons keep the
// general contact form (q4jKz8).
const TALLY_WORKBOOK_FORM = "yPRVWd";

const totalCount = sections.reduce((n, s) => n + s.workbooks.length, 0);

export default function WorkbooksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1a3848] py-16 px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9933a]">
          Free resource
        </p>
        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
          The Flow System Workbooks
        </h1>
        <p className="text-[#e8b96a] text-lg max-w-2xl mx-auto mb-8">
          {totalCount} structured workbooks across Lean Thinking, Complexity
          Thinking, Distributed Leadership, and Team Science. Enter your email
          and we&apos;ll take you straight to the full library.
        </p>
        <button
          data-tally-open={TALLY_WORKBOOK_FORM}
          data-tally-overlay="1"
          className="inline-block bg-[#c9933a] hover:bg-[#e8b96a] text-white font-semibold py-3 px-8 rounded transition-colors duration-200 cursor-pointer"
        >
          Get instant access
        </button>
        <p className="mt-4 text-xs text-white/50">
          Free forever. No spam — just the workbooks and the occasional update.
        </p>
      </div>

      {/* What's inside (teaser — titles only, no downloads) */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#1a3848]">
            What&apos;s inside
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Every topic in The Flow System — yours the moment you sign up.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="mb-12">
            <div className="mb-5 border-b border-[#1a3848]/20 pb-3">
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#1a3848]">
                {section.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{section.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.workbooks.map((wb) => (
                <span
                  key={wb.file}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-[#1a3848]"
                >
                  {wb.title}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-4 text-center">
          <button
            data-tally-open={TALLY_WORKBOOK_FORM}
            data-tally-overlay="1"
            className="inline-block bg-[#1a3848] hover:bg-[#254d63] text-white font-semibold py-3 px-8 rounded transition-colors duration-200 cursor-pointer"
          >
            Get all {totalCount} workbooks
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#254d63] py-12 px-6 text-center">
        <h2 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-3">
          Want to go deeper?
        </h2>
        <p className="text-[#e8b96a] mb-6 max-w-xl mx-auto text-sm">
          The workbooks accompany The Flow System courses. Explore the training
          or speak with a coach about what&apos;s right for your team.
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
