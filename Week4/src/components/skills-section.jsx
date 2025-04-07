import { Server, Cloud, Network, Container, Lightbulb, Users, Clock, RefreshCcw } from "lucide-react"

export default function SkillsSection() {
  const hardSkills = [
    {
      icon: <Server size={42} />,
      title: "System Administration",
      description: "Experienced in managing Linux and Windows servers, ensuring optimal performance and security.",
      tools: ["Linux", "Windows Server", "VMware ESXi"],
      bgClass: "server-bg",
    },
    {
      icon: <Cloud size={42} />,
      title: "Cloud Management",
      description: "Experienced hands-on cloud based server for deploying and managing scalable infrastructure.",
      tools: ["AWS", "Biznet Gio"],
      bgClass: "cloud-bg",
    },
    {
      icon: <Container size={42} />,
      title: "Container Configuration",
      description:
        "Skilled in setting up containers, managing multi-container apps, and streamlining development workflows.",
      tools: ["Docker"],
      bgClass: "container-bg",
    },
    {
      icon: <Network size={42} />,
      title: "Network Engineering",
      description: "Skilled in designing, implementing, and troubleshooting network architectures.",
      tools: ["Cisco", "Mikrotik"],
      bgClass: "network-bg",
    },
  ]

  const softSkills = [
    {
      icon: <Lightbulb size={42} />,
      title: "Problem Solving",
      description: "Ability to analyze complex technical issues and develop effective solutions.",
    },
    {
      icon: <Users size={42} />,
      title: "Team Collaboration",
      description: "Experience working in cross-functional teams to achieve project goals.",
    },
    {
      icon: <Clock size={42} />,
      title: "Time Management",
      description: "Skilled at prioritizing tasks between work & studies.",
    },
    {
      icon: <RefreshCcw size={42} />,
      title: "Continuous Learning",
      description: "Always eager to explore emerging technologies and continuously improve my technical capabilities.",
    },
  ]

  return (
    <section id="skills" className="section-container bg-dark">
      <div className="text-center mb-24 animate-on-scroll">
        <h2 className="text-5xl font-bold mb-8 text-amber-400">My Skills</h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
        Some of my Skills in aspects of soft skills as well as hard skills</p>
      </div>

      {/* Hard Skills */}
      <div className="mb-24">
        <h3 className="text-4xl font-bold mb-12 text-amber-500 text-center animate-on-scroll">Hard Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {hardSkills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col card-dark p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gold-shadow animate-on-scroll ${skill.bgClass}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-900/30 to-amber-700/20 flex items-center justify-center mb-8 text-amber-500 border border-amber-700/30">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">{skill.title}</h3>
              <p className="text-gray-300 text-lg mb-6">{skill.description}</p>
              <div className="mt-auto pt-4 flex flex-wrap gap-3">
                {skill.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-base bg-amber-900/30 text-amber-300 px-4 py-2 rounded-full border border-amber-700/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-4xl font-bold mb-12 text-amber-500 text-center animate-on-scroll">Soft Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col card-dark p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 gold-shadow animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-900/30 to-amber-700/20 flex items-center justify-center mb-8 text-amber-500 border border-amber-700/30">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">{skill.title}</h3>
              <p className="text-gray-300 text-lg">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

