import { Navbar10 } from "@/components/shared/Navbar10";
import { Continuum } from "@/components/ways/Continuum";
import { Chooser } from "@/components/ways/Chooser";
import { FrontDoors } from "@/components/shared/FrontDoors";
import { Footer3 } from "@/components/shared/Footer3";
import Link from "next/link";

export const metadata = {
  title: "Ways to Work With Us | Performance Development Network",
  description: "Learn it yourself, coach your team through it, or bring us in. One integrated system — self-paced training, coaching cohorts, and on-site consulting.",
};

export default function WaysToWorkPage() {
  return (
    <div>
      <Navbar10 />

      {/* Hero */}
      <section className="bg-brand px-[5%] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container max-w-3xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Ways to work with us
          </p>
          <h1 className="mb-8 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            Wherever you are, <br />
            <span className="text-accent-lt">there&apos;s a way in</span>
          </h1>
          <p className="max-w-xl font-body text-lg leading-relaxed text-white/75">
            Learn it yourself, coach your team through it, or bring us in. One
            integrated system, delivered at the depth you need — and three free
            ways to start.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/diagnose"
              className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-lt"
            >
              Not sure? Diagnose your team <span aria-hidden="true">{"→"}</span>
            </Link>
          </div>
        </div>
      </section>

      <Continuum />
      <Chooser />
      <FrontDoors />

      {/* Closing CTA */}
      <section className="bg-brand px-[5%] py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
            Still weighing it up?
          </h2>
          <p className="mx-auto mb-10 max-w-xl font-body text-lg leading-relaxed text-white/75">
            Book a 30-minute call and we&apos;ll help you find the right way in
            for your team.
          </p>
          <Link
            href="/contact/book-a-consultation"
            className="inline-flex items-center gap-3 rounded-sm bg-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-accent-lt"
          >
            Book a consultation <span aria-hidden="true">{"→"}</span>
          </Link>
        </div>
      </section>

      <Footer3 />
    </div>
  );
}
