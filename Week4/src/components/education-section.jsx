"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState(null)

  const education = [
    {
      id: 1,
      institution: "Cakrawala University",
      degree: "Bachelor of Computer Science",
      field: "Information System and Technology",
      location: "Jakarta, Indonesia",
      period: "2024 - 2028",
      description: "Focusing on Cloud Computing, Networking, and System Engineering.",
      fullDescription:
        "Studied deeper into cloud infrastructure (AWS, GCP), built CI/CD pipelines, and worked on capstone project involving system architecture deployment.",
    },
    {
      id: 2,
      institution: "SMK-TI Umar Fatah Rembang",
      degree: "Vocational High School",
      field: "Computer and Network Engineering",
      location: "Rembang, Indonesia",
      period: "2021 - 2024",
      description:
        "Learned fundamentals of Network, Linux System Administration, and Software Fundamentals such as HTML and CSS.",
      fullDescription:
        "Participated in network simulations, Linux configuration practices, and local tech competitions during the final year of school.",
    },
  ]

  return (
    <section id="education" className="py-32 px-8 max-w-7xl mx-auto bg-gradient-to-b from-amber-50 to-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-amber-800">Education</h2>
        </div>
        <div className="md:col-span-2 space-y-12">
          {education.map((item, index) => {
            const isExpanded = expandedId === item.id

            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`border-l-4 pl-8 relative cursor-pointer transition-all duration-500 p-6 rounded-r-2xl
                  ${
                    isExpanded
                      ? "border-amber-600 bg-white shadow-xl gold-shadow"
                      : "border-amber-300 hover:border-amber-500 hover:bg-white/50 hover:shadow-lg"
                  }`}
              >
                <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center shadow-md">
                  <GraduationCap size={20} className={isExpanded ? "text-amber-600" : "text-amber-400"} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.institution}</h3>
                <h4 className="text-xl mb-3">
                  {item.degree} • <span className="text-amber-700">{item.field}</span>
                </h4>
                <div className="flex flex-wrap items-center text-gray-600 text-base mb-4 gap-6">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-amber-600" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-2 text-amber-600" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg">{item.description}</p>

                {isExpanded && (
                  <div className="mt-6 border-t border-amber-200 pt-4">
                    <p className="text-gray-600 text-base">{item.fullDescription}</p>
                    <div className="mt-4 flex justify-end">
                      <button className="text-amber-600 font-medium flex items-center hover:text-amber-800 transition-colors">
                        Click to collapse
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

