export default function robots() {
  const baseUrl = "https://www.aristoninvestagroup.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}