import { LegalLayout, H2, P, UL, LI, Mail } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Terms of Service | Performance Development Network",
  description: "The terms that govern your use of the Performance Development Network website and resources.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 18, 2026">
      <P>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
        pdnlearn.com (the &ldquo;Site&rdquo;), operated by Performance
        Development Network, LLC (&ldquo;PDN&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By using the Site, you agree to
        these Terms. If you do not agree, please do not use the Site.
      </P>

      <H2>About PDN and this Site</H2>
      <P>
        The Site provides information about The Flow System and PDN&rsquo;s
        training, coaching, and consulting, along with free resources. Online
        courses are delivered through our course platform, and consultations are
        arranged through our scheduling and contact tools.
      </P>

      <H2>Use of the Site</H2>
      <P>You agree to use the Site lawfully and not to:</P>
      <UL>
        <LI>Misuse, disrupt, or attempt to gain unauthorised access to the Site.</LI>
        <LI>Copy, resell, or redistribute our content except as expressly allowed.</LI>
        <LI>Use the Site in any way that infringes the rights of others.</LI>
      </UL>

      <H2>Intellectual property</H2>
      <P>
        The Flow System framework, the workbooks, course materials, text,
        graphics, and other content on the Site are owned by PDN or its
        licensors and are protected by intellectual-property laws. You may not
        reproduce or distribute them without permission, except as set out below.
      </P>

      <H2>Free resources</H2>
      <P>
        Free resources such as the workbooks are provided for your own personal
        or internal team use. You may not resell them or redistribute them
        publicly without our written permission.
      </P>

      <H2>Training, coaching &amp; consulting</H2>
      <P>
        Paid courses are purchased and delivered through our third-party course
        platform and are subject to that platform&rsquo;s terms as well as any
        course-specific terms we provide. Coaching and consulting engagements are
        governed by the separate agreement we enter into with you.
      </P>

      <H2>Third-party links and services</H2>
      <P>
        The Site links to and relies on third-party services (including our
        course platform, scheduling, forms, and book retailers). We are not
        responsible for the content or practices of those third parties, and
        your use of them is governed by their own terms.
      </P>

      <H2>Disclaimers</H2>
      <P>
        The Site and its content are provided &ldquo;as is&rdquo; without
        warranties of any kind. Our content is for general informational and
        educational purposes and is not professional, legal, financial, or
        medical advice.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the fullest extent permitted by law, PDN will not be liable for any
        indirect, incidental, or consequential damages arising from your use of
        the Site or reliance on its content.
      </P>

      <H2>Governing law</H2>
      <P>
        These Terms are governed by the laws of the State of Texas, United
        States, without regard to its conflict-of-laws rules.
      </P>

      <H2>Changes to these Terms</H2>
      <P>
        We may update these Terms from time to time. The &ldquo;Last
        updated&rdquo; date above reflects the most recent version, and your
        continued use of the Site means you accept the changes.
      </P>

      <H2>Contact us</H2>
      <P>
        Questions about these Terms? Email{" "}
        <Mail address="john.turner@pdnlearn.com" />.
      </P>
    </LegalLayout>
  );
}
