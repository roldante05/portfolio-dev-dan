import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/lib/portfolioConfig";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: portfolioConfig.site.title,
  description: portfolioConfig.site.description,
  keywords: [...portfolioConfig.site.keywords],
  authors: [{ name: portfolioConfig.site.author }],
  creator: portfolioConfig.site.author,
  metadataBase: new URL(portfolioConfig.site.url),
  openGraph: {
    type: "website",
    locale: portfolioConfig.site.locale,
    url: portfolioConfig.site.url,
    title: portfolioConfig.site.title,
    description: portfolioConfig.site.description,
    siteName: "Portfolio of Dann Roldan",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dann Roldan - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.site.title,
    description: portfolioConfig.site.description,
    creator: "@dannroldan",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: portfolioConfig.site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioConfig.hero.name,
    jobTitle: portfolioConfig.hero.title,
    url: portfolioConfig.site.url,
    sameAs: [
      portfolioConfig.hero.socialLinks.github,
      portfolioConfig.hero.socialLinks.linkedin,
    ],
    knowsAbout: [
      "PHP",
      "Laravel",
      "API Design",
      "Database Design",
      "Backend Development",
      "Node.js",
    ],
    description: portfolioConfig.hero.description,
    email: `mailto:${portfolioConfig.contact.email}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
  };

  return (
    <html lang="es-AR" className="dark">
      <head>
        <meta name="theme-color" content={portfolioConfig.site.themeColor} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} min-h-screen bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}