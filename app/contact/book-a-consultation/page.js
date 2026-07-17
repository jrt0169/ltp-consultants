import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/contact/Header64";
import { Contact13 } from "@/components/contact/Contact13";
import { Contact7 } from "@/components/contact/Contact7";
import { Endorsements } from "@/components/shared/Endorsements";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Book a Consultation | Performance Development Network",
  description: "Book a free 30-minute consultation with Performance Development Network to discuss your team training needs.",
};

export default function ContactPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Contact13 />
      <Contact7 />
      <Endorsements />
      <Footer3 />
    </div>
  );
}
