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
  { id: "cookie-types", title: "Cookie Types" },
  { id: "cookie-usage", title: "Cookie Usage" },
  { id: "third-party", title: "Third Party Cookies" },
  { id: "cookie-management", title: "Cookie Management" },
  { id: "cookie-preferences", title: "Cookie Preferences" },
  { id: "contact", title: "Contact" }
];

export default function CookiePolicy() {
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
            Cookie Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Detailed information about cookies used on our website.
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
                  This Cookie Policy has been prepared to provide information about cookies and similar technologies used on the Miaso website. This policy has been prepared in accordance with KVKK (Law No. 6698), GDPR and CCPA requirements.
                </p>
                <p className="text-gray-600 mb-4">
                  Cookies are small text files placed in your browser when you visit our website. These files help us provide you with a better user experience.
                </p>
                <p className="text-gray-600 mb-4">
                  Last update date: [04.03.2025]
                </p>
              </section>

              <section id="cookie-types" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Cookie Types</h2>

                <h3 className="text-lg font-medium text-gray-800 mb-3">1. Essential Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies necessary for our website to function properly. These cookies:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Session management</li>
                  <li>Security measures</li>
                  <li>Basic site functionality</li>
                  <li>Shopping cart management</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">2. Performance Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies that analyze site performance and usage:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Visitor statistics</li>
                  <li>Page loading times</li>
                  <li>Error reports</li>
                  <li>User behaviors</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">3. Functionality Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies that remember user preferences:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Language preferences</li>
                  <li>Region settings</li>
                  <li>Customized display settings</li>
                  <li>Session information</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800 mb-3">4. Marketing Cookies</h3>
                <p className="text-gray-600 mb-4">
                  Cookies used for advertising and marketing purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Advertising performance tracking</li>
                  <li>Targeted advertising</li>
                  <li>User preferences</li>
                  <li>Social media integrations</li>
                </ul>
              </section>

              <section id="cookie-usage" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Cookie Usage</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>To provide basic functions of our website</li>
                  <li>To improve site performance and usability</li>
                  <li>To enhance user experience</li>
                  <li>To ensure security</li>
                  <li>To fulfill legal obligations</li>
                </ul>
              </section>

              <section id="third-party" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Third Party Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Third-party service provider cookies are also used on our website:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Google Analytics (analytics)</li>
                  <li>Facebook Pixel (marketing)</li>
                  <li>Google Ads (advertising)</li>
                  <li>Hotjar (user experience)</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  These third-party cookies are subject to the privacy policies of the respective service providers.
                </p>
              </section>

              <section id="cookie-management" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Cookie Management</h2>
                <p className="text-gray-600 mb-4">
                  You can manage cookies in the following ways:
                </p>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Browser Settings</h3>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Chrome</li>
                  <li>Firefox</li>
                  <li>Safari</li>
                  <li>Edge</li>
                </ul>
                <p className="text-gray-600 mb-4">
                  Some site features may not function properly if you disable cookies.
                </p>
              </section>

              <section id="cookie-preferences" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Cookie Preferences</h2>
                <p className="text-gray-600 mb-4">
                  Your rights under GDPR, KVKK and CCPA:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  <li>Accept or reject cookie usage</li>
                  <li>Change cookie preferences</li>
                  <li>Access cookie information</li>
                  <li>Request deletion of cookies</li>
                </ul>
              </section>

              <section id="contact" className="mb-16">
                <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>Contact</h2>
                <p className="text-gray-600 mb-4">
                  For questions about our cookie policy, you can contact us:
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