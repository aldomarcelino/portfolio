import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource/instrument-serif/latin-400.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Aldo Marcelino — Software Engineer",
  description:
    "Full Stack Engineer based in Jakarta. Thoughtful interfaces, connected systems, and maintainable software. Explore selected work and experience.",
  openGraph: {
    title: "Aldo Marcelino — Software Engineer",
    description:
      "Thoughtful interfaces. Connected systems. Software built with intent.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem('portfolio-theme')}catch(e){}document.documentElement.dataset.theme=t==='dark'||t==='light'?t:'dark'})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
