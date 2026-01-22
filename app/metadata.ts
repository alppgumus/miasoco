import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miaso | The Architect of Your Digital Transformation',
  description: 'Miaso is by your side in your digital transformation journey. We offer website, mobile app, e-commerce solutions and digital marketing services.',
  keywords: "digital transformation, technology solutions, web design, e-commerce solutions, mobile app development, digital marketing, social media management, corporate solutions, software development, digital agency",
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