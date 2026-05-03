import { Navbar10 } from "@/components/shared/Navbar10";
import { TrainingHeader } from "@/components/training/TrainingHeader";
import { TrainingModules } from "@/components/training/TrainingModules";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "The Flow System | PDN Training",
  description: "PDN's evidence-based online training framework. Four modules covering Lean Thinking, Complexity Thinking, Distributed Leadership, and Team Science.",
};

export default function TrainingPage() {
  return (
    <div>
      <Navbar10 />
      <TrainingHeader />
      <TrainingModules />
      <Footer3 />
    </div>
  );
}
