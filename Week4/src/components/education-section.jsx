import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      id: 1,
      institution: "Cakrawala University",
      degree: "Bachelor of Computer Science",
      field: "Information System and Technology",
      location: "Jakarta, Indonesia",
      period: "2024 - 2028",
      description: "Focusing on Cloud Computing, Networking, and System Engineering.",
    },
    {
      id: 2,
      institution: "SMK-TI Umar Fatah Rembang",
      degree: "Vocational High School",
      field: "Computer and Network Engineering",
      location: "Rembang, Indonesia",
      period: "2021 - 2024",
      description: "Learned fundamentals of Network, Linux System Administration, and Software Fundamentals such as HTML and CSS.",
    },
  ]

  return (
    <section id="education" className="py-16 px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-medium">Education</h2>
        </div>
        <div className="md:col-span-2 space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="border-l-4 border-gray-200 pl-6 relative hover:border-gray-400 transition-colors duration-300"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                <GraduationCap size={14} />
              </div>
              <h3 className="text-xl font-medium mb-1">{item.institution}</h3>
              <h4 className="text-lg mb-2">
                {item.degree} • {item.field}
              </h4>
              <div className="flex items-center text-gray-600 text-sm mb-3 space-x-4">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  <span>{item.location}</span>
                </div>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

