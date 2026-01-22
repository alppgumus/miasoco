'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { LazyVideo } from './ui/LazyVideo'

const WebDevelopment = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="bg-[#050806] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 mb-4"
          >
            Web Development
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Grow your business with powerful web solutions
          </motion.h2>

          {/* Video Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl bg-[#061a1c] p-8 overflow-hidden mb-12"
          >
            <LazyVideo
              src="videos/webdevelopment.webm"
              mobileSrc="videos/webdevelopmentmobile.webm"
              type="video/webm"
              className="w-full h-auto rounded-lg mix-blend-screen bg-transparent"
              style={{
                mixBlendMode: 'screen',
                background: 'transparent',
                WebkitMaskImage: '-webkit-radial-gradient(white, black)'
              }}
            />
          </motion.div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Bottom Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <h3 className="text-2xl font-light mb-4">
                Customized Solutions
              </h3>
              <p className="text-gray-400">
                Strengthen your digital presence with web solutions tailored to your business needs. Stand out with responsive design, SEO-compatible coding, and high performance.
              </p>
            </motion.div>

            {/* Right Bottom Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <h3 className="text-2xl font-light mb-4">
                Secure Infrastructure
              </h3>
              <p className="text-gray-400">
                We provide uninterrupted service with high-performance server infrastructure protected by the latest security standards and 24/7 technical support.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WebDevelopment 