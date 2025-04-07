"use client"

import { useState } from "react"
import { Calendar, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

export default function WorkSection() {
  const [expandedId, setExpandedId] = useState(null)

  // Work data - easy to manage and replace
  const projects = [
    {
      id: 1,
      title: "Asia Sistem Indonesia",
      categories: "System Administration - Infrastructure - Technical Support",
      logo: "/public/AsiaSistem.jpeg?height=50&width=50",
      period: "June 2024 - Present",
      description: "Managed server infrastructure and provided technical support for enterprise clients.",
      fullDescription:
        "Responsible for maintaining and optimizing Linux and Windows server environments, implementing security protocols, and providing technical support for enterprise clients. Collaborated with the development team to ensure smooth deployment of applications and services.",
      jobDesc: [
        "Managed and maintained Linux and Windows server environments",
        "Implemented weekly automation for database backup",
        "Provided technical support for enterprise clients",
        "Collaborated with development team for application deployment",
        "Monitored system performance and optimized resources",
      ],
      screenshots: ["/placeholder.svg?height=250&width=450", "/placeholder.svg?height=250&width=450"],
    },
    {
      id: 2,
      title: "Ayu Derma Pharmacy",
      categories: "Hardware Troubleshooting - IT Staff",
      logo: "/placeholder.svg?height=50&width=50",
      period: "January 2022 - April 2024",
      description: "Provided IT support and hardware troubleshooting for pharmacy systems.",
      fullDescription:
        "Served as IT staff responsible for maintaining computer systems, troubleshooting hardware issues, and ensuring the pharmacy management software ran smoothly. Implemented backup solutions and trained staff on basic IT procedures.",
      jobDesc: [
        "Maintained computer systems and network infrastructure",
        "Troubleshot hardware and software issues",
        "Implemented backup and recovery solutions",
        "Trained staff on basic IT procedures",
        "Managed pharmacy management software",
      ],
      screenshots: ["/placeholder.svg?height=250&width=450", "/placeholder.svg?height=250&width=450"],
    },
    {
      id: 3,
      title: "GASSOLUTION",
      categories: "Windows Troubleshooting - Helpdesk Support - IT Support",
      logo: "/placeholder.svg?height=50&width=50",
      period: "January 2023 - April 2023",
      description: "Provided helpdesk and IT support for Windows-based systems.",
      fullDescription:
        "Worked as helpdesk support specialist, resolving Windows-based system issues, assisting users with software and hardware problems, and documenting solutions for future reference. Participated in system upgrades and maintenance activities.",
      jobDesc: [
        "Resolved Windows-based system issues",
        "Assisted users with software and hardware problems",
        "Documented solutions for knowledge base",
        "Participated in system upgrades and maintenance",
        "Provided remote support for distributed teams",
      ],
      screenshots: ["/placeholder.svg?height=250&width=450", "/placeholder.svg?height=250&width=450"],
    },
  ]

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="work" className="section-container bg-dark">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div className="animate-on-scroll">
          <h2 className="section-heading text-amber-400">Recent Work</h2>
          <p className="text-gray-300 mt-10 text-2xl animate-on-scroll delay-100">
            Explore my professional experience and projects I've worked on.
          </p>

          <button className="mt-10 px-10 py-5 bg-gradient-gold text-white rounded-full text-xl font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl gold-shadow animate-on-scroll delay-200">
            View All Projects
          </button>
        </div>
        <div className="md:col-span-2">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-on-scroll mb-8" style={{ transitionDelay: `${index * 150}ms` }}>
              <div
                className="border-t border-amber-900/30 py-10 group hover:bg-[#252525] transition-colors rounded-xl px-8 cursor-pointer"
                onClick={() => handleToggle(project.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <div className="mr-6 mt-1">
                      <img
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        className="w-14 h-14 rounded-md object-contain bg-gray-800 p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-400 transition-colors text-gray-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xl mb-3">{project.categories}</p>
                      <div className="flex items-center text-amber-500/80 text-lg">
                        <Calendar size={20} className="mr-2" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="p-3 rounded-full bg-amber-900/20 text-amber-400 hover:bg-amber-900/40 transition-colors"
                    aria-label={expandedId === project.id ? "Collapse details" : "Expand details"}
                  >
                    {expandedId === project.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                </div>

                {expandedId === project.id && (
                  <div className="work-detail mt-8 animate-[fadeIn_0.3s_ease-out]">
                    <p className="text-gray-300 text-xl mb-8">{project.fullDescription}</p>

                    <h4 className="text-amber-500 font-medium mb-5 text-xl">Responsibilities:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      {project.jobDesc.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-lg">
                          <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-amber-500 font-medium mb-5 text-xl">Project Screenshots:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.screenshots.map((screenshot, i) => (
                        <div
                          key={i}
                          className="rounded-lg overflow-hidden border border-gray-700 hover:border-amber-600/50 transition-all shadow-lg hover:shadow-xl"
                        >
                          <img
                            src={screenshot || "/placeholder.svg"}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 text-right">
                      <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 bg-amber-700/20 hover:bg-amber-700/40 text-amber-300 rounded-lg transition-colors text-lg"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        View Project Details
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

