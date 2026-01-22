import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Script from 'next/script';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://miaso.co'),
  title: 'Miaso | The Architect of Your Digital World',
  description: 'Miaso is by your side in your digital transformation journey. We offer website, mobile app, e-commerce solutions and digital marketing services.',
  keywords: "digital transformation, technology solutions, web design, e-commerce solutions, mobile app development, digital marketing, social media management, corporate solutions, software development, digital agency",
  authors: [{ name: "Miaso" }],
  creator: "Miaso",
  publisher: "Miaso",
  robots: "index, follow",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon',
      url: '/favicon.ico',
    },
  },
  alternates: {
    canonical: "https://miaso.co",
  },
  openGraph: {
    type: "website",
    url: "https://miaso.co",
    title: "Miaso | Digital Transformation and Technology Solutions",
    description: "We take your business to the future with 360° digital transformation solutions. Miaso is by your side for professional technology and software solutions.",
    siteName: "Miaso",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Miaso - Digital Transformation and Technology Solutions"
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miaso.co",
    creator: "@miaso.co",
    title: "Miaso | Digital Transformation and Technology Solutions",
    description: "We take your business to the future with 360° digital transformation solutions. Miaso is by your side for professional technology and software solutions.",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={redHat.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />

        {/* Google Tag Manager - loaded after page is interactive */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KXLBH3DG');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXLBH3DG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}

