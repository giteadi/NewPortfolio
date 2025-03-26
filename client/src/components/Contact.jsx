"use client"

import { motion } from "framer-motion"
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
         
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* WhatsApp Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 flex flex-col justify-center items-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-6">Contact via WhatsApp</h3>
                <div className="text-center mb-8">
                  <p className="text-gray-600 mb-4">
                    The fastest way to reach me is through WhatsApp. Click the button below to start a conversation.
                  </p>
                  <a
                    href="https://wa.me/917974507514"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-4 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp size={24} className="mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="w-full mt-6">
                  <p className="text-gray-700 text-center">
                    Or call directly: <span className="font-semibold">+91 7974507514</span>
                  </p>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-indigo-600 text-white p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-indigo-100">Address</p>
                      <p className="text-indigo-200 mt-1">Jabalpur, Madhya Pradesh, India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-indigo-100">Phone</p>
                      <p className="text-indigo-200 mt-1">+91 7974507514</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-indigo-100">Email</p>
                      <p className="text-indigo-200 mt-1">adityasharma10102000@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/bazeer01/"
                      className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-400 transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/i_amzeer/"
                      className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-400 transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="https://github.com/giteadi/"
                      className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white hover:bg-indigo-400 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

