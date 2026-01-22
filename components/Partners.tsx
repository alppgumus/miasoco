'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Partners = () => {
  return (
    <section className="bg-[#050806] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Partners
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-items-center max-w-[800px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-[200px] h-[60px]"
          >
            <Image
              src="/images/footer-google.webp"
              alt="Google Partner"
              fill
              sizes="200px"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-[200px] h-[60px]"
          >
            <Image
              src="/images/meta.webp"
              alt="Meta Partner"
              fill
              sizes="200px"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full max-w-[200px] h-[60px]"
          >
            <Image
              src="/images/tiktoklogo.png"
              alt="TikTok Partner"
              fill
              sizes="200px"
              style={{ objectFit: 'contain' }}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div >
    </section >
  )
}

export default Partners 