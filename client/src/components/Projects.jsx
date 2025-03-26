"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaUtensils, FaHome, FaDoorOpen, FaExternalLinkAlt, FaCloudSun, FaBuilding, FaLeaf } from "react-icons/fa"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "King of Clouds Sky Dining",
      category: "restaurant",
      description:
        "An elevated dining experience where guests can enjoy meals suspended in the sky, offering breathtaking views and unforgettable moments.",
      features: ["Suspended dining platform", "Panoramic views", "Unique culinary experience", "Online booking system"],
      image:
        "https://sjc.microlink.io/-5JPTPmCJwFskbawV2n-dfwHl85WAnGFd55dC2_Goygbpra4o1mmeqDOeu_pgrpe_Oi5ULW479-JNpKK4KcWzA.jpeg",
      link: "https://kingofcloudsskydining.in/",
      icon: <FaCloudSun className="text-yellow-500" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Bharat Roofers Real Estate",
      category: "realestate",
      description:
        "A comprehensive real estate platform for buying, selling, and renting properties across various categories including villas, houses, land, and commercial spaces.",
      features: ["Property listings", "Advanced search filters", "Multiple property categories", "User registration"],
      image:
        "https://sjc.microlink.io/tRwGZoDetFGUe2WXEIX07K1IXStjnMSPnpeASXRB9AASKwwY2j4-vOIHI1NxwT_ScN_Aiq9P-JK1JRQGhOtlWA.jpeg",
      link: "https://real-estate.doaguru.com/",
      icon: <FaBuilding className="text-blue-500" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      title: "Sars Decor WPC Doors",
      category: "interior",
      description:
        "Premium Wood Plastic Composite doors that combine sustainability, durability, and style with eco-friendly manufacturing technology.",
      features: ["Eco-friendly materials", "Low maintenance", "Energy efficient", "Customizable designs"],
      image:
        "https://sjc.microlink.io/_7QO5iVdEjjKij4boOv2i3RCJwUgBXOgbrPZcuVu3menVSOOoRYmlW8wa1nDXaBPDpFBL8mcZwUoo-GXdufG1Q.jpeg",
      link: "https://www.sarsdecor.com/",
      icon: <FaLeaf className="text-green-500" />,
      color: "from-green-400 to-green-600",
    },
  ]

  // Filter projects based on activeTab
  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Handle filter button click
  const handleFilterClick = (category) => {
    console.log("Filter clicked:", category)
    setActiveTab(category)
  }

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing some of my recent work across different industries and technologies.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => handleFilterClick("all")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === "all"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <FaHome />
            <span>All Projects</span>
          </button>

          <button
            onClick={() => handleFilterClick("restaurant")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === "restaurant"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <FaUtensils />
            <span>Restaurant</span>
          </button>

          <button
            onClick={() => handleFilterClick("realestate")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === "realestate"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <FaBuilding />
            <span>Real Estate</span>
          </button>

          <button
            onClick={() => handleFilterClick("interior")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === "interior"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <FaDoorOpen />
            <span>Interior</span>
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, variants }) {
  return (
    <motion.div
      variants={variants}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden group">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 p-3 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
        <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">{project.icon}</div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800">Key Features:</h4>
          <ul className="grid grid-cols-2 gap-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            Visit Website <FaExternalLinkAlt size={12} className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

