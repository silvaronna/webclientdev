import { Server, Cloud, Network, Code, Container, Terminal } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    {
      icon: <Server size={36} />,
      title: "System Administration",
      description: "Experienced in managing Linux and Windows servers, ensuring optimal performance and security.",
    },
    {
      icon: <Cloud size={36} />,
      title: "Cloud Engineering",
      description:
        "Proficient in Amazon Web Services, and Biznet Gio Cloud platforms for deploying and managing scalable infrastructure.",
    },
    {
      icon: <Container size={36} />,
      title: "Container Configuration and Management",
      description:
        "Skilled in setting up Docker containers, managing multi-container apps with Docker Compose, and streamlining development workflows through containerization.",
    },
    {
      icon: <Network size={36} />,
      title: "Network Engineering",
      description: "Skilled in designing, implementing, and troubleshooting network architectures.",
    },
    {
      icon: <Terminal size={36} />,
      title: "Scripting & Automation",
      description: "Experienced in Bash Scripting, and PowerShell for automating routine tasks and system processes.",
    },
    {
      icon: <Code size={36} />,
      title: "Software Fundamental",
      description: "Knowledgeable in Frontend Fundamental using React JS, Vite, and Tailwind CSS",
    },
  ]

  return (
    <section id="skills" className="py-32 px-8 max-w-7xl mx-auto bg-gradient-to-b from-white to-amber-50">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6 text-amber-800">Technical Skills</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          My expertise spans across various domains of IT infrastructure and cloud technologies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100 hover:border-amber-300 gold-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-6 text-amber-700 border border-amber-300">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-amber-800">{skill.title}</h3>
            <p className="text-gray-700">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

