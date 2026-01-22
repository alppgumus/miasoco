'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
const CONTACT_EMAIL = 'info@miaso.co';
import { useState, useRef, useEffect } from 'react';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

function AccordionSection({ number, title, isOpen }: { number: string, title: string, isOpen: boolean }) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="border-t border-gray-700 py-4 md:py-6">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          <span className={`${redHat.className} text-base md:text-lg mr-3 md:mr-4 text-white font-light`}>{number}.</span>
          <h3 className={`${redHat.className} text-lg md:text-xl font-light text-white`}>{title}</h3>
        </div>
        <div className="text-white transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 text-gray-400">
          {number === "1" && (
            "We conduct comprehensive keyword analysis for search network, display network and YouTube ads."
          )}
          {number === "2" && (
            "We optimize your ad copy and visuals to match your target audience."
          )}
          {number === "3" && (
            "We continuously monitor campaign performance and manage your budget most efficiently."
          )}
          {number === "4" && (
            "We conduct landing page optimizations and A/B tests to increase conversion rates."
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function GoogleAds() {
  
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <div className="relative">
        <section className="relative overflow-hidden min-h-screen bg-[#f0f0f5]" style={{
          background: 'radial-gradient(100% 100% at 50% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 70%), #f0f0f5'
        }}>
          <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900`}
              >
                Reach Your Potential Customers <br />
                <span className="text-[#00c16a]">with Google Ads</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 max-w-3xl mt-8 font-light`}
              >
                Reach the right target audience with search network, display network and YouTube ads.
                Increase your sales with professional Google Ads management.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 mt-8"
              >
                <button
                  href={`mailto:${CONTACT_EMAIL}?subject=Contact%20Request`}
                  className="bg-[#00c16a] hover:bg-[#00a85c] text-white px-8 py-4 rounded-lg font-medium transition-all"
                >
                  Get in Touch
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full mt-16 relative rounded-lg overflow-hidden"
              >
                <div className="w-full max-w-[1000px] mx-auto relative p-8">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-lg max-h-[500px] object-contain"
                    style={{ background: 'transparent' }}
                  >
                    <source src="/videos/googleads.webm" type="video/webm" />
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Professional Google Ads Management
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  We make your brand stand out on Google's powerful advertising network and help you reach your potential customers. We manage your campaigns with keyword analysis, ad copy optimization and budget management.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  We continuously track your campaign performance with our detailed reporting and analytics tools, increasing your conversion rates with data-driven optimizations.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px]">
                <img
                  src="/images/googleads1.webp"
                  alt="Google Ads Management"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#050806] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-white text-3xl md:text-4xl lg:text-5xl font-light mb-6 md:mb-8`}>
                  Expert team in Google Ads
                </h2>
                <p className={`${redHat.className} text-white text-lg md:text-xl font-light mb-8 md:mb-12`}>
                  We manage your digital ads with our professional team
                </p>

                <div className="mt-8 md:mt-12">
                  <button
                    href={`mailto:${CONTACT_EMAIL}?subject=Contact%20Request`}
                    className="bg-[#11fb96] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-md hover:bg-opacity-90 transition-all"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <AccordionSection
                  number="1"
                  title="Keyword Analysis"
                  isOpen={false}
                />
                <AccordionSection
                  number="2"
                  title="Ad Optimization"
                  isOpen={false}
                />
                <AccordionSection
                  number="3"
                  title="Budget Management"
                  isOpen={false}
                />
                <AccordionSection
                  number="4"
                  title="Conversion Optimization"
                  isOpen={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="h-[300px] md:h-[400px]">
                <img
                  src="/images/googleads2.webp"
                  alt="Google Ads Solutions"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Why Google Ads?
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Reach your potential customers exactly when they're searching with Google's extensive advertising network. Stand out your brand on every platform with search network, display network and YouTube ads.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Reach the right audience with geographic targeting, demographic targeting and interest targeting. Track your campaign performance in real-time with detailed reporting tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{
          background: 'radial-gradient(100% 100% at 100% 100%, rgba(17, 251, 150, 0.1) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5'
        }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Search Network Ads
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Appear at the top ranks when your potential customers are searching.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Display Ads
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Show your visual ads on Google's extensive advertising network.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  YouTube Ads
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Reach your target audience on YouTube with your video ads.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Performance Tracking
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Analyze your campaign performance with detailed reports.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Budget Control
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Manage daily and campaign-based budgets.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Conversion Optimization
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Increase conversion rates with A/B tests and optimizations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  )
}