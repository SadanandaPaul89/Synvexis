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
  title: "Synvexis Private Limited | Synvexis Digital",
  description:
    "Synvexis Private Limited, operating as Synvexis Digital, is a premium web development and design agency building high-performance websites and digital products.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Synvexis",
    "Synvexis Private Limited",
    "Synvexis Digital",
    "synvexis",
    "synvexis private limited",
    "synvexis digital",
    "web development agency",
    "design agency",
  ],
  applicationName: "Synvexis Digital",
  authors: [{ name: "Synvexis Private Limited" }],
  creator: "Synvexis Private Limited",
  publisher: "Synvexis Private Limited",
  openGraph: {
    title: "Synvexis Private Limited | Synvexis Digital",
    description:
      "Synvexis Private Limited, operating as Synvexis Digital, delivers premium web development and design services.",
    siteName: "Synvexis Digital",
    type: "website",
    url: "/",
    images: [
      {
        url: "/cyberpunk-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Synvexis Private Limited | Synvexis Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Synvexis Private Limited | Synvexis Digital",
    description:
      "Synvexis Private Limited, operating as Synvexis Digital, delivers premium web development and design services.",
    images: ["/cyberpunk-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
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
