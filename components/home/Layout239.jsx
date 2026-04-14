"use client";

import Link from "next/link";
import React from "react";

const features = [
  {
    imgId: "card-evidence-img",
    imgSrc: "https://tempfile.aiquickdraw.com/image-format-converter/1776175404968-k3j65h2l8b.jpg",
    imgAlt: "Evidence-based research methodology",
    title: "Evidence-based interventions",
    body: "Every tool and technique is grounded in peer-reviewed research and validated in the field. We measure what matters.",
  },
  {
    imgId: "card-facilitators-img",
    imgSrc: "https://tempfile.aiquickdraw.com/image-format-converter/1776175432423-dvi1fimwv5.jpg",
    imgAlt: "Senior executive facilitator leading workshop",
    title: "Senior-level facilitators",
    body: "Our team brings decades of experience in organisational psychology and executive coaching at the highest level.",
  },
  {
    imgId: "card-customized-img",
    imgSrc: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    imgAlt: "Flexible hybrid team training delivery",
    title: "Customised delivery",
    body: "In-person, virtual, or hybrid — designed to fit your organisation's needs, culture, and operational constraints.",
  },
];

export function Layout239() {
  return (
    <section className="bg-brand px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="mb-14 max-w-xl lg:mb-16">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Why LTP
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            What separates us from the rest
          </h2>
          <p className="font-body leading-relaxed text-white/70">
            LTP Consultants brings a rare combination of rigorous methodology,
            deep expertise, and a relentless focus on measurable outcomes.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.imgId}
              className="group flex flex-col overflow-hidden rounded-sm bg-brand-mid"
            >
              <div className="overflow-hidden">
                <img
                  id={f.imgId}
                  src={f.imgSrc}
                  alt={f.imgAlt}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="mb-3 font-display text-xl font-semibold text-white lg:text-2xl">
                  {f.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-white/70">
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            href="/contact/book-a-consultation"
            className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-accent-lt"
          >
            Get started
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            Meet our team <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
