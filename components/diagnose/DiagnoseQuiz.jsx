"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

// Dedicated "Diagnostic Results" Tally form (tally.so/r/44ygrX). Opened via the
// Tally JS API so we can pass the person's result into its hidden fields
// (Domain / Gap) — both capitalisations sent so it works regardless of the
// exact field keys.
const TALLY_DIAGNOSE_FORM = "44ygrX";

// --- Part A: Cynefin domain (single-choice; each option maps to a domain) ---
const cynefinQuestions = [
  {
    q: "When a new problem lands, your team most often…",
    options: [
      { label: "Follows a proven procedure", domain: "clear" },
      { label: "Calls in an expert to analyze it", domain: "complicated" },
      { label: "Probes and experiments to see what works", domain: "complex" },
      { label: "Acts immediately to stop the bleeding", domain: "chaotic" },
    ],
  },
  {
    q: "Cause and effect in your work are…",
    options: [
      { label: "Obvious to everyone", domain: "clear" },
      { label: "Knowable with enough analysis", domain: "complicated" },
      { label: "Only clear in hindsight", domain: "complex" },
      { label: "Impossible to see in the moment", domain: "chaotic" },
    ],
  },
  {
    q: "“Best practices” in your world…",
    options: [
      { label: "Exist and work reliably", domain: "clear" },
      { label: "Exist but need expert tailoring", domain: "complicated" },
      { label: "Don’t exist — you need emergent practice", domain: "complex" },
      { label: "There’s no time for practice — you just respond", domain: "chaotic" },
    ],
  },
  {
    q: "The next quarter for your team is…",
    options: [
      { label: "Very predictable", domain: "clear" },
      { label: "Mostly predictable with planning", domain: "complicated" },
      { label: "Hard to predict — too many moving parts", domain: "complex" },
      { label: "Constant firefighting", domain: "chaotic" },
    ],
  },
];

// --- Part B: team health (agree scale 1-5); 2 per helix, lowest = biggest gap ---
const helixQuestions = [
  { statement: "We spot weak signals and adapt before problems blow up.", helix: "ct" },
  { statement: "We’re comfortable running small experiments instead of demanding certainty.", helix: "ct" },
  { statement: "People at every level feel safe to speak up and make decisions.", helix: "dl" },
  { statement: "Leadership is shared — we don’t bottleneck on one person.", helix: "dl" },
  { statement: "Our teams have shared goals, clear roles, and strong situational awareness.", helix: "ts" },
  { statement: "We deliberately build teamwork skills, not just technical skills.", helix: "ts" },
];

// --- Part C: next step (routes the service tier) ---
const tierQuestion = {
  q: "What feels like the right next step?",
  options: [
    { label: "I’ll start self-paced", tier: "self" },
    { label: "I want to coach my team through it", tier: "coaching" },
    { label: "I need help across the organisation", tier: "consulting" },
  ],
};

const domainCopy = {
  clear: {
    name: "Clear",
    blurb:
      "Your work is largely ordered and predictable today — but complexity is coming for every team. The Flow System helps you get ahead of it before it arrives.",
  },
  complicated: {
    name: "Complicated",
    blurb:
      "You rely on expertise and analysis — which works until the environment shifts under you. The Flow System adds the complexity tools that expertise alone can’t cover.",
  },
  complex: {
    name: "Complex",
    blurb:
      "You’re operating in exactly the environment The Flow System was built for — where you probe, sense, and respond rather than follow a recipe.",
  },
  chaotic: {
    name: "Chaotic",
    blurb:
      "You’re firefighting. The immediate job is to establish stability — then build the distributed leadership and sensing that stop the fires starting.",
  },
};

const helixCopy = {
  ct: {
    name: "Complexity Thinking",
    color: "#C73832",
    gap: "Your team’s biggest opportunity is reading and responding to complexity — sensing weak signals and experimenting instead of demanding certainty.",
    startModule: "Cynefin Framework",
    workbook: "Cynefin Framework",
  },
  dl: {
    name: "Distributed Leadership",
    color: "#345C8C",
    gap: "Your team’s biggest opportunity is how leadership is shared — psychological safety and decisions that don’t bottleneck on one person.",
    startModule: "Psychological Safety",
    workbook: "Psychological Safety",
  },
  ts: {
    name: "Team Science",
    color: "#468C4B",
    gap: "Your team’s biggest opportunity is the science of teaming — shared goals, clear roles, situational awareness, and deliberate teamwork skills.",
    startModule: "Team Effectiveness",
    workbook: "Team Effectiveness",
  },
};

