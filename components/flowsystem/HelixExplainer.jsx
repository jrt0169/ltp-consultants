"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";

const STRANDS = [
  { key: "ct", name: "Complexity Thinking", color: "#C73832" },
  { key: "dl", name: "Distributed Leadership", color: "#345C8C" },
  { key: "ts", name: "Team Science", color: "#468C4B" },
];

const STEPS = [
  {
    eyebrow: "Read the environment",
    title: "Complexity Thinking",
    body: "Sense the environment before you act. Cynefin, weak-signal detection, and small experiments replace the illusion of certainty with the ability to adapt.",
    focus: "ct",
  },
  {
    eyebrow: "How people lead",
    title: "Distributed Leadership",
    body: "Leadership as a behaviour, not a title. Psychological safety, shared intent, and decisions that don't bottleneck on one person.",
    focus: "dl",
  },
  {
    eyebrow: "The evidence",
    title: "Team Science",
    body: "The peer-reviewed science of how teams actually work — shared goals, clear roles, situational awareness — the ground truth beneath the whole system.",
    focus: "ts",
  },
  {
    eyebrow: "One system",
    title: "The Triple Helix",
    body: "Alone, each discipline is only a piece. Woven together they become a single operating system for how teams work in complexity — that integration is what nobody else offers.",
    focus: "all",
  },
];

const H = 620; // svg height
const CX = 200;
const AMP = 92;
const K = 0.036;

function strandPath(phase) {
  let d = "";
  for (let y = 0; y <= H; y += 8) {
    const x = CX + AMP * Math.sin(y * K + phase);
    d += (y === 0 ? "M" : "L") + x.toFixed(1) + " " + y + " ";
  }
  return d.trim();
}

export function HelixExplainer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [step, setStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(STEPS.length - 1, Math.floor(v * STEPS.length));
    setStep(i);
  });

  const paths = useMemo(
    () => STRANDS.map((s, i) => ({ ...s, d: strandPath((i * 2 * Math.PI) / 3) })),
    []
  );

  const focus = STEPS[step].focus;
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section ref={ref} className="relative bg-brand" style={{ height: "400vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-[5%]">
        <div className="container grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Helix */}
          <div className="order-last flex justify-center lg:order-first">
            <motion.svg
              viewBox={`0 0 400 ${H}`}
              className="h-[60vh] max-h-[620px] w-auto"
              style={{ rotate }}
              aria-hidden="true"
            >
              {paths.map((p) => {
                const active = focus === "all" || focus === p.key;
                return (
                  <motion.path
                    key={p.key}
                    d={p.d}
                    fill="none"
                    stroke={p.color}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: active ? 1 : 0.18,
                      strokeWidth: active ? 6 : 3,
                    }}
                    transition={{
                      pathLength: { duration: 1.4, ease: "easeInOut" },
                      opacity: { duration: 0.5 },
                      strokeWidth: { duration: 0.5 },
                    }}
                  />
                );
              })}
            </motion.svg>
          </div>

          {/* Captions */}
          <div className="relative min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="mb-6 h-1 w-12 rounded"
                  style={{
                    backgroundColor:
                      focus === "all"
                        ? "#C9933A"
                        : STRANDS.find((s) => s.key === focus)?.color,
                  }}
                />
                <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  {STEPS[step].eyebrow}
                </p>
                <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  {STEPS[step].title}
                </h2>
                <p className="max-w-md font-body text-lg leading-relaxed text-white/75">
                  {STEPS[step].body}
                </p>

                {STEPS[step].focus === "all" && (
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/training"
                      className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-lt"
                    >
                      Explore the training <span aria-hidden="true">{"→"}</span>
                    </Link>
                    <Link
                      href="/diagnose"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                    >
                      Diagnose your team
                    </Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Step dots */}
            <div className="mt-10 flex gap-2">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step ? "w-8 bg-accent" : "w-4 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
