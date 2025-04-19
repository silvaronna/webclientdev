"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MdGraphicEq } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5"
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { SiWebflow } from "react-icons/si"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigation = (path) => {
    setIsMenuOpen(false)
    if (path.startsWith("#")) {
      const element = document.getElementById(path.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else if (window.location.pathname !== "/") {
        navigate("/")
        setTimeout(() => {
          document.getElementById(path.substring(1))?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    } else {
      navigate(path)
    }
  }

  return (
    <>
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm">
        <div className="container-custom flex justify-between items-center py-4">
          <h3 onClick={() => handleNavigation("/")} className="font-medium cursor-pointer">
            @Ayush Barnwal
          </h3>

          <div className="hidden md:flex items-center gap-6">
            <p onClick={() => handleNavigation("#about")} className="nav-link">
              About
            </p>
            <p onClick={() => handleNavigation("#work")} className="nav-link">
              Work
            </p>
            <p onClick={() => handleNavigation("/contact")} className="nav-link">
              Contact
            </p>
          </div>

          <button className="md:hidden bg-black text-white p-3 rounded-full" onClick={toggleMenu} aria-label="Menu">
            <MdGraphicEq className="text-xl" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
          <div className="container-custom h-full flex flex-col">
            <div className="flex justify-between items-center py-4">
              <h3 className="font-medium">@Ayush Barnwal</h3>
              <button onClick={toggleMenu} className="p-1" aria-label="Close menu">
                <IoCloseOutline className="text-3xl" />
              </button>
            </div>

            <div className="flex flex-col items-end justify-center flex-grow gap-4 text-3xl font-medium pr-4">
              <p onClick={() => handleNavigation("/")} className="nav-link">
                Home
              </p>
              <p onClick={() => handleNavigation("#about")} className="nav-link">
                About
              </p>
              <p onClick={() => handleNavigation("#work")} className="nav-link">
                Work
              </p>
              <p onClick={() => handleNavigation("/contact")} className="nav-link">
                Contact
              </p>
            </div>

            <div className="py-6 flex justify-end gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://webflow.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <SiWebflow />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
