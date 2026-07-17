import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/results/Header64";
import { Provenance } from "@/components/results/Provenance";
import { Endorsements } from "@/components/shared/Endorsements";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Evidence Base | Performance Development Network",
  description: "The research and expert endorsement behind The Flow System and PDN's training.",
};

export default function ResultsPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Provenance />
      <Endorsements />
      <Footer3 />
    </div>
  );
}
