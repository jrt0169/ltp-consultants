import { Navbar10 } from "@/components/shared/Navbar10";
import { HelixExplainer } from "@/components/flowsystem/HelixExplainer";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "The Flow System | Performance Development Network",
  description: "The Triple Helix — how Complexity Thinking, Distributed Leadership, and Team Science weave into one operating system for teams.",
};

export default function FlowSystemPage() {
  return (
    <div>
      <Navbar10 />

      {/* Intro hero */}
      <section className="bg-brand px-[5%] pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container max-w-3xl">
          <div className="mb-8 h-1 w-12 rounded bg-accent" />
          <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            The framework
          </p>
          <h1 className="mb-8 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            Three disciplines. <br />
            <span className="text-accent-lt">One system.</span>
          </h1>
          <p className="max-w-xl font-body text-lg leading-relaxed text-white/75">
            Everyone else teaches one piece in isolation. The Flow System weaves
            Complexity Thinking, Distributed Leadership, and Team Science into a
            single operating system for how teams work. Scroll to see how they
            fit together.
          </p>
          <p className="mt-10 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Scroll to explore {"↓"}
          </p>
        </div>
      </section>

      <HelixExplainer />

      <Footer3 />
    </div>
  );
}
