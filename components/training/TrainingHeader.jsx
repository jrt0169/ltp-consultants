"use client";
import Link from "next/link";
import React from "react";

export function TrainingHeader() {
  return (
    <section className="bg-brand px-[5%] py-24 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-start max-w-2xl">
          <p className="mb-3 font-semibold text-accent md:mb-4">Online Training</p>
          <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
            The Flow System
          </h1>
          <p className="text-white/80 md:text-md mb-8">
            PDN's evidence-based online learning framework. Four modules built on Lean Thinking,
            Complexity Thinking, Distributed Leadership, and Team Science — designed for leaders
            and teams navigating change and complexity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://pdn.thinkific.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Browse Courses
            </a>
            <Link
              href="/contact/book-a-consultation"
              className="inline-flex items-center justify-center border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-brand transition-colors"
            >
              Talk to us first
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
