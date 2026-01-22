'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Red_Hat_Display } from "next/font/google";
const CONTACT_EMAIL = 'info@miaso.co';
import Link from 'next/link';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

export default function MobileApp() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }

    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 1)
      window.scrollTo(0, 0)
    }
  }, [])

  if (!isMounted) {
    return (
      <section className="relative bg-[#f0f0f5] text-black overflow-hidden p-12 md:p-20 min-h-screen">
        <div className="container mx-auto px-4 mt-[20vh]">
          <div className="h-[600px]"></div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="relative">
        <section className="relative overflow-hidden min-h-screen bg-[#f0f0f5]" style={{
          background: 'radial-gradient(100% 100% at 50% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 50%), #f0f0f5'
        }}>
          <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="flex flex-col items-center text-center max-w-[1200px] mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-gray-900 max-w-3xl`}
              >
                Take your place in the <br />
                <span className="text-[#00c16a]">mobile world</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 mb-8 max-w-2xl font-light`}
              >
                We develop native mobile applications for iOS and Android,
                making your business stand out in the mobile world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4 mb-16"
              >
                <button
                  href={`mailto:${CONTACT_EMAIL}?subject=Contact%20Request`}
                  className="bg-[#00c16a] hover:bg-[#00a85c] text-white px-8 py-4 rounded-lg font-medium transition-all"
                >
                  Get in Touch
                </button>
              </motion.div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-[1000px] mx-auto"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#f0f0f5]">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/mobileappdevelopment.mp4" type="video/mp4" />
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
                  Native Mobile App Development
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  We develop native mobile applications for iOS and Android platforms. With our platform-specific approach and experienced team, we provide the best experience to your users.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Prioritizing user experience, we utilize each platform's own design language and features to the fullest. We make your business stand out in the mobile world with high-performance, secure and scalable mobile applications.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px] order-2 md:order-1">
                <img
                  src="/images/mobilgorsel1.png"
                  alt="Native Mobile App Development"
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="h-[300px] md:h-[400px] order-2 md:order-1">
                <img
                  src="/images/mobilgorsel2.png"
                  alt="Cross-Platform Mobile App"
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Cross-Platform Solutions
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Using modern technologies like React Native and Flutter, we develop applications that work on multiple platforms from a single codebase. Our cross-platform solutions provide cost and time advantages, bringing your project to life quickly.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Our cross-platform applications offer native performance and appearance on every platform, strengthening your business's mobile strategy. We provide competitive advantage with fast development process and easy updateability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{ background: 'radial-gradient(100% 100% at 100% 110%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5' }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Custom Mobile Solutions
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  We develop custom mobile applications tailored to your business needs. We offer mobile solutions for e-commerce, content management, customer loyalty programs and special business processes.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Our mobile applications supported by powerful backend systems, API integrations and analytics tools contribute to your business's digital transformation. We offer a unique experience to your customers with user-friendly interfaces and customized functions.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px]">
                <img
                  src="/images/mobilgorsel3.png"
                  alt="Custom Mobile Solutions"
                  className="w-full h-full object-contain object-center rounded-md"
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
                  Let's bring your mobile project to life step by step
                </h2>
                <p className={`${redHat.className} text-white text-lg md:text-xl font-light mb-8 md:mb-12`}>
                  We offer custom solutions tailored to your needs with our professional team
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
                  title="Needs analysis and planning"
                  isOpen={false}
                />
                <AccordionSection
                  number="2"
                  title="UI/UX design"
                  isOpen={false}
                />
                <AccordionSection
                  number="3"
                  title="Development and testing"
                  isOpen={false}
                />
                <AccordionSection
                  number="4"
                  title="Store publishing and maintenance"
                  isOpen={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{ background: 'radial-gradient(100% 100% at 100% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5' }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <h2 className={`${redHat.className} text-center text-3xl md:text-4xl font-light mb-12 md:mb-20 text-black`}>
              Advantages of our mobile solutions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
                title="Native Performance"
                description="We develop high-performance applications using each platform's own features. We satisfy your users with smooth user experience and fast operation."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                }
                title="Secure Infrastructure"
                description="We protect user data by applying the latest security standards. We keep your application safe with SSL encryption, secure data storage and regular security updates."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                }
                title="Seamless Updates"
                description="We keep your application up-to-date with regular maintenance and updates. We continuously improve your application with new features, performance improvements and security updates."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                }
                title="Customizable Design"
                description="We design fully customized interfaces that reflect your brand identity. We make your application stand out with modern design trends and user experience principles."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                }
                title="Detailed Analytics"
                description="We integrate analytics tools that measure user behavior and application performance. We provide detailed reports and analyses that enable you to make data-driven decisions."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                }
                title="Cloud Integration"
                description="We support your application with powerful cloud infrastructure. We provide uninterrupted service with data backup, synchronization and scalable server solutions."
              />
            </div>
          </div>
        </section>
      </div>
      
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4 md:mb-6">
        {icon}
      </div>
      <h3 className={`${redHat.className} text-xl md:text-2xl font-light mb-3 md:mb-4 text-black`}>{title}</h3>
      <p className={`${redHat.className} text-gray-700 text-base font-normal`}>{description}</p>
    </div>
  );
}

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
        <div className="text-white">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 md:mt-4 pl-4 md:pl-8 overflow-hidden"
          >
            <p className={`${redHat.className} text-gray-400 text-sm md:text-base font-light`}>
              {number === "1" && "We analyze your business goals and needs in detail, determining the scope of your mobile project. By evaluating your target audience, competitive environment and technical requirements, we create a customized roadmap for you."}
              {number === "2" && "Prioritizing user experience, we design interfaces that best utilize each platform's design language and features. Working closely with you during wireframe and prototype stages, we develop designs that fully meet your expectations."}
              {number === "3" && "We code your application with modern technologies and best development practices. We check every detail with comprehensive testing processes, fix bugs and optimize performance."}
              {number === "4" && "We prepare and publish your application on the App Store and Google Play Store. We ensure continuous development of your application with regular maintenance, updates and support services after launch."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}