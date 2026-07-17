import { Navbar10 } from "@/components/shared/Navbar10";
import ResearchPage from "@/components/research/ResearchPage";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Research & Evidence | Performance Development Network",
  description: "The peer-reviewed research behind The Flow System — complexity science, distributed leadership, and Team Science. See the evidence for yourself.",
};

export default function ResearchRoute() {
  return (
    <div>
      <Navbar10 />
      <ResearchPage />
      <Footer3 />
    </div>
  );
}
