import { profile } from "@/data/profile";
import { seo } from "@/data/seo";
import { siteUrl } from "@/lib/site-url";

export function StructuredData() {
  const person = {
    "@type": "Person",
    ...(siteUrl ? { "@id": `${siteUrl.href}#person`, url: siteUrl.href } : {}),
    name: profile.name,
    jobTitle: seo.role,
    description: seo.description,
    sameAs: profile.socials.map((link) => link.url),
    homeLocation: { "@type": "Place", name: profile.location },
    knowsAbout: profile.skills.flatMap((group) => group.items),
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        ...(siteUrl
          ? { "@id": `${siteUrl.href}#profile`, url: siteUrl.href }
          : {}),
        name: seo.title,
        description: seo.description,
        inLanguage: "en",
        mainEntity: person,
      },
      ...(siteUrl
        ? [
            {
              "@type": "WebSite",
              "@id": `${siteUrl.href}#website`,
              url: siteUrl.href,
              name: profile.name,
              inLanguage: "en",
              publisher: { "@id": `${siteUrl.href}#person` },
            },
          ]
        : []),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
