import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/services/Header64";
import { Layout237 } from "@/components/services/Layout237";
import { Layout239 } from "@/components/services/Layout239";
import { Layout356 } from "@/components/services/Layout356";
import { Logo3 } from "@/components/services/Logo3";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "What We Do | LTP Consultants",
  description: "Explore LTP Consultants' team training and organizational development services.",
};

export default function ServicesPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Layout237 />
      <Layout239 />
      <Layout356 />
      <Logo3 />
      <Footer3 />
    </div>
  );
}
