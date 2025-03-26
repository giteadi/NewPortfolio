"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our company, our mission, and our team of experts.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <img
              src="https://res.cloudinary.com/bazeercloud/image/upload/v1742979041/download_8_evktcf.gif"
              alt="About Aditya Digital Solutions"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6">
              Aditya Digital Solutions was founded with a mission to help businesses navigate the complex digital
              landscape and leverage technology to achieve their goals.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in the industry, our team of experts combines technical expertise with
              creative thinking to deliver solutions that drive results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-600 mb-2">Our Mission</h4>
                <p className="text-gray-600">
                  To empower businesses with innovative digital solutions that drive growth and success.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-600 mb-2">Our Vision</h4>
                <p className="text-gray-600">
                  To be the leading digital transformation partner for businesses worldwide.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Expertise</h3>
              {[
                { label: "Innovation", value: 95 },
                { label: "Quality", value: 98 },
                { label: "Customer Satisfaction", value: 99 },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{stat.label}</span>
                    <span className="text-indigo-600 font-medium">{stat.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="bg-indigo-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Aditya Sharma",
                role: "Founder & CEO",
                image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742979256/WhatsApp_Image_2025-03-26_at_14.23.42_65c6df8d_cqnlgz.jpg",
              },
             
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                  <p className="text-indigo-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
