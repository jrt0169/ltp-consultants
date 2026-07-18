import { Navbar10 } from "@/components/shared/Navbar10";
import { Header145 } from "@/components/home/Header145";
import { Layout237 } from "@/components/home/Layout237";
import { Layout4 } from "@/components/home/Layout4";
import { FrontDoors } from "@/components/shared/FrontDoors";
import { Endorsements } from "@/components/shared/Endorsements";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div>
      <Navbar10 />
      <Header145 />
      <Layout237 />
      <Layout4 />
      <Endorsements />
      <FrontDoors />
      <Footer3 />
    </div>
  );
}
