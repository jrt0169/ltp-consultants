import { Navbar10 } from "@/components/shared/Navbar10";
import { Header64 } from "@/components/contact/Header64";
import { Contact13 } from "@/components/contact/Contact13";
import { Contact7 } from "@/components/contact/Contact7";
import { Logo3 } from "@/components/contact/Logo3";
import { Testimonial3 } from "@/components/contact/Testimonial3";
import { Footer3 } from "@/components/shared/Footer3";

export const metadata = {
  title: "Book a Consultation | LTP Consultants",
  description: "Book a free consultation with LTP Consultants to discuss your team training needs.",
};

export default function ContactPage() {
  return (
    <div>
      <Navbar10 />
      <Header64 />
      <Contact13 />
      <Contact7 />
      <Logo3 />
      <Testimonial3 />
      <Footer3 />
    </div>
  );
}
