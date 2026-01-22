'use client'

import { motion } from 'framer-motion'
import { GlowingOrb } from './ui/glowing-orb'
import { useState, useEffect } from 'react'

const ArtificialIntelligence = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="text-white py-20 bg-[#050806]">
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
            Artificial Intelligence Technologies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Meet the technologies of the future
          </motion.h2>

          <div className="w-full mx-auto rounded-2xl h-[500px] overflow-hidden">
            <GlowingOrb
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-white text-2xl md:text-4xl font-light text-center"
              >
                Beyond digital transformation
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-white text-sm md:text-xl max-w-3xl mt-6 text-center"
              >
                We take your business to the future with AI-powered solutions. Data analytics,
                automatic optimization and smart insights give you a competitive advantage.
              </motion.p>
            </GlowingOrb>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ArtificialIntelligence 