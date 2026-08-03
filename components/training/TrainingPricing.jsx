import React from "react";

const rows = [
  ["Start Here — guided tour", "Free", "Ongoing"],
  ["Single module", "from $29", "6 months"],
  ["Starter bundle — Complexity Thinking (modules 1–3)", "$89", "6 months"],
  ["Starter bundle — Distributed Leadership / Team Science (modules 1–2)", "$59", "6 months"],
  ["Full helix (25–27 modules)", "$299", "1 year"],
];

export function TrainingPricing() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-4xl">
        <div className="mb-10 max-w-3xl">
          <div className="mb-6 h-1 w-12 rounded bg-accent" />
          <h2 className="mb-6 font-display text-4xl font-bold md:text-6xl">
            Pricing &amp; access
          </h2>
          <p className="font-body text-lg leading-relaxed text-muted">
            The full paid catalog is{" "}
            <strong className="text-brand">now available</strong> — all 77
            modules and bundles, from single modules to the Complete Flow
            System. Introductory pricing is live at checkout for a limited time.
            Start free with the guided tour, or enroll today.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left font-body">
            <thead>
              <tr className="bg-brand text-white">
                <th className="p-3 text-sm font-semibold">Option</th>
                <th className="p-3 text-sm font-semibold">Price</th>
                <th className="p-3 text-sm font-semibold">Access</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r[0]} className={i % 2 === 1 ? "bg-surface" : "bg-transparent"}>
                  <td className="border-b border-line p-3 text-sm">{r[0]}</td>
                  <td className="border-b border-line p-3 text-sm">{r[1]}</td>
                  <td className="border-b border-line p-3 text-sm">{r[2]}</td>
                </tr>
              ))}
              <tr className="bg-surface">
                <td className="border-b border-line p-3 text-sm font-semibold text-brand">
                  The Complete Flow System — all 77 modules
                </td>
                <td className="border-b border-line p-3 text-sm font-semibold">
                  $799 flat
                </td>
                <td className="border-b border-line p-3 text-sm">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-body text-sm text-muted">
          The Complete Flow System includes a{" "}
          <strong className="text-brand">14-day money-back guarantee</strong>.
          Introductory pricing is available at checkout for a limited time.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://pdn.thinkific.com/courses/start-here-the-flow-system"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-accent-lt hover:shadow-lg"
          >
            Start Free — Take the Guided Tour
          </a>
          <a
            href="https://pdn.thinkific.com/collections"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm border border-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-brand transition-all duration-200 hover:bg-brand hover:text-white"
          >
            Browse the Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
