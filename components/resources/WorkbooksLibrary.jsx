"use client";
import React from "react";
import { sections } from "./workbooksData";

const enc = (name) => "/workbooks/" + encodeURIComponent(name);

export default function WorkbooksLibrary() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1a3848] py-16 px-6 text-center">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#e8b96a]">
          You&apos;re in
        </div>
        <h1 className="font-['Playfair_Display'] text-4xl font-bold text-white mb-4">
          The Workbook Library
        </h1>
        <p className="text-[#e8b96a] text-lg max-w-2xl mx-auto">
          All 39 Flow System workbooks. Download any of them below — and bookmark
          this page so you can come back for the rest.
        </p>
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
          These workbooks accompany The Flow System courses. Explore our training
          options or speak with a coach about what&apos;s right for your team.
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
