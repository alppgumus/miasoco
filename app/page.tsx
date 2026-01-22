import { Red_Hat_Display } from "next/font/google";
import Hero from '@/components/Hero'
import Platform from '@/components/Platform'
import Partners from '@/components/Partners'
import ArtificialIntelligence from '@/components/ArtificialIntelligence'
import WebDevelopment from '@/components/WebDevelopment'
import MetaGoogleAds from '@/components/MetaGoogleAds'
import CustomerConnection from '@/components/CustomerConnection'
import MobileDevelopment from '@/components/MobileDevelopment'
import Script from 'next/script'

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function Home() {
  return (
    <>
      <Script id="schema-markup" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Miaso",
            "url": "https://miaso.co",
            "logo": "https://miaso.co/miasologo.png",
            "description": "Professional digital agency offering 360° digital transformation and technology solutions",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR"
            },
            "sameAs": [
              "https://www.instagram.com/miaso.co/",
              "https://www.linkedin.com/company/miaso/",
              "https://x.com/miaso.co"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "offers": [
                {
                  "@type": "Offer",
                  "category": "Digital Transformation",
                  "name": "360° Digital Transformation Solutions",
                  "description": "Comprehensive technology and consulting services to take your business to the digital world"
                },
                {
                  "@type": "Offer",
                  "category": "Software Development",
                  "name": "Custom Software Solutions",
                  "description": "Web applications, mobile applications and enterprise software solutions"
                },
                {
                  "@type": "Offer",
                  "category": "E-Commerce",
                  "name": "E-Commerce Systems",
                  "description": "Online sales systems setup and management"
                },
                {
                  "@type": "Offer",
                  "category": "Digital Marketing",
                  "name": "Digital Marketing and Advertising",
                  "description": "Social media management, SEO and advertising campaigns"
                }
              ]
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Turkey",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              }
            },
            "knowsAbout": [
              "Digital Transformation",
              "Web Development",
              "Mobile App Development",
              "E-Commerce Systems",
              "Digital Marketing",
              "SEO Optimization",
              "Social Media Management",
              "UI/UX Design"
            ]
          }
        `}
      </Script>

      <main itemScope itemType="https://schema.org/WebPage">
        <div className="relative">
          <Hero />
          <Platform />
        </div>
        <Partners />
        <ArtificialIntelligence />
        <WebDevelopment />
        <MetaGoogleAds />
        <CustomerConnection />
        <MobileDevelopment />
      </main>
    </>
  )
}
