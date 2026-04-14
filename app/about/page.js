import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/about/Header64";
import { Stats20 } from "@/components/about/Stats20";
import { Logo3 } from "@/components/about/Logo3";
import { Logo4 } from "@/components/about/Logo4";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "About Us | LTP Consultants",
  description: "Learn about LTP Consultants and our team of organizational training experts.",
};

export default function AboutPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Stats20 />
      <Logo3 />
      <Logo4 />
      <Footer3 />
    </div>
  );
}
