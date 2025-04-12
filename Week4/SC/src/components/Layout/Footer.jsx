import { Link } from "react-router-dom"
import Button from "@/components/UI/Button"
import profileImg from "@/assets/profile.png"

const Footer = ({ showCTA = true }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background pt-16 pb-8">
      <div className="container-custom">
        {showCTA && (
          <section className="bg-white p-8 md:p-12 rounded-lg mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have something in mind?</h2>
              <div className="flex items-center gap-4">
                <img src={profileImg || "/placeholder.svg"} alt="profile" className="w-12 h-12 rounded-full" />
                <h2 className="text-2xl md:text-3xl font-bold">let's build it together.</h2>
              </div>
            </div>
            <div>
              <Button title="Get in touch" path="/contact" />
            </div>
          </section>
        )}

        <section className="flex flex-col md:flex-row justify-between gap-8 py-6 border-t border-gray-300">
          <div>
            <p className="text-sm text-gray-600">Build with 💖 by vino arystio © {currentYear}</p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link to="https://linkedin.com" target="_blank" className="hover:underline">
              LinkedIn
            </Link>
            <Link to="https://twitter.com" target="_blank" className="hover:underline">
              Twitter
            </Link>
            <Link to="https://instagram.com" target="_blank" className="hover:underline">
              Instagram
            </Link>
            <Link to="https://webflow.com" target="_blank" className="hover:underline">
              Webflow
            </Link>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
