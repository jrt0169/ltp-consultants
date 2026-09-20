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
    ];
  },
};

export default nextConfig;
