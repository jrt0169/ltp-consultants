import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/results/Header64";
import { Logo3 } from "@/components/results/Logo3";
import { Stats19 } from "@/components/results/Stats19";
import { Blog34 } from "@/components/results/Blog34";
import { Testimonial3 } from "@/components/results/Testimonial3";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Case Studies | LTP Consultants",
  description: "See real results from LTP Consultants' team training programs.",
};

export default function ResultsPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Logo3 />
      <Stats19 />
      <Blog34 />
      <Testimonial3 />
      <Footer3 />
    </div>
  );
}
