import { Navbar10 } from "@/components/shared/Navbar10";
import { TrainingHeader } from "@/components/training/TrainingHeader";
import { TrainingModules } from "@/components/training/TrainingModules";
import { TrainingHowItWorks } from "@/components/training/TrainingHowItWorks";
import { TrainingPricing } from "@/components/training/TrainingPricing";
import { TrainingBooks } from "@/components/training/TrainingBooks";
import { TrainingCTA } from "@/components/training/TrainingCTA";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "The Flow System | PDN Training",
  description:
    "Self-paced Flow System training in Complexity Thinking, Distributed Leadership, and Team Science — 77 research-grounded modules, English and Spanish. Start free.",
};

export default function TrainingPage() {
  return (
    <div>
      <Navbar10 />
      <TrainingHeader />
      <TrainingModules />
      <TrainingHowItWorks />
      <TrainingPricing />
      <TrainingBooks />
      <TrainingCTA />
      <Footer3 />
    </div>
  );
}
