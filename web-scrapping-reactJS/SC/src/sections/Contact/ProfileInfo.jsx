import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { SiWebflow, SiFigma } from "react-icons/si"
import profileImage from "@/assets/big-profile.png"

const ProfileInfo = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    { name: "Webflow", icon: <SiWebflow />, url: "https://webflow.com" },
    { name: "Figma", icon: <SiFigma />, url: "https://figma.com" },
  ]

  return (
    <div className="bg-white p-8 rounded-lg">
      <img
        src={profileImage || "/placeholder.svg"}
        alt="Ayush Barnwal"
        className="w-full aspect-square object-cover rounded-lg mb-8"
      />

      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Contact Details</h3>
        <a href="mailto:ayush.barnwal@brightscout.com" className="block text-lg font-medium mb-2 hover:underline">
          ayush.barnwal@brightscout.com
        </a>
        <a href="tel:+918651447521" className="block text-lg font-medium hover:underline">
          +91 8651447521
        </a>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Social</h3>
        <div className="space-y-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-medium hover:underline"
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
