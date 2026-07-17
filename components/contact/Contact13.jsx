"use client";

import React from "react";
import { BiCalendar, BiEnvelope, BiSupport } from "react-icons/bi";

const contactItems = [
  {
    icon: BiEnvelope,
    label: "Email",
    sub: "General enquiries",
    value: "john.turner@pdnlearn.com",
    href: "mailto:john.turner@pdnlearn.com",
  },
  {
    icon: BiSupport,
    label: "Support",
    sub: "Course & training help",
    value: "support@getflowtrained.com",
    href: "mailto:support@getflowtrained.com",
  },
  {
    icon: BiCalendar,
    label: "Book a call",
    sub: "30-minute discovery call",
    value: "Schedule a time",
    cal: true,
  },
];

export function Contact13() {
  return (
    <section className="bg-surface px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-xl">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Connect
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Get in touch
          </h2>
          <p className="mt-4 font-body text-muted">
            We respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="rounded-sm border border-line bg-white p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-brand">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mb-1 font-body text-base font-semibold text-brand">
                {item.label}
              </h3>
              <p className="mb-3 font-body text-sm text-muted">{item.sub}</p>
              {item.cal ? (
                <button
                  data-cal-link="john-turner-edmqah/discovery-call"
                  data-cal-namespace="discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="font-body text-sm font-semibold text-brand underline underline-offset-2 hover:text-accent"
                >
                  {item.value}
                </button>
              ) : (
                <a
                  href={item.href}
                  className="font-body text-sm font-semibold text-brand underline underline-offset-2 hover:text-accent"
                >
                  {item.value}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
