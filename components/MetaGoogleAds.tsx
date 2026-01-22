'use client'

import { motion } from 'framer-motion'
import { LazyVideo } from './ui/LazyVideo'

const MetaGoogleAds = () => {
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
            Meta & Google Ads
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-16"
          >
            Reach your target audience
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#061a1c] p-8 overflow-hidden"
            >
              <div className="w-full relative">
                <LazyVideo
                  src="/videos/metainstagram.webm"
                  type="video/webm"
                  className="w-full h-auto rounded-lg"
                  style={{ background: 'transparent' }}
                />
              </div>
              <h3 className="text-2xl font-light mb-4 mt-6">
                Meta and Instagram Ads
              </h3>
              <p className="text-gray-400">
                Reach your target audience on social media platforms and increase your sales
              </p>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-2xl bg-[#0c2626] p-8 overflow-hidden"
            >
              <div className="w-full relative">
                <LazyVideo
                  src="/videos/googleads.webm"
                  type="video/webm"
                  className="w-full h-auto rounded-lg"
                  style={{ background: 'transparent' }}
                />
              </div>
              <h3 className="text-2xl font-light mb-4 mt-6">
                Google Ads
              </h3>
              <p className="text-gray-400">
                Rank high in search results and reach your potential customers
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MetaGoogleAds