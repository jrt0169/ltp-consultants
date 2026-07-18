export default function sitemap() {
  const base = "https://pdnlearn.com";
  const lastModified = new Date();

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/the-flow-system", priority: 0.9, changeFrequency: "monthly" },
    { path: "/training", priority: 0.9, changeFrequency: "monthly" },
    { path: "/ways-to-work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/diagnose", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/what-we-do", priority: 0.8, changeFrequency: "monthly" },
    { path: "/research", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources/workbooks", priority: 0.7, changeFrequency: "monthly" },
    { path: "/results/case-studies", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact/book-a-consultation", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  ];

  return pages.map((p) => ({
    url: `${base}${p.path}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
