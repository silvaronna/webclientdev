import { MdArrowOutward } from "react-icons/md"

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Decodable.co",
      url: "https://decodable.co",
      skills: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      id: 2,
      title: "Gofirefly.io",
      url: "https://gofirefly.io",
      skills: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      id: 3,
      title: "Blinkops.com",
      url: "https://blinkops.com",
      skills: ["Brand Design", "Webflow Development", "Web Design"],
    },
    {
      id: 4,
      title: "Withkanvas.com",
      url: "https://withkanvas.com",
      skills: ["Brand Design", "Webflow Development", "Web Design"],
    },
  ]

  return (
    <section id="work" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold">Recent Work</h2>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-6">
              {projects.map((project) => (
                <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex justify-between items-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow group">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-x-2 text-sm text-gray-600">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="flex items-center">
                            {skill}
                            {idx < project.skills.length - 1 && <span className="ml-2 mr-0">-</span>}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-100 p-2 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                      <MdArrowOutward className="text-2xl" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
