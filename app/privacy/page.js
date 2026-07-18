import { LegalLayout, H2, P, UL, LI, Mail } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Privacy Policy | Performance Development Network",
  description: "How Performance Development Network collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 18, 2026">
      <P>
        This Privacy Policy explains how Performance Development Network, LLC
        (&ldquo;PDN&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) collects, uses, and protects information when you
        visit pdnlearn.com (the &ldquo;Site&rdquo;) or contact us. By using the
        Site, you agree to the practices described here.
      </P>

      <H2>Information we collect</H2>
      <P>
        We only collect information that helps us respond to you and deliver
        what you ask for:
      </P>
      <UL>
        <LI>
          <strong>Information you give us</strong> &mdash; such as your name,
          email address, and any message or details you provide when you contact
          us, book a call, request the free workbooks, or complete the team
          diagnostic. These forms are handled by our form and scheduling
          providers (see below).
        </LI>
        <LI>
          <strong>Information collected automatically</strong> &mdash; basic
          technical and usage data (such as your browser type, device, and pages
          visited) that our hosting provider records to operate and secure the
          Site.
        </LI>
      </UL>

      <H2>How we use your information</H2>
      <UL>
        <LI>To respond to your enquiries and schedule consultations.</LI>
        <LI>To deliver resources you request, such as the workbooks.</LI>
        <LI>To send you updates only if you have opted in to receive them.</LI>
        <LI>To operate, maintain, and improve the Site.</LI>
      </UL>

      <H2>Third-party services</H2>
      <P>
        We use trusted third-party services to run the Site and its features.
        Each processes only the information needed for its function, under its
        own privacy terms:
      </P>
      <UL>
        <LI>
          <strong>Tally</strong> &mdash; contact, workbook, and diagnostic forms.
        </LI>
        <LI>
          <strong>Cal.com</strong> &mdash; scheduling discovery calls.
        </LI>
        <LI>
          <strong>Thinkific</strong> &mdash; hosting our online courses and
          processing course purchases.
        </LI>
        <LI>
          <strong>Vercel</strong> &mdash; website hosting and security.
        </LI>
        <LI>
          <strong>Amazon</strong> &mdash; where our books are sold (links out to
          Amazon&rsquo;s own site).
        </LI>
      </UL>

      <H2>Sharing your information</H2>
      <P>
        We do not sell your personal information. We share it only with the
        service providers listed above, and only as needed to provide the Site
        and respond to you &mdash; or where required by law.
      </P>

      <H2>Data retention</H2>
      <P>
        We keep personal information for as long as needed to fulfil the
        purposes described here, and then delete or anonymise it. You can ask us
        to delete your information at any time.
      </P>

      <H2>Your rights</H2>
      <P>
        You may request access to, correction of, or deletion of the personal
        information we hold about you, or ask us to stop sending you updates. To
        do so, email <Mail address="john.turner@pdnlearn.com" />.
      </P>

      <H2>Children&rsquo;s privacy</H2>
      <P>
        The Site is intended for professionals and is not directed to children.
        We do not knowingly collect personal information from children.
      </P>

      <H2>Security</H2>
      <P>
        We take reasonable measures to protect your information. However, no
        method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date above reflects the most recent version.
      </P>

      <H2>Contact us</H2>
      <P>
        Questions about this policy? Email{" "}
        <Mail address="john.turner@pdnlearn.com" /> or{" "}
        <Mail address="support@getflowtrained.com" />.
      </P>
    </LegalLayout>
  );
}
