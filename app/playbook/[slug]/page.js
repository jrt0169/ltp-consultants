import { notFound } from "next/navigation";
import { Navbar10 } from "@/components/shared/Navbar10";
import { Footer3 } from "@/components/shared/Footer3";
import PlaybookLanding from "@/components/playbook/PlaybookLanding";
import { playbooks, bySlug } from "@/components/playbook/playbookData";

// The canonical slug is the path printed under the QR code on each workbook's
// title page. A few are capitalised there (CAS, Cynefin) and the origin site is
// case-insensitive, so we also pre-render a lowercase alias for each.
export function generateStaticParams() {
  const params = [];
  for (const p of playbooks) {
    params.push({ slug: p.slug });
    if (p.slug !== p.slug.toLowerCase()) {
      params.push({ slug: p.slug.toLowerCase() });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) return {};

  const title = `${p.title} Workbook | The Flow System`;
  const canonical = `https://pdnlearn.com/playbook/${p.slug}`;

  return {
    title,
    description: p.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: p.description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function PlaybookRoute({ params }) {
  const { slug } = await params;
  const playbook = bySlug(slug);
  if (!playbook) notFound();

  return (
    <div>
      <Navbar10 />
      <PlaybookLanding playbook={playbook} />
      <Footer3 />
    </div>
  );
}
