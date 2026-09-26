import { playbooks } from "./components/playbook/playbookData.js";

// getflowtrained.com redirects here. Its explicit rules cover /playbook/<slug>/,
// but everything else falls through a catch-all that prefixes the original path
// with /training/ — so getflowtrained.com/decision-making/ arrives as
// pdnlearn.com/training/decision-making and 404s.
//
// /training has no sub-routes of its own, so we can reclaim those paths. Only
// known workbook slugs are mapped: anything else under /training/ still gets a
// proper 404 rather than being quietly sent somewhere unrelated.
function workbookFallthroughRedirects() {
  const slugs = new Set();
  for (const p of playbooks) {
    slugs.add(p.slug);
    slugs.add(p.slug.toLowerCase());
  }
  return [...slugs].map((slug) => ({
    source: `/training/${slug}`,
    destination: `/playbook/${slug}`,
    permanent: true,
  }));
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@relume_io/relume-ui"],
  async redirects() {
    return [
      // The workbook library used to sit behind a Tally email gate. It is now
      // one ungated page; keep old links (and the Tally thank-you message that
      // still points at the library) working.
      {
        source: "/resources/workbooks/library",
        destination: "/resources/workbooks",
        permanent: true,
      },
      // /playbook/<slug> pages stay (printed QR codes land there), but the
      // index lives at /resources/workbooks so there is only one listing.
      { source: "/playbook", destination: "/resources/workbooks", permanent: true },

      // Anything under /training/playbook/ was unambiguously meant to be a
      // playbook URL before the catch-all prefixed it.
      {
        source: "/training/playbook/:slug",
        destination: "/playbook/:slug",
        permanent: true,
      },

      // getflowtrained.com/<workbook>/ -> /training/<workbook> -> the workbook.
      ...workbookFallthroughRedirects(),
    ];
  },
};

export default nextConfig;
