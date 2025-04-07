"use client"

import { useState } from "react"
import { GraduationCap, Calendar, MapPin, ChevronRight } from "lucide-react"

export default function EducationSection() {
  const [activeTab, setActiveTab] = useState(1)

  const education = [
    {
      id: 1,
      institution: "Cakrawala University",
      degree: "Bachelor of Computer Science",
      field: "Information System and Technology",
      location: "Jakarta, Indonesia",
      period: "2024 - 2028",
      description: "Learned on Software Development include Frontend and Relational Database fundamental, Information System Management & Bussiness, Network Architecture, etc.",
      fullDescription:
        "Gained hands-on experience in software development focusing on C++ and JavaScript, with a solid understanding of frontend development, relational databases, and structured information systems. Also explored essential concepts in network architecture and IT infrastructure.",
      courses: ["Information System Management", "Bussiness and Technology Modelling", "Database Modelling and Query Languages ", "Web Client Development", "User Experience Design", "Object Oriented Programming"],
    },
    {
      id: 2,
      institution: "SMK-TI Umar Fatah",
      degree: "Vocational High School",
      field: "Computer and Network Engineering",
      location: "Rembang, Indonesia",
      period: "2021 - 2024",
      description:
        "Learned fundamentals of Network, Linux System Administration, and Software Fundamentals such as HTML and CSS.",
      fullDescription:
        "Participated in network simulations, Linux configuration practices, and local tech competitions during the final year of school.",
      courses: ["Computer Network Basics", "Linux System Administration", "HTML CSS Fundamentals", "Computer Hardware"],
    },
  ]

  return (
    <section id="education" className="section-container bg-dark">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div className="animate-on-scroll">
          <h2 className="section-heading text-amber-400">Education</h2>

          <div className="mt-16 space-y-6">
            {education.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-amber-900/30 to-transparent border-l-4 border-amber-500 pl-5"
                    : "hover:bg-[#252525]/30"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      activeTab === item.id ? "bg-amber-900/30 text-amber-400" : "bg-[#252525] text-gray-400"
                    }`}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${activeTab === item.id ? "text-amber-400" : "text-gray-300"}`}>
                      {item.institution}
                    </h3>
                    <p className="text-gray-400">{item.period}</p>
                  </div>
                  {activeTab === item.id && <ChevronRight size={24} className="ml-auto text-amber-500" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          {education.map((item) => (
            <div
              key={item.id}
              className={`transition-all duration-500 ${
                activeTab === item.id
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 absolute -z-10 transform translate-y-8"
              }`}
            >
              {activeTab === item.id && (
                <div className="bg-[#252525] rounded-2xl p-10 shadow-xl border border-amber-900/20 animate-fadeIn">
                  <div className="mb-8 pb-8 border-b border-amber-900/20">
                    <h3 className="text-4xl font-bold mb-3 text-amber-400">{item.institution}</h3>
                    <h4 className="text-2xl mb-6 text-gray-300">
                      {item.degree} • <span className="text-amber-500">{item.field}</span>
                    </h4>

                    <div className="flex flex-wrap gap-8 mb-6">
                      <div className="flex items-center text-gray-400 text-lg">
                        <Calendar size={20} className="mr-3 text-amber-600/70" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-lg">
                        <MapPin size={20} className="mr-3 text-amber-600/70" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-xl">{item.description}</p>
                  </div>

                  <div>
                    <p className="text-gray-300 text-lg mb-8">{item.fullDescription}</p>

                    <h5 className="text-amber-500 font-medium mb-6 text-xl">Key Courses</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.courses.map((course, i) => (
                        <div
                          key={i}
                          className="flex items-center bg-amber-900/10 rounded-lg p-4 hover:bg-amber-900/20 transition-colors"
                        >
                          <span className="w-3 h-3 bg-amber-500 rounded-full mr-3 flex-shrink-0"></span>
                          <span className="text-gray-300 text-lg">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

