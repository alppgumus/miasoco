'use client'

import { motion } from 'framer-motion'
import { Red_Hat_Display } from "next/font/google";
import { useState, useEffect } from 'react';

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
});

const sections = [
  { id: "general-provisions", title: "General Provisions" },
  { id: "service-scope", title: "Service Scope" },
  { id: "service-usage", title: "Service Usage" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "responsibilities", title: "Responsibilities" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "termination", title: "Termination" },
  { id: "contact", title: "Contact" }
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("general-provisions");

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
            Terms of Service
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These terms of service govern the conditions of use of all services offered by Miaso.
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
              {sections.map(section => (
                <section key={section.id} id={section.id} className="mb-16">
                  <h2 className={`${redHat.className} text-2xl md:text-3xl font-light mb-6 text-gray-900`}>
                    {section.title}
                  </h2>
                  {section.id === "general-provisions" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        These terms of service ("Agreement") govern the relationship between Miaso ("Company") and individuals or legal entities ("Customer") who wish to use our services.
                      </p>
                      <p className="text-gray-600 mb-4">
                        This agreement includes the rights and obligations of the parties, the scope of services, terms of use and other important matters. By starting to use our services, you are deemed to have accepted these terms.
                      </p>
                      <p className="text-gray-600">
                        Our company reserves the right to change the terms, services and pricing policies in this agreement, provided that prior notice is given.
                      </p>
                    </>
                  )}
                  {section.id === "service-scope" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Services offered by Miaso include the following:
                      </p>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">1. Digital Advertising Management</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Google Ads campaign management and optimization</li>
                        <li>Meta Ads (Facebook & Instagram) ad management</li>
                        <li>Ad copy and creative preparation</li>
                        <li>Target audience analysis and segmentation</li>
                        <li>Performance reporting and analysis</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">2. 360° Performance Marketing</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Digital marketing strategy development</li>
                        <li>Multi-channel marketing management</li>
                        <li>Conversion optimization</li>
                        <li>Analytics and data analysis</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">3. E-commerce Solutions</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>E-commerce site setup and customization</li>
                        <li>Payment system integration</li>
                        <li>Product catalog management</li>
                        <li>SEO optimization</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">4. Web Design and Development</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Custom website design and development</li>
                        <li>Web application development</li>
                        <li>Responsive design</li>
                        <li>UI/UX design</li>
                        <li>Maintenance and support services</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">5. Mobile App Development</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>iOS and Android app development</li>
                        <li>Cross-platform app development</li>
                        <li>UI/UX design</li>
                        <li>App maintenance and updates</li>
                        <li>App Store and Play Store management</li>
                      </ul>
                    </>
                  )}
                  {section.id === "service-usage" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        During the use of services, the Customer is obligated to:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Ensure that all information is accurate and up-to-date</li>
                        <li>Maintain account security</li>
                        <li>Act in accordance with laws and ethical rules</li>
                        <li>Avoid behaviors that could damage the Company&apos;s reputation</li>
                        <li>Not use the services for purposes other than intended</li>
                      </ul>
                    </>
                  )}
                  {section.id === "payment-terms" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Service fees and payment terms are arranged as follows:
                      </p>
                      <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Service fees are determined according to the selected package and service type</li>
                        <li>Payments are collected in advance at the start of service</li>
                        <li>Advertising expenses are billed separately</li>
                        <li>Service provision may be suspended in case of payment delays</li>
                        <li>Pricing policies may be updated according to market conditions</li>
                      </ul>
                    </>
                  )}
                  {section.id === "responsibilities" && (
                    <>
                      <h3 className="text-lg font-medium text-gray-800 mb-3">Company&apos;s Responsibilities</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-6">
                        <li>Uninterrupted and secure delivery of services</li>
                        <li>Protection of customer data</li>
                        <li>Providing technical support</li>
                        <li>Regular reporting</li>
                      </ul>

                      <h3 className="text-lg font-medium text-gray-800 mb-3">Customer&apos;s Responsibilities</h3>
                      <ul className="list-disc pl-6 text-gray-600 mb-4">
                        <li>Providing necessary content and materials</li>
                        <li>Providing timely feedback</li>
                        <li>Fulfilling payment obligations</li>
                        <li>Ensuring compliance with legal regulations</li>
                      </ul>
                    </>
                  )}
                  {section.id === "intellectual-property" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        All information belonging to our customers is kept confidential and is not shared with third parties. Collected data is only used to improve service quality and fulfill legal obligations.
                      </p>
                    </>
                  )}
                  {section.id === "termination" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        Our company reserves the right to change, update or terminate the services it provides without prior notice.
                      </p>
                    </>
                  )}
                  {section.id === "contact" && (
                    <>
                      <p className="text-gray-600 mb-4">
                        For all notifications regarding this agreement:
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
                    </>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}