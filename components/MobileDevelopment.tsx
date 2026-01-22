'use client'

import { motion } from 'framer-motion'
import { LazyVideo } from './ui/LazyVideo'

const MobileDevelopment = () => {
  return (
    <section className="relative -mt-8 bg-[#f0f0f5] text-black rounded-t-[48px] overflow-hidden pt-32 p-12 md:p-20">
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
            Mobile App Development
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Take your place in the mobile world
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl md:text-3xl font-light"
              >
                User-friendly mobile applications
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-600 text-lg"
              >
                We develop modern, high-performance, and user-friendly mobile applications for iOS and Android platforms.
                Take your business to the mobile world and reach your customers anytime, anywhere.
              </motion.p>
            </motion.div>

            {/* Right Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden"
            >
              <LazyVideo
                src="videos/mobileappdevelopment.mp4"
                type="video/mp4"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MobileDevelopment