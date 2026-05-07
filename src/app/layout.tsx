import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], display: 'swap' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.synvexis.digital/"),
  title: "Web Development & Design Agency | Synvexis Digital | High-Performance Websites",
  description:
    "Synvexis Private Limited delivers premium web development and digital product design. High-performance websites, scalable solutions, and stunning design systems for brands that demand excellence.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "web development agency",
    "custom web development",
    "website design",
    "digital product design",
    "high-performance web applications",
    "Next.js development",
    "UI/UX design agency",
    "Synvexis Digital",
    "premium web agency",
    "scalable web solutions",
    "design systems",
    "responsive web design",
    "e-commerce development",
    "SaaS development",
  ],
  applicationName: "Synvexis Digital",
  authors: [{ name: "Synvexis Private Limited" }],
  creator: "Synvexis Private Limited",
  publisher: "Synvexis Private Limited",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Web Development & Design Agency | Synvexis Digital",
    description:
      "Premium web development, custom design systems, and high-performance digital products for brands that demand excellence.",
    siteName: "Synvexis Digital",
    type: "website",
    url: "https://www.synvexis.digital/",
    locale: "en_US",
    images: [
      {
        url: "/cyberpunk-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Synvexis Digital - Web Development Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@synvexisdigital",
    creator: "@synvexisdigital",
    title: "Web Development & Design Agency | Synvexis Digital",
    description:
      "Premium web development, custom design systems, and high-performance digital products.",
    images: ["/cyberpunk-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.synvexis.digital/",
    name: "Synvexis Digital",
    alternateName: "Synvexis Private Limited",
    url: "https://www.synvexis.digital/",
    logo: "https://www.synvexis.digital/logo.png",
    description: "Premium web development and digital product design agency delivering high-performance websites and scalable solutions.",
    sameAs: [
      "https://www.linkedin.com/company/synvexis-digital",
      "https://twitter.com/synvexisdigital",
      "https://github.com/synvexis",
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://www.synvexis.digital/",
    },
    foundingDate: "2020",
    areaServed: "Worldwide",
    serviceType: [
      "Web Development",
      "UI/UX Design",
      "Digital Product Design",
      "Custom Web Applications",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.synvexis.digital/",
    name: "Synvexis Digital",
    image: "https://www.synvexis.digital/cyberpunk-bg.jpg",
    description: "Web development and design agency",
    url: "https://www.synvexis.digital/",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "47",
    },
  };

  return (
    <html lang="en" className={outfit.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -3 }}>
          <Image
            src="/synvexis-bg.png"
            alt="Abstract Cyperpunk Desk Setup Background"
            fill
            priority
            quality={85}
            style={{ objectFit: 'cover' }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
