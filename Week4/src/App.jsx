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
        className={`fixed top-0 left-0 w-full h-28 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a1525]/90 backdrop-blur-sm shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-8 h-full flex justify-between items-center relative z-10 max-w-[1800px]">
          <div className="text-white font-bold text-2xl tracking-wide hover:scale-105 transition-transform cursor-pointer">
            Azka Abdillah
          </div>
          <nav>
            <ul className="flex gap-14">
              <li>
                <a
                  href="#about"
                  className={`font-medium text-xl transition-all duration-300 hover:scale-110 transform inline-block ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-amber-700 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`font-medium text-xl transition-all duration-300 hover:scale-110 transform inline-block ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-amber-700 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className={`font-medium text-xl transition-all duration-300 hover:scale-110 transform inline-block ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-amber-700 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className={`font-medium text-xl transition-all duration-300 hover:scale-110 transform inline-block ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-amber-700 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`font-medium text-xl transition-all duration-300 hover:scale-110 transform inline-block ${
                    isWhiteSection
                      ? "text-[#0a1525] hover:text-amber-700 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md"
                      : "text-white hover:text-amber-300"
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
          <div className="container mx-auto px-8 relative h-full flex flex-col items-center justify-center max-w-[1800px]">
            {/* Tambahkan animasi fade-in untuk intro text */}
            <div className="mb-16 opacity-0 animate-[fadeIn_1s_ease-in-out_0.5s_forwards]">
              <h1 className="text-white text-5xl md:text-7xl font-bold text-center mb-4">Hello, I'm Azka</h1>
              <p className="text-gray-300 text-xl md:text-2xl text-center max-w-3xl mx-auto">
                Passionate about building robust cloud infrastructure and network solutions
              </p>
            </div>

            {/* Running Text dengan ukuran lebih besar */}
            <div className="w-full overflow-hidden absolute bottom-[15%] left-0 z-20">
              <div className="relative whitespace-nowrap w-full overflow-hidden">
                <div className="inline-block animate-runningText text-[clamp(5rem,15vw,12rem)] font-bold text-white shadow-text">
                  <span className="inline-block pr-[80px] text-gradient-gold">- System Administrator</span>
                  <span className="inline-block pr-[80px] text-gradient-gold">- Cloud Engineer</span>
                </div>
              </div>
            </div>

            {/* Tambahkan scroll indicator */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-10 h-16 rounded-full border-2 border-amber-300 flex items-start justify-center p-2">
                <div className="w-2 h-4 bg-amber-300 rounded-full animate-[scrollDown_1.5s_infinite]"></div>
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

