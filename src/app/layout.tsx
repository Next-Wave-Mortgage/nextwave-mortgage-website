import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import GA from "@/components/analytics/GA";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "/images/Next_Wave_Mortgage_Logo.png",
        width: 600,
        height: 200,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    images: ["/images/Next_Wave_Mortgage_Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    name: siteConfig.companyName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Next_Wave_Mortgage_Logo.png`,
    image: `${siteConfig.url}/images/Next_Wave_Mortgage_Logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2430 E Commercial BLVD #3",
      addressLocality: "Fort Lauderdale",
      addressRegion: "FL",
      postalCode: "33308",
      addressCountry: "US",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ].filter(Boolean),
  };

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GA />
        {children}
      </body>
    </html>
  );
}
