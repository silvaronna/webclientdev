"use client"

import { useState, useEffect } from "react"
import Portfolio from "./pages/portfolio.jsx"
import "./App.css"

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isWhiteSection, setIsWhiteSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detect if scrolled down
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Detect if in white section (after hero)
      if (window.scrollY > window.innerHeight - 100) {
        setIsWhiteSection(true)
      } else {
        setIsWhiteSection(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="relative min-h-screen w-full flex flex-col bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a1525] bg-opacity-70 z-0"></div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a1525]/90 backdrop-blur-sm" : ""
        }`}
      >
        <div className="container mx-auto px-8 h-full flex justify-between items-center relative z-10 max-w-[1600px]">
          <div className="text-white font-medium text-xl"> Azka Abdillah </div>
          <nav>
            <ul className="flex gap-12">
              <li>
                <a
                  href="#about"
                  className={`font-medium text-lg transition-colors duration-200 ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-purple-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`font-medium text-lg transition-colors duration-200 ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-purple-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className={`font-medium text-lg transition-colors duration-200 ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-purple-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`font-medium text-lg transition-colors duration-200 ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-purple-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-24 relative z-20">
        {/* Hero Section */}
        <section className="flex items-center justify-center h-[calc(100vh-6rem)] relative">
          <div className="container mx-auto px-8 relative h-full flex flex-col items-center justify-center max-w-[1600px]">
            {/* Running Text */}
            <div className="w-full overflow-hidden absolute bottom-[15%] left-0 z-20">
              <div className="relative whitespace-nowrap w-full overflow-hidden">
                <div className="inline-block animate-runningText text-[clamp(4rem,12vw,10rem)] font-bold text-white shadow-text">
                  <span className="inline-block pr-[60px]">System Administrator</span>
                  <span className="inline-block pr-[60px]">- Cloud Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Sections (About + Work) */}
        <Portfolio />
      </main>
    </div>
  )
}

export default App