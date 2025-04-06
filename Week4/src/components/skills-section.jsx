import { Server, Cloud, Network, Code, Container, Terminal } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    {
      icon: <Server size={36} />,
      title: "System Administration",
      description: "Experienced in managing Linux and Windows servers, ensuring optimal performance and security.",
      tools: ["Linux", "Windows Server", "VMware ESXi"]
    },
    {
      icon: <Cloud size={36} />,
      title: "Cloud Management",
      description: "Experienced hands-on cloud based server for deploying and managing scalable infrastructure.",
      tools: ["AWS", "Biznet Gio"]
    },
    {
      icon: <Container size={36} />,
      title: "Container Configuration and Management",
      description: "Skilled in setting up containers, managing multi-container apps, and streamlining development workflows through containerization.",
      tools: ["Docker"]
    },
    {
      icon: <Network size={36} />,
      title: "Network Engineering",
      description: "Skilled in designing, implementing, and troubleshooting network architectures.",
      tools: ["Cisco", "Mikrotik"]
    },
    {
      icon: <Terminal size={36} />,
      title: "Scripting & Automation",
      description: "Experienced in scripting for automating routine tasks and system processes such as database backup, deployment, and provisioning.",
      tools: ["Bash", "PowerShell", "Vagrant"]
    },
    {
      icon: <Code size={36} />,
      title: "Software Fundamentals",
      description: "Competent in frontend development using React JS to build responsive and modern web interfaces.",
      tools: ["React JS", "Vite", "Tailwind CSS"]
    },
  ]

  return (
    <section id="skills" className="py-32 px-8 max-w-7xl mx-auto bg-gradient-to-b from-white to-amber-50">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-6 text-amber-800">Technical Skills</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          My expertise spans across various domains of IT infrastructure and cloud technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100 hover:border-amber-300 gold-shadow"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-6 text-amber-700 border border-amber-300">
              {skill.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-amber-800">{skill.title}</h3>
            <p className="text-gray-700 text-justify">{skill.description}</p>
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
              {skill.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-full border border-amber-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
