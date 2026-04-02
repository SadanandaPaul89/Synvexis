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
  title: "Synvexis Digital | Premium Web Agency",
  description: "Portfolio for Synvexis Digital, a premium web development and design agency.",
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
