import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Expert Restoration & Luxury Custom Pools | ICS",
  description: "Professional restoration and custom pool services in Boca Raton, Florida. Licensed Contractor CBC #1250136. Expert concrete restoration, pool construction, and Diamond Brite finishes.",
  keywords: "restoration, pools, contractor, Boca Raton, Florida, concrete restoration, pool construction, Diamond Brite",
  openGraph: {
    title: "Expert Restoration & Luxury Custom Pools | ICS",
    description: "Professional restoration and custom pool services in Boca Raton, Florida.",
    type: "website",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
