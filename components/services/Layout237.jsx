"use client";
import Link from "next/link";
import React from "react";

const services = [
  {
    number: "01",
    title: "Online Training",
    description:
      "Self-paced learning built on The Flow System framework. Work through four evidence-based modules at your own pace, with options to add live coaching and community support.",
    link: "/training",
    linkText: "Explore The Flow System",
  },
  {
    number: "02",
    title: "Live Virtual Programs",
    description:
      "Flexible formats that work across distributed teams without sacrificing depth or accountability. Designed to fit your calendar and your team's reality.",
    link: "/contact/book-a-consultation",
    linkText: "Book a consultation",
  },
  {
    number: "03",
    title: "In-Person Workshops",
    description:
      "Intensive, multi-day sessions that create immediate alignment and shift behaviour in real time. Delivered at your location or a venue of your choice.",
    link: "/contact/book-a-consultation",
    linkText: "Book a consultation",
  },
  {
    number: "04",
    title: "Coaching & Consulting",
    description:
      "Executive coaching and organisational consulting for leaders and teams navigating change, complexity, and performance challenges.",
    link: "/contact/book-a-consultation",
    linkText: "Book a consultation",
  },
];

export function Layout237() {
  return (
    <section className="px-[5%] py-24 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4">Delivery</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Four ways to work with PDN
            </h2>
            <p className="md:text-md">
              PDN meets you where you are. Every engagement is designed to fit
              your schedule, your team, and your goals.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-14">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="rb-5 mb-5 md:mb-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">
                    {s.number}
                  </p>
                </div>
                <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3]">
                  {s.title}
                </h3>
                <p className="mb-6">{s.description}</p>
                <Link
                  href={s.link}
                  className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
                >
                  {s.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
