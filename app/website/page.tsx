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

export default function WebSite() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }

    setIsMounted(true)
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
                Stand Out in the <br />
                <span className="text-[#00c16a]">Digital World</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${redHat.className} text-lg md:text-xl text-gray-600 mb-8 max-w-2xl font-light`}
              >
                We represent your business powerfully in the digital world with modern and impressive websites
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

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full mt-16"
              >
                <div className="flex flex-wrap md:flex-nowrap justify-center items-end gap-3 md:gap-6 h-auto px-4 max-w-[1400px] mx-auto">
                  <div className="w-[45%] md:flex-1 h-[120px] md:h-[180px] max-w-[320px] overflow-hidden rounded-lg">
                    <img src="/images/webtasarim1.webp" alt="Website example" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="w-[45%] md:flex-1 h-[120px] md:h-[180px] max-w-[320px] overflow-hidden rounded-lg">
                    <img src="/images/webtasarim2.webp" alt="Website example" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="w-[45%] md:flex-1 h-[120px] md:h-[180px] max-w-[320px] overflow-hidden rounded-lg">
                    <img src="/images/webtasarim3.webp" alt="Website example" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="w-[45%] md:flex-1 h-[120px] md:h-[180px] max-w-[320px] overflow-hidden rounded-lg">
                    <img src="/images/webtasarim4.png" alt="Website example" className="w-full h-full object-cover object-top" />
                  </div>
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
                  Custom Web Design and Development
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  We design modern and impressive websites that best reflect your brand's digital identity. With our project-specific approach and experienced team, we take your business a step ahead in the digital world.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Prioritizing user experience, we create websites that focus on your visitors' needs and reflect your brand's values. With mobile-responsive designs and optimized user interfaces, we provide your customers with a seamless experience.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px] order-2 md:order-1">
                <img
                  src="/images/webgorsel.webp"
                  alt="Modern Web Technologies"
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
                  src="/images/webgorsel2.webp"
                  alt="Modern Web Technologies"
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Modern Web Technologies
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  Using the latest web technologies, we develop fast, secure and scalable web applications. We bring your projects to life with SEO-friendly coding and high-performance infrastructure.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  Projects we develop with modern frameworks like React, Next.js and the latest web standards offer high performance and user experience. We use our technical expertise for websites that comply with security standards, load fast and rank high in search engines.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{
          background: 'radial-gradient(100% 100% at 100% 110%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5'
        }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div>
                <h2 className={`${redHat.className} text-black text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8`}>
                  Custom Web Applications
                </h2>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal`}>
                  We develop custom web applications tailored to your business needs. We digitize your business processes with admin panels, customer portals and custom software solutions.
                </p>
                <p className={`${redHat.className} text-gray-600 text-base md:text-lg font-normal mt-4 md:mt-6`}>
                  We design user-friendly interfaces and powerful backend systems that contribute to your business growth and efficiency. We offer solutions that simplify your work with API integrations, database management and customized reporting tools.
                </p>
              </div>
              <div className="h-[300px] md:h-[400px]">
                <img
                  src="/images/webgorsel3.webp"
                  alt="Custom Web Applications"
                  className="w-full h-full object-cover object-center rounded-md"
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
                  Let's bring your web project to life step by step
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
                  title="Design and user experience"
                  isOpen={false}
                />
                <AccordionSection
                  number="3"
                  title="Development and coding"
                  isOpen={false}
                />
                <AccordionSection
                  number="4"
                  title="Testing and launch"
                  isOpen={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f0f5] py-16 md:py-32" style={{
          background: 'radial-gradient(100% 100% at 100% -10%, rgba(17, 251, 150, 0.2) 0%, rgba(17, 251, 150, 0) 100%), #f0f0f5'
        }}>
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <h2 className={`${redHat.className} text-center text-3xl md:text-4xl font-light mb-12 md:mb-20 text-black`}>
              Advantages of our web solutions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Responsive Design"
                description="We design mobile-friendly websites that look perfect on all devices. Whether your users are on phone, tablet, or desktop computer, your site works flawlessly on every screen."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
                title="Secure Infrastructure"
                description="We offer websites that comply with the latest security standards. We keep your customers' information safe with SSL certificates, secure payment systems and data protection measures."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Full Customization"
                description="We design fully customized websites that reflect your brand identity. Color schemes, fonts, images and content structure are all shaped according to your needs."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                title="SEO-Friendly Coding"
                description="We develop SEO-friendly websites that help you rank high in search engines. We increase your organic traffic with clean code structure, fast loading times and mobile compatibility."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                }
                title="Easy Management"
                description="You can easily update your website with user-friendly admin panels. Thanks to content management systems, you can edit your content without requiring technical knowledge."
              />

              <FeatureCard
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-[#11fb96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Fast Support"
                description="Our 24/7 technical support team is by your side for any issues with your website. We provide quick solutions to your problems and ensure your site stays up-to-date with update and maintenance services."
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
            <p className={`${redHat.className} text-gray-400 text-sm md:text-base font-normal`}>
              {number === "1" && "We analyze your business goals and needs in detail, determining the scope of your project. By evaluating your target audience, competitive environment and technical requirements, we create a customized roadmap for you."}
              {number === "2" && "We design interfaces that reflect your brand identity with a modern and user-friendly approach. Working closely with you during wireframe and prototype stages, we develop designs that fully meet your expectations."}
              {number === "3" && "We bring your project to life with clean, optimized and secure coding standards. Using modern technologies, we develop fast, scalable and SEO-friendly websites."}
              {number === "4" && "We check every detail of your project with comprehensive testing processes, fix bugs and optimize performance. We safely launch your site and provide continuous support."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}