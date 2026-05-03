import { Navbar10 } from "@/components/shared/Navbar10";
import { WorkbooksPage } from "@/components/resources/WorkbooksPage";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "TFS Playbook Workbooks | PDN",
  description: "Downloadable workbooks for every topic covered in The Flow System Playbook — Lean Thinking, Complexity Thinking, Distributed Leadership, and Team Science.",
};

export default function WorkbooksRoute() {
  return (
    <div>
      <Navbar10 />
      <WorkbooksPage />
      <Footer3 />
    </div>
  );
}