const tierCta = {
  self: { label: "Explore the training", href: "/training" },
  coaching: { label: "Talk about coaching", href: "/contact/book-a-consultation" },
  consulting: { label: "See consulting options", href: "/services/what-we-do" },
};

const domainOrder = ["chaotic", "complex", "complicated", "clear"]; // tie-break toward complexity
const helixOrder = ["ct", "dl", "ts"];

export default function DiagnoseQuiz() {
  // step: 0..(N-1) questions, then "result"
  const questions = useMemo(
    () => [
      ...cynefinQuestions.map((c) => ({ type: "cynefin", ...c })),
      ...helixQuestions.map((h) => ({ type: "helix", ...h })),
      { type: "tier", ...tierQuestion },
    ],
    []
  );
  const total = questions.length;

  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [cynefin, setCynefin] = useState({}); // index -> domain
  const [helix, setHelix] = useState({}); // index -> 1..5
  const [tier, setTier] = useState(null);
  const [done, setDone] = useState(false);

  const result = useMemo(() => {
    if (!done) return null;
    // dominant domain
    const counts = {};
    Object.values(cynefin).forEach((d) => (counts[d] = (counts[d] || 0) + 1));
    let domain = domainOrder.find((d) => counts[d]) || "complex";
    let best = -1;
    domainOrder.forEach((d) => {
      if ((counts[d] || 0) > best) {
        best = counts[d] || 0;
        domain = d;
      }
    });
    // lowest helix
    const sums = { ct: 0, dl: 0, ts: 0 };
    helixQuestions.forEach((hq, i) => {
      sums[hq.helix] += helix[i + cynefinQuestions.length] || 0;
    });
    let gap = helixOrder[0];
    let low = Infinity;
    helixOrder.forEach((h) => {
      if (sums[h] < low) {
        low = sums[h];
        gap = h;
      }
    });
    return { domain, gap, tier: tier || "self" };
  }, [done, cynefin, helix, tier]);

  const answeredCurrent = () => {
    const qi = step;
    const q = questions[qi];
    if (q.type === "cynefin") return cynefin[qi] != null;
    if (q.type === "helix") return helix[qi] != null;
    if (q.type === "tier") return tier != null;
    return false;
  };

  const goNext = () => {
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  };
  const goBack = () => {
    if (done) setDone(false);
    else if (step > 0) setStep(step - 1);
  };

  // ---------- Intro ----------
  if (!started) {
    return (
      <section className="bg-brand px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container max-w-2xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Diagnose your team
          </p>
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Where does your team actually stand?
          </h1>
          <p className="mb-10 font-body text-lg leading-relaxed text-white/75">
            Eleven quick questions. In two minutes you&apos;ll see the kind of
            environment your team is operating in, the single biggest gap holding
            it back, and the right first step in The Flow System.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-lt"
          >
            Start the diagnostic <span aria-hidden="true">{"→"}</span>
          </button>
        </div>
      </section>
    );
  }

  // ---------- Result ----------
  if (done && result) {
    const d = domainCopy[result.domain];
    const h = helixCopy[result.gap];
    const cta = tierCta[result.tier];
    const openRoadmap = () => {
      if (typeof window === "undefined") return;
      const hf = { Domain: d.name, Gap: h.name, domain: d.name, gap: h.name };
      if (window.Tally && window.Tally.openPopup) {
        window.Tally.openPopup(TALLY_DIAGNOSE_FORM, {
          layout: "modal",
          width: 540,
          hiddenFields: hf,
        });
      } else {
        const qs = new URLSearchParams(hf).toString();
        window.open(`https://tally.so/r/${TALLY_DIAGNOSE_FORM}?${qs}`, "_blank", "noopener");
      }
    };
    return (
      <section className="bg-brand px-[5%] py-20 md:py-28 lg:py-32">
        <div className="container max-w-3xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Your result
          </p>

          <h1 className="mb-4 font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            Your team is operating in a{" "}
            <span className="text-accent-lt">{d.name}</span> environment.
          </h1>
          <p className="mb-10 font-body text-lg leading-relaxed text-white/75">
            {d.blurb}
          </p>

          <div className="mb-8 rounded-sm bg-brand-mid p-8">
            <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Biggest opportunity
            </p>
            <div className="mb-4 flex items-center gap-3">
              <span
                className="inline-block h-4 w-4 rounded-full"
                style={{ backgroundColor: h.color }}
                aria-hidden="true"
              />
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                {h.name}
              </h2>
            </div>
            <p className="mb-6 font-body leading-relaxed text-white/75">{h.gap}</p>
            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <p className="font-body text-sm text-white/80">
                Start with the{" "}
                <span className="font-semibold text-white">{h.startModule}</span>{" "}
                module.
              </p>
              <Link
                href="/resources/workbooks"
                className="font-body text-sm font-semibold text-accent-lt underline underline-offset-2 hover:text-accent"
              >
                Get the free {h.workbook} workbook {"→"}
              </Link>
            </div>
          </div>

          {/* Email capture — full path */}
          <div className="mb-10 rounded-sm border border-white/15 bg-brand p-8">
            <h3 className="mb-2 font-display text-xl font-semibold text-white">
              Get your full learning path
            </h3>
            <p className="mb-5 font-body text-sm leading-relaxed text-white/70">
              We&apos;ll email a personalised roadmap through The Flow System
              based on your result — the modules, workbooks, and next step for
              your team.
            </p>
            <button
              onClick={openRoadmap}
              className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-lt"
            >
              Email me my roadmap
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-3 rounded-sm bg-white px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-brand transition-all hover:bg-white/90"
            >
              {cta.label} <span aria-hidden="true">{"→"}</span>
            </Link>
            <button
              onClick={() => {
                setStarted(false);
                setStep(0);
                setCynefin({});
                setHelix({});
                setTier(null);
                setDone(false);
              }}
              className="font-body text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            >
              Retake
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ---------- Questions ----------
  const q = questions[step];
  const pct = Math.round((step / total) * 100);

  return (
    <section className="bg-surface px-[5%] py-16 md:py-24">
      <div className="container max-w-2xl">
        {/* Progress */}
        <div className="mb-10">
          <div className="mb-3 flex items-center justify-between font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            <span>
              Question {step + 1} of {total}
            </span>
            <span>{pct}%</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded bg-line">
            <div
              className="h-full rounded bg-accent transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <h2 className="mb-8 font-display text-2xl font-bold leading-snug text-brand md:text-3xl">
          {q.type === "helix" ? q.statement : q.q}
        </h2>

        {/* Cynefin / tier: single-choice cards */}
        {(q.type === "cynefin" || q.type === "tier") && (
          <div className="flex flex-col gap-3">
            {q.options.map((opt, oi) => {
              const selected =
                q.type === "cynefin" ? cynefin[step] === opt.domain : tier === opt.tier;
              return (
                <button
                  key={oi}
                  onClick={() => {
                    if (q.type === "cynefin")
                      setCynefin({ ...cynefin, [step]: opt.domain });
                    else setTier(opt.tier);
                  }}
                  className={`rounded-sm border p-5 text-left font-body text-base transition-all ${
                    selected
                      ? "border-brand bg-brand text-white"
                      : "border-line bg-white text-brand hover:border-accent"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Helix: 1-5 agree scale */}
        {q.type === "helix" && (
          <div>
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {[1, 2, 3, 4, 5].map((v) => {
                const selected = helix[step] === v;
                return (
                  <button
                    key={v}
                    onClick={() => setHelix({ ...helix, [step]: v })}
                    className={`flex h-16 items-center justify-center rounded-sm border font-display text-xl font-bold transition-all ${
                      selected
                        ? "border-brand bg-brand text-white"
                        : "border-line bg-white text-brand hover:border-accent"
                    }`}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
            <div className="mt-2 flex justify-between font-body text-xs text-muted">
              <span>Strongly disagree</span>
              <span>Strongly agree</span>
            </div>
          </div>
        )}

        {/* Nav */}
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={goBack}
            disabled={step === 0}
            className="font-body text-sm font-semibold uppercase tracking-widest text-muted transition-colors hover:text-brand disabled:opacity-30"
          >
            {"←"} Back
          </button>
          <button
            onClick={goNext}
            disabled={!answeredCurrent()}
            className="inline-flex items-center gap-3 rounded-sm bg-brand px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-mid disabled:cursor-not-allowed disabled:opacity-40"
          >
            {step === total - 1 ? "See my result" : "Next"}{" "}
            <span aria-hidden="true">{"→"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
