import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "ICS | Expert Restoration & Luxury Custom Pools in Boca Raton",
  description:
    "Premier licensed contractor (CBC #1250136) in Boca Raton, FL. Specializing in concrete restoration, Diamond Brite pool finishes, custom pool construction, and structural repairs.",
  keywords:
    "concrete restoration, pool construction, pool resurfacing, Diamond Brite, waterproofing, structural repair, Boca Raton, Florida, licensed contractor, ICS, Innovative Custom Services, custom pools, pool renovation",
  openGraph: {
    title: "ICS | Expert Restoration & Luxury Custom Pools",
    description:
      "Your trusted partner for professional concrete restoration and luxury pool creation in South Florida. Licensed & Insured.",
    type: "website",
    locale: "en_US",
    siteName: "Innovative Custom Services",
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
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${inter.variable}`}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
