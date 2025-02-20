import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/smooth-scroll/SmoothScroll";
import { ToasterProvider } from "./components/providers/ToasterProvider";
import { ThemeProvider } from "./components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: process.env.NODE_ENV === 'production'
    ? new URL('https://portfolio-v1-delta-five.vercel.app/')
    : new URL('http://localhost:3000'),
  title: "Christopher Rodriguez | Portfolio",
  description: "Full-Stack Developer passionate about creating beautiful, functional, and user-friendly applications",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Christopher Rodriguez Portfolio",
    title: "Christopher Rodriguez | Portfolio",
    description: "Full-Stack Developer passionate about creating beautiful, functional, and user-friendly applications",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Christopher Rodriguez Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Rodriguez | Portfolio",
    description: "Full-Stack Developer passionate about creating beautiful, functional, and user-friendly applications",
    creator: "@yourtwitterhandle",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <SmoothScroll>
            {children}
            <ToasterProvider />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
