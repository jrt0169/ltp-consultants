import { Navbar10 } from "@/components/shared/Navbar10";
import { TrainingHeader } from "@/components/training/TrainingHeader";
import { TrainingModules } from "@/components/training/TrainingModules";
import { TrainingJourney } from "@/components/training/TrainingJourney";
import { TrainingHowItWorks } from "@/components/training/TrainingHowItWorks";
import { TrainingPricing } from "@/components/training/TrainingPricing";
import { TrainingBooks } from "@/components/training/TrainingBooks";
import { TrainingCTA } from "@/components/training/TrainingCTA";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "The Flow System | PDN Training",
  description:
    "Self-paced Flow System training in Complexity Thinking, Distributed Leadership, and Team Science — 77 research-grounded modules, English and Spanish. Start free.",
  alternates: { canonical: "/training" },
  openGraph: {
    title: "The Flow System Training — 77 Microlearning Modules",
    description:
      "Self-paced team training across Complexity Thinking, Distributed Leadership, and Team Science. 77 modules, English and Español. Start free.",
    url: "https://pdnlearn.com/training",
  },
};

export default function TrainingPage() {
  return (
    <div>
      <Navbar10 />
      <TrainingHeader />
      <TrainingModules />
      <TrainingJourney />
      <TrainingHowItWorks />
      <TrainingPricing />
      <TrainingBooks />
      <TrainingCTA />
      <Footer3 />
    </div>
  );
}
