"use client";

import React from "react";

const people = [
  {
    initials: "JT",
    name: "Dr. John R. Turner",
    role: "Co-creator, The Flow System",
    bio: "John is an Associate Professor at Texas A&M University, where he chairs the EHRD program in the Department of Educational Administration and Human Resource Development. Co-creator of The Flow System and co-author of its books, he has published over 100 articles and book chapters, and co-founded The Flow Consortium and Performance Development Network. His research spans complexity thinking, distributed leadership, decision-making, and team science.",
  },
  {
    initials: "NT",
    name: "Nigel Thurlow",
    role: "Co-creator, The Flow System",
    bio: "Nigel is a co-creator of The Flow System and the creator of Scrum The Toyota Way. As the world's first Chief of Agile at Toyota, he led enterprise transformation at scale, and today helps organisations adopt complexity-aware ways of working — bringing the delivery experience that keeps the framework practical.",
  },
];

export function Team() {
  return (
    <section className="bg-surface px-[5%] py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="mb-14 max-w-xl lg:mb-16">
          <div className="mb-6 h-1 w-10 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            The people behind it
          </p>
          <h2 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">
            Authors of the framework
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {people.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-sm border border-line bg-white p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                  {p.initials}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight">
                    {p.name}
                  </h3>
                  <p className="font-body text-sm text-accent">{p.role}</p>
                </div>
              </div>
              <p className="font-body text-sm leading-relaxed text-muted">
                {p.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
