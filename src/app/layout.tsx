import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import { seo } from "@/data/seo";
import { siteUrl, isIndexable } from "@/lib/site-url";
import "./globals.css";
import "./editorial.css";
const manrope = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});
const editorial = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
  display: "swap",
  preload: false,
});
const socialImage = siteUrl
  ? {
      url: new URL(seo.imagePath, siteUrl).href,
      width: 1200,
      height: 630,
      alt: seo.imageAlt,
    }
  : undefined;

export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: siteUrl, alternates: { canonical: siteUrl.href } }
    : {}),
  title: { default: seo.title, template: "%s | Aldo Marcelino" },
  description: seo.description,
  applicationName: "Aldo Marcelino — Portfolio",
  authors: [{ name: profile.name, ...(siteUrl ? { url: siteUrl.href } : {}) }],
  creator: profile.name,
  category: "Technology",
  openGraph: {
    title: seo.title,
    description: seo.description,
    siteName: profile.name,
    type: "website",
    locale: "en_US",
    ...(siteUrl ? { url: siteUrl.href } : {}),
    ...(socialImage ? { images: [socialImage] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    ...(socialImage ? { images: [socialImage.url] } : {}),
  },
  robots: {
    index: isIndexable,
    follow: true,
    googleBot: {
      index: isIndexable,
      follow: true,
      "max-image-preview": "large",
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${manrope.variable} ${editorial.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem('portfolio-editorial-theme')}catch(e){}document.documentElement.dataset.theme=t==='dark'||t==='light'?t:'light'})()`,
          }}
        />
      </head>
      <body className="editorial">{children}</body>
    </html>
  );
}
