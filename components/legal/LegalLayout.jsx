import { Navbar10 } from "@/components/shared/Navbar10";
import { Footer3 } from "@/components/shared/Footer3";
import React from "react";

export function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div>
      <Navbar10 />

      <section className="bg-brand px-[5%] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container max-w-3xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Legal
          </p>
          <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="font-body text-sm text-white/60">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      <section className="px-[5%] py-16 md:py-24">
        <div className="container max-w-3xl">{children}</div>
      </section>

      <Footer3 />
    </div>
  );
}

export function H2({ children }) {
  return (
    <h2 className="mb-4 mt-12 font-display text-2xl font-bold text-brand first:mt-0 md:text-3xl">
      {children}
    </h2>
  );
}

export function P({ children }) {
  return (
    <p className="mb-4 font-body leading-relaxed text-muted">{children}</p>
  );
}

export function UL({ children }) {
  return (
    <ul className="mb-4 flex flex-col gap-2 font-body leading-relaxed text-muted">
      {children}
    </ul>
  );
}

export function LI({ children }) {
  return (
    <li className="flex gap-3">
      <span aria-hidden="true" className="mt-0.5 text-accent">
        &mdash;
      </span>
      <span>{children}</span>
    </li>
  );
}

export function Mail({ address }) {
  return (
    <a
      href={`mailto:${address}`}
      className="font-semibold text-brand underline underline-offset-2 hover:text-accent"
    >
      {address}
    </a>
  );
}
