import { Metadata } from "next";
import TermsContent from "./Content";

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
    "Learn how Yayasan Equator Bumi Lestari collects, uses, and protects your personal data. Read our privacy policy regarding EGGM Token ecosystem and user data security.",

  keywords: [
    "terms and conditions",
    "eggmpire",
    "EGGM token",
    "user agreement",
  ],

  openGraph: {
    title: "Terms & Conditions | Eggmpire",
    description:
      "Understand your rights, obligations, and risks when using the Eggmpire platform.",
    url: "https://www.eggmpire.com/terms",
    siteName: "Eggmpire",
    type: "website",
  },
};

export default function Terms() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.eggmpire.com" },
    { name: "Terms & Conditions", url: "https://www.eggmpire.com/terms" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8">
        <TermsContent />
      </section>
    </>
  );
}
