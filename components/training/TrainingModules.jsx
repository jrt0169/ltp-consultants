import React from "react";

const helixes = [
  {
    color: "#C73832",
    name: "Complexity Thinking",
    count: "27 modules",
    promise: "See the system. Make better decisions under uncertainty.",
    body: "Read a complex environment and act well when cause and effect aren’t obvious — the discipline most leadership training leaves out.",
    inside:
      "Cynefin, sensemaking, complex adaptive systems, weak-signal detection, the OODA loop, empirical process control.",
  },
  {
    color: "#345C8C",
    name: "Distributed Leadership",
    count: "25 modules",
    promise: "Lead without being the bottleneck.",
    body: "Push good decisions to the edges of the team and build the trust and clarity that lets people act without waiting for permission.",
    inside:
      "Psychological safety, shared mental models, leader’s intent, Wardley maps, coaching & mentoring, decision-making.",
  },
  {
    color: "#468C4B",
    name: "Team Science",
    count: "25 modules",
    promise: "Turn a group of people into a real team.",
    body: "The evidence base for how teams actually work, made practical across 13 topics and grounded in the 9 Cs of teamwork.",
    inside:
      "Teamwork training, human-centered design, team design, situational awareness, team learning, red teaming, multiteam systems.",
  },
];

export function TrainingModules() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-6 h-1 w-12 rounded bg-accent" />
          <h2 className="mb-6 font-display text-4xl font-bold md:text-6xl lg:text-7xl">
            The Triple Helix — three disciplines, one system
          </h2>
          <p className="mb-6 font-body text-lg leading-relaxed text-muted">
            Seventy-seven short modules — each with a video, knowledge checks,
            and a practical worksheet, captioned in English and Spanish. Three
            helixes, each a complete standalone program; together they form the
            whole Flow System. Most training teaches a single strand in
            isolation.
          </p>
          <p className="border-l-4 border-accent bg-surface py-4 pl-6 pr-4 font-display text-xl italic text-brand">
            Most training teaches one piece. The Flow System teaches how the
            pieces work together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {helixes.map((h) => (
            <div
              key={h.name}
              className="flex flex-col border-t-4 bg-surface p-6 md:p-8"
              style={{ borderTopColor: h.color }}
            >
              <span
                className="mb-4 inline-block w-max rounded-full px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-white"
                style={{ backgroundColor: h.color }}
              >
                {h.count}
              </span>
              <h3
                className="mb-2 font-display text-2xl font-bold"
                style={{ color: h.color }}
              >
                {h.name}
              </h3>
              <p className="mb-3 font-body font-semibold text-brand">
                {h.promise}
              </p>
              <p className="mb-4 font-body text-muted">{h.body}</p>
              <p className="mt-auto font-body text-sm text-muted">
                <span className="font-semibold text-brand">Inside:</span>{" "}
                {h.inside}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
