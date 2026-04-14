"use client";

import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const contactItems = [
  {
    icon: BiEnvelope,
    label: "Email",
    sub: "Reach us directly",
    value: "hello@ltpconsultants.com",
    href: "mailto:hello@ltpconsultants.com",
  },
  {
    icon: BiPhone,
    label: "Phone",
    sub: "Call our team",
    value: "+1 (844) 587-2900",
    href: "tel:+18445872900",
  },
  {
    icon: BiMap,
    label: "Office",
    sub: "1875 Connecticut Avenue NW",
    value: "Washington, DC 20009",
    href: "https://maps.google.com",
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
            Our team responds within one business day.
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
              <a
                href={item.href}
                className="font-body text-sm font-semibold text-brand underline underline-offset-2 hover:text-accent"
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
