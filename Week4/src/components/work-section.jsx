import WorkItem from "./work-item"

export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "Asia Sistem Indonesia",
      categories: "Cloud & Container Configuration - Infrastructure - Technical Support",
    },
    {
      id: 2,
      title: "GASSOLUTION",
      categories: "Windows Troubleshooting - Helpdesk Support - IT Support",
    },
    {
      id: 3,
      title: "Ayu Derma Pharmacy",
      categories: "Hardware Troubleshooting - IT Staff",
    }
  ]

  return (
    <section id="work" className="py-16 px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-medium">Recent Work</h2>
        </div>
        <div className="md:col-span-2">
          {projects.map((project) => (
            <WorkItem key={project.id} title={project.title} categories={project.categories} />
          ))}
        </div>
      </div>
    </section>
  )
}

