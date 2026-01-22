'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [phoneNumber, setPhoneNumber] = useState('+90')
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  })

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.company.trim() !== '' &&
      formData.email.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      phoneNumber.length === 13
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.startsWith('+90')) {
      const numbers = value.slice(3).replace(/[^\d]/g, '')
      if (numbers.length <= 10) {
        setPhoneNumber(`+90${numbers}`)
      }
    } else {
      setPhoneNumber('+90')
    }
  }

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    if (target.selectionStart && target.selectionStart <= 3) {
      target.selectionStart = 3
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: phoneNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'An error occurred');
      }

      // Form successfully submitted
      alert('Your message has been sent successfully!');
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
      })
      setPhoneNumber('+90')
      setIsSubmitting(false)
      onClose()
    } catch (error) {
      alert('An error occurred while sending your message. Please try again.');
      console.error('Form submission error:', error);
      setIsSubmitting(false)
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-30 backdrop-blur-sm"
        >
          <div
            className="flex min-h-full items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              className="relative w-full max-w-lg bg-white rounded-lg px-4 pb-4 pt-5 shadow-xl sm:p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute right-0 top-0 pr-4 pt-4">
                <button
                  type="button"
                  className="rounded-md bg-white text-gray-400 hover:text-gray-500 transition-colors duration-200"
                  onClick={onClose}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-3xl font-semibold leading-7 text-gray-900">
                  Fill out the form for more info,
                  <br />
                  we'll call you.
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="relative">
                    <label className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                    />
                  </div>

                  <div className="relative">
                    <label className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900">
                      Phone
                    </label>
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      name="phone"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      onClick={() => {
                        if (phoneInputRef.current) {
                          phoneInputRef.current.selectionStart = phoneNumber.length
                        }
                      }}
                      className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={!isFormValid() || isSubmitting}
                      className={`w-full h-[44px] rounded-full transition-colors flex items-center justify-center space-x-2 ${isFormValid() && !isSubmitting
                          ? 'bg-black hover:bg-gray-900 text-white'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 