import { profile } from "@/data/profile";
import { seo } from "@/data/seo";
import { siteUrl } from "@/lib/site-url";

export function StructuredData() {
  const image = siteUrl
    ? {
        "@type": "ImageObject",
        url: new URL(seo.portraitPath, siteUrl).href,
        width: 1792,
        height: 2400,
        caption: "Black-and-white illustrated portrait of Aldo Marcelino",
      }
    : undefined;
  const person = {
    "@type": "Person",
    ...(siteUrl ? { "@id": `${siteUrl.href}#person`, url: siteUrl.href } : {}),
    name: profile.fullName,
    alternateName: [profile.name, "Aldo"],
    jobTitle: seo.role,
    description: seo.description,
    ...(image ? { image } : {}),
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
        ...(image ? { primaryImageOfPage: image } : {}),
        ...(siteUrl ? { isPartOf: { "@id": `${siteUrl.href}#website` } } : {}),
        mainEntity: person,
      },
      ...(siteUrl
        ? [
            {
              "@type": "WebSite",
              "@id": `${siteUrl.href}#website`,
              url: siteUrl.href,
              name: profile.name,
              alternateName: [profile.fullName, siteUrl.hostname],
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
