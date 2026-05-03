import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/services/Header64";
import { Layout237 } from "@/components/services/Layout237";
import { Layout239 } from "@/components/services/Layout239";
import { Layout356 } from "@/components/services/Layout356";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Our Services | PDN",
  description: "Four ways to work with PDN: online training, live virtual programs, in-person workshops, and coaching & consulting.",
};

export default function ServicesPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Layout237 />
      <Layout239 />
      <Layout356 />
      <Footer3 />
    </div>
  );
}
