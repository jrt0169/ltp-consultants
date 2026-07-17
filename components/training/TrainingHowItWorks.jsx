import React from "react";

const features = [
  {
    title: "Research-grounded",
    body: "Built on published systematic reviews and field-tested frameworks.",
  },
  {
    title: "Microlearning",
    body: "Modules run 25–40 minutes: a core video, two knowledge checks, and a practical worksheet. Designed for a lunch break, not a week off work.",
  },
  {
    title: "Bilingual",
    body: "Every module is captioned in English and Spanish.",
  },
  {
    title: "Buy how you like",
    body: "Take a single module, a starter bundle, a full helix, or the complete system.",
  },
];

export function TrainingHowItWorks() {
  return (
    <section className="bg-surface px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-3xl">
          <div className="mb-6 h-1 w-12 rounded bg-accent" />
          <h2 className="font-display text-4xl font-bold md:text-6xl">
            How the training is built
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className="border-t border-line pt-6">
              <p className="mb-3 font-display text-2xl font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-2 font-body text-lg font-semibold text-brand">
                {f.title}
              </h3>
              <p className="font-body text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
