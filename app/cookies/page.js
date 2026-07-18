import { LegalLayout, H2, P, UL, LI, Mail } from "@/components/legal/LegalLayout";

export const metadata = {
  title: "Cookie Policy | Performance Development Network",
  description: "How Performance Development Network uses cookies on pdnlearn.com.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="July 18, 2026">
      <P>
        This Cookie Policy explains how Performance Development Network
        (&ldquo;PDN&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) uses cookies and similar technologies on pdnlearn.com
        (the &ldquo;Site&rdquo;).
      </P>

      <H2>What cookies are</H2>
      <P>
        Cookies are small text files placed on your device when you visit a
        website. They help the site function and remember certain information.
      </P>

      <H2>How we use cookies</H2>
      <P>
        We keep cookie use to a minimum. The Site relies on essential and
        functional cookies needed to operate, secure, and display it correctly.
        We do not use advertising or cross-site tracking cookies.
      </P>

      <H2>Third-party cookies</H2>
      <P>
        Some features are provided by third parties that may set their own
        cookies when you interact with them:
      </P>
      <UL>
        <LI>
          <strong>Tally</strong> &mdash; when you open a contact, workbook, or
          diagnostic form.
        </LI>
        <LI>
          <strong>Cal.com</strong> &mdash; when you open the scheduling window to
          book a call.
        </LI>
        <LI>
          <strong>Thinkific</strong> &mdash; on our course pages, which are
          hosted on Thinkific&rsquo;s platform.
        </LI>
        <LI>
          <strong>Vercel</strong> &mdash; which hosts and secures the Site.
        </LI>
      </UL>
      <P>
        These providers set cookies under their own policies. Please refer to
        each provider&rsquo;s cookie and privacy notices for details.
      </P>

      <H2>Managing cookies</H2>
      <P>
        You can control or delete cookies through your browser settings. Most
        browsers let you block or remove cookies, though some parts of the Site
        may not work as intended if you do.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        We may update this Cookie Policy from time to time. The &ldquo;Last
        updated&rdquo; date above reflects the most recent version.
      </P>

      <H2>Contact us</H2>
      <P>
        Questions about our use of cookies? Email{" "}
        <Mail address="john.turner@pdnlearn.com" />.
      </P>
    </LegalLayout>
  );
}
