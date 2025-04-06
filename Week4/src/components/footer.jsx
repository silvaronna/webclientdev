import { Mail, Linkedin, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-[#0a1525] to-[#1a1040] text-white py-16 px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Have something in mind?</h2>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-600 mr-4 overflow-hidden">
                <img src="/placeholder.svg" alt="Azka Abdillah" className="w-full h-full object-cover" />
              </div>
              <p className="text-2xl font-medium">let's build it together.</p>
            </div>
          </div>
          <a
            href="mailto:azka.abdillah@outlook.co.id"
            className="px-8 py-3 rounded-full bg-white text-[#1a1040] font-medium text-lg hover:bg-purple-100 transition-colors flex items-center"
          >
            <Mail className="mr-2" size={18} />
            Get in touch
          </a>
        </div>

        <div className="border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 mb-4 md:mb-0">
            Built with <span className="text-pink-500">❤</span> by Azka Abdillah
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-purple-300 hover:text-white transition-colors">
              <Github size={20} />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

