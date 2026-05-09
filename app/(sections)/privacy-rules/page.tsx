import { Metadata } from "next";
import RulesContent from "./Content";

function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export const metadata: Metadata = {
  title: "Privacy Policy | PT Eggmpire Bumi Lestari",
  description:
    "Learn how PT Eggmpire Bumi Lestari collects, uses, and protects your personal data. Read our privacy policy regarding EGGM Token ecosystem and user data security.",

  keywords: ["privacy policy", "eggmpire", "EGGM token", "data protection"],

  openGraph: {
    title: "Privacy Policy | PT Eggmpire Bumi Lestari",
    description:
      "Understand how your data is handled, stored, and protected within the Eggmpire ecosystem.",
    url: "https://www.eggmpire.com/privacy-policy",
    siteName: "Eggmpire",
    type: "website",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.eggmpire.com" },
    { name: "Privacy Rules", url: "https://www.eggmpire.com/privacy-rules" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8">
        <RulesContent />
      </section>
    </>
  );
}
