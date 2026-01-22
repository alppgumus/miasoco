'use client'

import { motion } from 'framer-motion'
import { LazyVideo } from './ui/LazyVideo'

const CustomerConnection = () => {
  return (
    <section className="bg-[#050806] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            Customer Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Connect with your customers
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Video Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#061a1c] p-8 overflow-hidden"
            >
              <div className="w-full relative">
                <LazyVideo
                  src="/videos/customersvideo.webm"
                  type="video/webm"
                  className="w-full h-auto rounded-lg"
                  style={{ background: 'transparent' }}
                />
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl font-light mb-4 mt-6"
              >
                Acquire customers at lower cost
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400"
              >
                Acquire new customers and turn them into loyal customers with our integrated marketing tools and analytics solutions.
              </motion.p>
            </motion.div>

            {/* Right Video Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <div className="w-full relative">
                <LazyVideo
                  src="/videos/cartvideo.webm"
                  type="video/webm"
                  className="w-full h-auto rounded-lg"
                  style={{ background: 'transparent' }}
                />
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl font-light mb-4 mt-6"
              >
                Capture new opportunities with B2B
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-400"
              >
                Create special experiences for wholesale buyers, offer flexible pricing and payment options.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CustomerConnection