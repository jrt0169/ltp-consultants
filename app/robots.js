export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/resources/workbooks/library",
    },
    sitemap: "https://pdnlearn.com/sitemap.xml",
    host: "https://pdnlearn.com",
  };
}
