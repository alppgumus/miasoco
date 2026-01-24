'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import { useState, useEffect } from 'react';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const sections = [
  { id: "general-info", title: "General Information" },
  { id: "collected-data", title: "Collected Data" },
  { id: "data-usage", title: "Data Usage" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "data-security", title: "Data Security" },
  { id: "cookies", title: "Cookies" },
  { id: "user-rights", title: "User Rights" },
  { id: "contact", title: "Contact" }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("general-info");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = sections[0].id;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#f0f0f5]">
      <div className="relative bg-[#050806] mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 pt-32 pb-16 text-center"
        >
          <h1 className={`${redHat.className} text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4`}>
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Protecting your personal data and privacy is important to us.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 pb-32">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Menu */}
          <div className="md:w-1/4">
            <div className="sticky top-32">
              <nav className="flex flex-col space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-4 py-2 rounded-lg transition-all ${activeSection === section.id
                        ? "bg-[#00c16a] text-white"
                        : "hover:bg-gray-100 text-gray-700"
                      }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-3/4">
            <div className="prose max-w-none">
              <section id="general-info" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>General Information</h2>
                <p className="text-gray-600 mb-4">
                  This privacy policy explains how Miaso ("we", "our" or "Company") collects, uses and protects your personal data. This policy has been prepared in accordance with the requirements of KVKK (Personal Data Protection Law No. 6698), GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act).
                </p>
                <p className="text-gray-600 mb-4">
                  This policy covers data collected while using our website, mobile applications and other digital platforms. By using our services, you agree to this privacy policy.
                </p>
                <p className="text-gray-600 mb-4">
                  We may update our policy from time to time. We will notify you in case of significant changes. Last update date of this policy: [04.03.2025].
                </p>
              </section>

              <section id="collected-data" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Collected Data</h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Directly Provided Data</h3>
                <p className="text-gray-600 mb-4">
                  Data you directly provide to us while using our services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Identity information (name, surname, national ID number)</li>
                  <li>Contact information (email, phone, address)</li>
                  <li>Company information (company name, tax number, address)</li>
                  <li>Billing and payment information</li>
                  <li>Account preferences and settings</li>
                  <li>Customer service conversations</li>
                  <li>Feedback and reviews</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Automatically Collected Data</h3>
                <p className="text-gray-600 mb-4">
                  Data automatically collected while using our services:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>IP address and location information</li>
                  <li>Device information (operating system, browser type)</li>
                  <li>Usage data (clicks, views, navigation)</li>
                  <li>Performance and error reports</li>
                  <li>Data collected through cookies and similar technologies</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. Data from Third Parties</h3>
                <p className="text-gray-600 mb-4">
                  Data we may receive from trusted third parties:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Data from advertising and analytics partners</li>
                  <li>Data from social media platforms</li>
                  <li>Data from publicly available sources</li>
                </ul>
              </section>

              <section id="data-usage" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Data Usage</h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Service Delivery and Improvement</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Creating and managing your account</li>
                  <li>Delivering and customizing our services</li>
                  <li>Providing customer support</li>
                  <li>Improving service quality</li>
                  <li>Resolving technical issues</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Communication and Marketing</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Informing about service updates</li>
                  <li>Sending personalized marketing messages</li>
                  <li>Customer satisfaction surveys</li>
                  <li>Event and campaign announcements</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. Analysis and Improvement</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Analyzing usage statistics</li>
                  <li>Measuring service performance</li>
                  <li>Improving user experience</li>
                  <li>Developing new features and services</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">4. Legal Obligations</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Fulfilling legal requirements</li>
                  <li>Preventing fraud and misuse</li>
                  <li>Detecting and preventing security breaches</li>
                  <li>Protecting legal rights</li>
                </ul>
              </section>

              <section id="data-sharing" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Data Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We only share your personal data with third parties in the following situations:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>When required by law</li>
                  <li>With your explicit consent</li>
                  <li>With our service providers (under data processing agreements)</li>
                  <li>In case of a company merger or acquisition</li>
                </ul>
              </section>

              <section id="data-security" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We take the following measures to protect your data:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>SSL/TLS encryption</li>
                  <li>Firewalls and antivirus systems</li>
                  <li>Regular security assessments</li>
                  <li>Employee privacy training</li>
                  <li>Data access control</li>
                </ul>
              </section>

              <section id="cookies" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Cookies</h2>

                <p className="text-gray-600 mb-4">
                  Cookies are small text files that help our website function more effectively. We use the following types of cookies:
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Essential Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies necessary for the basic functions of our website. Without these cookies, our website will not function properly.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Analytics Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies that help us understand how visitors use our website. This information is used to improve site performance.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. Functionality Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies that help us remember user preferences such as language selection.
                </p>

                <h3 className="text-lg font-medium text-gray-800 mb-3">4. Marketing Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies used to personalize advertising and marketing activities. You can disable these cookies.
                </p>

                <p className="text-gray-600 mt-6">
                  You can change your cookie preferences in your browser settings. However, disabling some cookies may affect the proper functioning of some features of our website.
                </p>
              </section>

              <section id="user-rights" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>User Rights</h2>
                <p className="text-gray-600 mb-4">
                  Your rights under KVKK, GDPR and CCPA:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-4">
                  <li>Right to access your data</li>
                  <li>Right to rectify your data</li>
                  <li>Right to request deletion of your data</li>
                  <li>Right to restrict data processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object</li>
                </ul>
              </section>

              <section id="contact" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Contact</h2>
                <p className="text-gray-600 mb-4">
                  For questions about our privacy policy, you can contact us:
                </p>
                <ul className="list-none text-gray-600">
                  <li className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@miaso.co" className="text-[#00c16a] hover:underline">
                      info@miaso.co
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+905512351626" className="text-[#00c16a] hover:underline">
                      0551 235 16 26
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}