import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import { SEO, PERSONAL } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: PERSONAL.name, url: SEO.url }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    url: SEO.url,
    title: SEO.title,
    description: SEO.description,
    siteName: `${PERSONAL.name} — Portfolio`,
    images: [{ url: SEO.ogImage, width: 1200, height: 630, alt: SEO.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL(SEO.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: PERSONAL.name,
              jobTitle: PERSONAL.title,
              email: PERSONAL.email,
              url: SEO.url,
              sameAs: [PERSONAL.github, PERSONAL.linkedin],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bahawalpur",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              knowsAbout: [
                "React.js","Next.js","Node.js","MongoDB","Express.js",
                "Tailwind CSS","REST APIs","Full Stack Development","AI Integration",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#16161f",
              color: "#F0F0FF",
              border: "1px solid rgba(108,99,255,0.3)",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  );
}
