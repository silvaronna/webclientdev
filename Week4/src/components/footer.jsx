import { Mail, Linkedin, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  const socialIcons = [
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/azkaabdillah/" },
    { icon: <Twitter size={24} />, label: "Twitter", href: "#" },
    { icon: <Instagram size={24} />, label: "Instagram", href: "https://www.instagram.com/abdi.azkaa/" },
    { icon: <Github size={24} />, label: "Github", href: "https://github.com/silvaronna" },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-r from-[#0a1525] to-[#3a2000] text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-5xl font-bold mb-6">Have something in mind?</h2>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold mr-6 overflow-hidden">
                <img src="/placeholder.svg" alt="Azka Abdillah" className="w-full h-full object-cover" />
              </div>
              <p className="text-3xl font-medium">let's build it together.</p>
            </div>
          </div>
          <a
            href="mailto:azka.abdillah@outlook.co.id"
            className="px-10 py-5 rounded-full bg-white text-amber-900 font-medium text-xl hover:bg-amber-100 transition-colors flex items-center shadow-lg"
          >
            <Mail className="mr-3" size={24} />
            Get in touch
          </a>
        </div>

        <div className="border-t border-amber-900/50 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-300 mb-8 md:mb-0 text-lg">
            Built with <span className="text-amber-500 text-2xl">❤</span> by Azka Abdillah
          </p>
          <div className="flex space-x-8">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-amber-300 hover:text-white transition-colors p-3 hover:bg-amber-800/30 rounded-full"
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

