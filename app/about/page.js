import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/about/Header64";
import { Story } from "@/components/about/Story";
import { Team } from "@/components/about/Team";
import { Logo4 } from "@/components/about/Logo4";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "About Us | Performance Development Network",
  description: "The story behind Performance Development Network and The Flow System — the integrated framework, its research base, and the people who built it.",
};

export default function AboutPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Story />
      <Team />
      <Logo4 />
      <Footer3 />
    </div>
  );
}
