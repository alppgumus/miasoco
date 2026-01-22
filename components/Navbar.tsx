'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { usePathname } from 'next/navigation'

const CONTACT_EMAIL = 'info@miaso.co'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const navRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownButtonRef = useRef<HTMLButtonElement>(null)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If clicked element is inside dropdown or is the dropdown button, do nothing
      if (
        dropdownRef.current?.contains(event.target as Node) ||
        dropdownButtonRef.current?.contains(event.target as Node)
      ) {
        return
      }

      // Otherwise close the dropdown
      setIsSolutionsOpen(false)
    }

    // Event listener'ı sadece dropdown açıkken ekle
    if (isSolutionsOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isSolutionsOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsSolutionsOpen(false)
  }, [pathname])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleSolutions = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSolutionsOpen(!isSolutionsOpen)
  }

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isSolutionsOpen) {
      setIsSolutionsOpen(false)
    }
  }

  // Render a static shell during SSR to prevent CLS
  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex justify-center border-b border-transparent">
          <div className="h-[72px] w-full max-w-[1448px] px-4 md:px-[90px] flex items-center justify-between relative">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center h-full">
                <img
                  src="/miasologo.png"
                  alt="Miaso"
                  className="h-[40px] w-[125px]"
                  width={125}
                  height={40}
                />
              </Link>
              <div className="hidden md:flex items-center space-x-3">
                <div className="relative">
                  <button className="flex items-center text-white hover:text-gray-200 transition-colors px-4 py-2 text-[15px]">
                    <span>Solutions</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                <Link href="/aboutus" className="px-4 py-2 text-white hover:text-gray-200 transition-colors text-[15px]">
                  About Us
                </Link>
                <Link href="/contact" className="px-4 py-2 text-white hover:text-gray-200 transition-colors text-[15px]">
                  Contact
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="flex items-center justify-center space-x-2 h-[44px] w-[151.25px] rounded-full border border-white/20 bg-black/10 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact Us</span>
              </button>
            </div>
            {/* Mobile Menu Button - always visible on mobile */}
            <button className="md:hidden text-white p-2" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isSolutionsOpen || isMobileMenuOpen ? 'bg-black' : 'bg-transparent'
          }`}
      >
        <div className={`flex justify-center border-b transition-colors duration-300 ${isSolutionsOpen ? 'border-gray-700' : 'border-transparent'}`}>
          <div className="h-[72px] w-full max-w-[1448px] px-4 md:px-[90px] flex items-center justify-between relative">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex items-center h-full">
                <img
                  src="/miasologo.png"
                  alt="Miaso"
                  className="h-[40px] w-[125px]"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-3">
                {/* Solutions Dropdown */}
                <div className="relative">
                  <button
                    ref={dropdownButtonRef}
                    onClick={toggleSolutions}
                    className="flex items-center text-white hover:text-gray-200 transition-colors px-4 py-2 relative group text-[15px]"
                  >
                    <span>Solutions</span>
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-opacity duration-200 ${isSolutionsOpen ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 z-10`}></span>
                  </button>
                </div>

                <Link href="/aboutus" className="px-4 py-2 text-white hover:text-gray-200 transition-colors relative group text-[15px]">
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-opacity duration-200 opacity-0 group-hover:opacity-100 -mb-[1px]"></span>
                </Link>

                <Link href="/contact" className="px-4 py-2 text-white hover:text-gray-200 transition-colors relative group text-[15px]">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-opacity duration-200 opacity-0 group-hover:opacity-100 -mb-[1px]"></span>
                </Link>
              </div>
            </div>

            {/* Desktop Call Button */}
            <div className="hidden md:flex items-center">
              <HoverBorderGradient
                as="a"
                href={`mailto:${CONTACT_EMAIL}?subject=Contact%20Request%20from%20Website`}
                containerClassName="rounded-full"
                className="flex items-center justify-center space-x-2 h-[44px] w-[151.25px]"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Contact Us</span>
              </HoverBorderGradient>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuClick}
              className="md:hidden text-white p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Menu */}
        <AnimatePresence mode="wait">
          {isSolutionsOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.3
              }}
              className="hidden md:block w-full border-t border-gray-700 bg-black absolute top-[72px]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="max-w-[1448px] mx-auto px-[90px]"
              >
                <div className="grid grid-cols-3 gap-8 py-8">
                  {/* Design & Development */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
                      <div className="w-8 h-8 rounded-full bg-teal-900 flex items-center justify-center">
                        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white">Design & Development</h3>
                    </div>
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="space-y-2"
                    >
                      <li><Link href="/website" className="text-gray-400 hover:text-white">Website/Web App</Link></li>
                      <li><Link href="/mobileapp" className="text-gray-400 hover:text-white">Mobile Application</Link></li>
                    </motion.ul>
                  </motion.div>


                  {/* Marketing */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
                      <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-white">Marketing</h3>
                    </div>
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="space-y-2"
                    >
                      <li><Link href="/360performance" className="text-gray-400 hover:text-white">360° Performance Marketing</Link></li>
                      <li><Link href="/socialmedia" className="text-gray-400 hover:text-white">Meta Ads / Social Media Management</Link></li>
                      <li><Link href="/googleads" className="text-gray-400 hover:text-white">Google Ads Management</Link></li>
                    </motion.ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-black overflow-hidden"
            >
              <div className="px-4 py-4">
                <div className="space-y-4">
                  <button
                    onClick={toggleSolutions}
                    className="w-full text-left text-white py-2 flex items-center justify-between"
                  >
                    <span>Solutions</span>
                    <motion.svg
                      animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="pl-4 space-y-2"
                      >
                        {/* Design & Development */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="space-y-2 mb-4"
                        >
                          <h3 className="text-white font-semibold flex items-center space-x-2 pb-2 border-b border-gray-700">
                            <div className="w-6 h-6 rounded-full bg-teal-900 flex items-center justify-center">
                              <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <span>Design & Development</span>
                          </h3>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                          >
                            <Link href="/website" className="block text-gray-400 hover:text-white">Website/Web App</Link>
                            <Link href="/mobileapp" className="block text-gray-400 hover:text-white">Mobile Application</Link>
                          </motion.div>
                        </motion.div>


                        {/* Marketing */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-2"
                        >
                          <h3 className="text-white font-semibold flex items-center space-x-2 pb-2 border-b border-gray-700">
                            <div className="w-6 h-6 rounded-full bg-purple-900 flex items-center justify-center">
                              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <span>Marketing</span>
                          </h3>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-2"
                          >
                            <Link href="/360performance" className="block text-gray-400 hover:text-white">360° Performance Marketing</Link>
                            <Link href="/socialmedia" className="block text-gray-400 hover:text-white">Meta Ads / Social Media Management</Link>
                            <Link href="/googleads" className="block text-gray-400 hover:text-white">Google Ads Management</Link>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="pt-2"
                  >
                    <Link href="/aboutus" className="block text-white py-2">
                      About Us
                    </Link>
                    <Link href="/contact" className="block text-white py-2">
                      Contact
                    </Link>

                    {/* Mobile Call Button */}
                    <motion.a
                      href={`mailto:${CONTACT_EMAIL}?subject=Contact%20Request%20from%20Website`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white text-black w-full h-[44px] rounded-full transition-colors flex items-center justify-center space-x-2 mt-4"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>Contact Us</span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </>
  )
}

export default Navbar 