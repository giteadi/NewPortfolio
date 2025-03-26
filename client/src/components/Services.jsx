"use client"

import { motion } from "framer-motion"
import { FiMonitor, FiSmartphone, FiCode, FiDatabase, FiServer, FiShield } from "react-icons/fi"

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital world.
          </p>
        </motion.div>

        {/* Services Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
       <div className="relative w-full max-h-96">
  <img
    src="https://res.cloudinary.com/bazeercloud/image/upload/v1741277033/medium-shot-man-wearing-vr-glasses_zcocte.jpg"
    alt="Our Services"
    className="w-full max-h-96 rounded-lg shadow-xl object-cover"
  />
  <video
    src="https://res.cloudinary.com/bazeercloud/video/upload/v1741277511/1107907_1080p_4k_1920x1080_cezmvq.mp4"
    className="absolute bottom-4 right-4 w-60 h-48 rounded-lg shadow-xl border-2 border-white"
    autoPlay
    loop
    muted
  />
</div>


        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FiMonitor size={40} />,
              title: "Web Development",
              description:
                "Custom websites and web applications built with the latest technologies to deliver exceptional user experiences.",
              image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742975805/Coding_Work_From_Home_GIF_by_Domme_Space_wyahp1.gif",
            },
            {
              icon: <FiSmartphone size={40} />,
              title: "Mobile App Development",
              description: "Native and cross-platform mobile applications that work seamlessly across all devices.",
              image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742977582/download_4_nz5ryr.gif",
            },
            {
              icon: <FiCode size={40} />,
              title: "Custom Software",
              description:
                "Tailored software solutions designed to address your specific business challenges and requirements.",
              image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742975808/From_Software_Announcement_GIF_by_BANDAI_NAMCO_zzdkwn.gif",
            },
            {
              icon: <FiDatabase size={40} />,
              title: "Data Analytics",
              description:
                "Transform your data into actionable insights with our advanced analytics and visualization services.",
              image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742977810/download_6_mkshz5.gif",
            },
            {
              icon: <FiServer size={40} />,
              title: "Cloud Solutions",
              description:
                "Scalable and secure cloud infrastructure to optimize your business operations and reduce costs.",
              image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742975805/Cloud_Blockchain_GIF_by_Jibrel_tyyptw.gif",
            },
            {
              icon: <FiShield size={40} />,
              title: "Cybersecurity",
              description: "Protect your digital assets with our comprehensive security solutions and best practices.",
              image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742975806/Computer_Science_Security_GIF_by_Sandia_National_Labs_zj9axp.gif",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to deliver high-quality solutions that meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and requirements.",
                image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742978877/science_fiction_cyberpunk_GIF_by_Abel_M_Vada_nibv8j.gif",
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed plan and roadmap for your project.",
                image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742977732/download_5_g1ulko.gif",
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution using the latest technologies.",
                image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742978876/download_7_fu0afr.gif",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deploy your solution and provide ongoing support.",
                image: "https://res.cloudinary.com/bazeercloud/image/upload/v1742978875/Hungry_Fast_Food_GIF_by_Anchor_Point_brgnnq.gif",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6 mx-auto">
                  <img
                    src={process.image || "/placeholder.svg"}
                    alt={process.title}
                    className="w-32 h-32 mx-auto rounded-full object-cover" loading="lazy"
                  />
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

