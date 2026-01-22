'use client'

import { useEffect, useState } from 'react'
import HeroVisual from './HeroVisual'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion'

const CONTACT_EMAIL = 'info@miaso.co'

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Returns empty on initial page load
  }

  return (
    <AuroraBackground className="h-[85vh]">
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-[90px] h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl pt-0 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-8 md:mt-0"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-left text-white">
                <span>The architect of your </span>
                <span style={{ color: '#11fb96' }}>digital</span>
                <span> world.</span>
              </h1>
              <p className="text-base lg:text-lg mb-8 text-gray-300 text-left max-w-xl leading-relaxed">
                We accelerate your growth by unlocking your business's digital potential. Web development, digital marketing, e-commerce solutions and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Contact%20Request%20from%20Website`}
                  className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-full transition-all"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="block lg:block mt-8 lg:mt-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default Hero