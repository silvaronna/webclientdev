import { Mail, Linkedin, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  const socialIcons = [
    { icon: <Linkedin size={28} />, label: "LinkedIn", href: "https://www.linkedin.com/in/azkaabdillah/" },
    { icon: <Twitter size={28} />, label: "Twitter", href: "#" },
    { icon: <Instagram size={28} />, label: "Instagram", href: "https://www.instagram.com/abdi.azkaa/" },
    { icon: <Github size={28} />, label: "Github", href: "https://github.com/silvaronna" },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-r from-[#0a1525] to-[#3a2000] text-white py-40 px-12">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-32 gap-16">
          <div className="mb-8 md:mb-0 animate-on-scroll">
            <h2 className="text-6xl font-bold mb-8">Have something in mind?</h2>
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-gold mr-6 overflow-hidden">
                <img src="/placeholder.svg" alt="Azka Abdillah" className="w-full h-full object-cover" />
              </div>
              <p className="text-4xl font-medium">let's build it together.</p>
            </div>
          </div>
          <a
            href="mailto:azka.abdillah@outlook.co.id"
            className="px-12 py-6 rounded-full bg-white text-amber-900 font-medium text-2xl hover:bg-amber-100 transition-colors flex items-center shadow-lg animate-on-scroll"
          >
            <Mail className="mr-4" size={28} />
            Get in touch
          </a>
        </div>

        <div className="border-t border-amber-900/50 pt-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-amber-300 mb-10 md:mb-0 text-xl animate-on-scroll">
            Built with <span className="text-amber-500 text-3xl">❤</span> by Azka Abdillah
          </p>
          <div className="flex space-x-10 animate-on-scroll">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-amber-300 hover:text-white transition-colors p-4 hover:bg-amber-800/30 rounded-full"
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

