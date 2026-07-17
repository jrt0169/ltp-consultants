import { Navbar10 } from "@/components/shared/Navbar10";
import WorkbooksLibrary from "@/components/resources/WorkbooksLibrary";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Workbook Library | PDN",
  description: "Download all 39 free Flow System workbooks — Lean Thinking, Complexity Thinking, Distributed Leadership, and Team Science.",
  robots: { index: false, follow: false },
};

export default function WorkbooksLibraryRoute() {
  return (
    <div>
      <Navbar10 />
      <WorkbooksLibrary />
      <Footer3 />
    </div>
  );
}
