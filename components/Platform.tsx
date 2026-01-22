'use client'

import { motion } from 'framer-motion'

const Platform = () => {
  return (
    <section className="relative -mt-8 bg-[#050806] text-white rounded-[48px] overflow-hidden pt-32 p-12 md:p-20 pb-32 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[2400px] mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-light mb-16">
          One address for all your digital solutions
        </h2>
        <p className="text-xl md:text-3xl font-light text-gray-400 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text [transition:color_0.3s_ease] text-gray-400 hover:text-transparent inline-block">
              Stand out online and on mobile.
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="block"
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text [transition:color_0.3s_ease] text-gray-400 hover:text-transparent inline-block">
              Grow locally and globally.
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="block"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text [transition:color_0.3s_ease] text-gray-400 hover:text-transparent inline-block">
              Highlight your brand.
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="block"
          >
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text [transition:color_0.3s_ease] text-gray-400 hover:text-transparent inline-block">
              Control your digital world.
            </span>
          </motion.span>
        </p>
      </motion.div>
    </section>
  )
}

export default Platform