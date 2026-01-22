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
            "We analyze your target audience and create the most effective ad strategies on Instagram and Facebook."
          )}
          {number === "2" && (
            "We prepare your visual and video ads with our professional team, producing eye-catching content."
          )}
          {number === "3" && (
            "We optimize your ad budget and help you achieve the highest conversion rates."
          )}
          {number === "4" && (
            "We continuously track your campaign performance with detailed reporting and analyses."
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function SocialMedia() {
  
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
                Reach Your Target Audience <br />
                <span className="text-[#00c16a]">with Meta Ads</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 max-w-3xl mt-8 font-light`}
              >
                Grow your brand with effective ad management on Instagram and Facebook.
                Stand out on social media with advertising strategies tailored to your target audience and creative content.
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
                    <source src="/videos/metainstagram.webm" type="video/webm" />
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
                  Professional Meta Ad Management
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  We reach your brand to the right target audience on Instagram and Facebook, increasing your sales with effective advertising strategies. We offer custom solutions for your brand using all of Meta's ad formats.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  We manage your social media ads with detailed targeting options, creative content production and performance optimization.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px]">
                <img
                  src="/images/metareklam.webp"
                  alt="Meta Ads"
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
                  Expert team in Meta ads
                </h2>
                <p className={`${redHat.className} text-white text-lg md:text-xl font-light mb-8 md:mb-12`}>
                  We grow your brand on social media with our professional team
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
                  title="Target Audience Analysis"
                  isOpen={false}
                />
                <AccordionSection
                  number="2"
                  title="Creative Content Production"
                  isOpen={false}
                />
                <AccordionSection
                  number="3"
                  title="Budget Optimization"
                  isOpen={false}
                />
                <AccordionSection
                  number="4"
                  title="Performance Tracking"
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
                  src="/images/metareklam2.webp"
                  alt="Meta Ad Solutions"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Why Meta Ads?
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  With Meta's extensive targeting options and ad formats, you can easily reach your potential customers. Increase your brand awareness with the combined power of Instagram and Facebook.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Capture your target audience's attention with Story ads, carousel ads, video ads and more. Track your campaign performance in real-time with detailed reporting tools.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Targeting Options
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Reach the right audience by targeting based on age, gender, location, interests and behaviors.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Visual & Video Ads
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Capture your target audience's attention with Story, Reels, carousel and feed ads.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Performance Analysis
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Track your campaign performance in real-time with detailed reporting tools.
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
                  Keep your spending under control with daily or campaign-based budget management.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Target Audience Analysis
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Analyze the demographic characteristics and behaviors of your target audience.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>
                  Quick Optimization
                </h3>
                <p className={`${redHat.className} text-gray-700 text-base font-normal`}>
                  Increase conversion rates with quick optimizations based on campaign performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    </>
  )
}