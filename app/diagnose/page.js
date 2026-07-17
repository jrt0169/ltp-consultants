import { Navbar10 } from "@/components/shared/Navbar10";
import DiagnoseQuiz from "@/components/diagnose/DiagnoseQuiz";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Diagnose Your Team | Performance Development Network",
  description: "A two-minute diagnostic: find the environment your team is operating in, its biggest gap, and the right first step in The Flow System.",
};

export default function DiagnoseRoute() {
  return (
    <div>
      <Navbar10 />
      <DiagnoseQuiz />
      <Footer3 />
    </div>
  );
}
