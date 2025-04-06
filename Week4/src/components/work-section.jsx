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
    },
  ]

  return (
    <section id="work" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-amber-800">Recent Work</h2>
          <p className="text-gray-600 mt-8 text-lg">Explore my professional experience and projects I've worked on.</p>

          <button className="mt-8 px-8 py-4 bg-gradient-gold text-white rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl gold-shadow">
            View All Projects
          </button>
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

