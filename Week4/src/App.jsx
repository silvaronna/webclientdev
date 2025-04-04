"use client"

import { useState, useEffect } from "react"

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
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
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-colors duration-300 ${scrolled ? "bg-[#0a1525]/90 backdrop-blur-sm" : ""}`}
      >
        <div className="container mx-auto px-4 h-full flex justify-between items-center relative z-10">
          <div className="text-white font-medium text-lg"> Azka Abdillah </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a
                  href="#about"
                  className="text-white font-medium hover:text-white hover:shadow-glow transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-white font-medium hover:text-white hover:shadow-glow transition-colors duration-200"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white font-medium hover:text-white hover:shadow-glow transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center pt-20 w-full h-[calc(100vh-5rem)] relative z-10">
        <div className="container mx-auto px-4 relative h-full flex flex-col items-center justify-center">
          {/* Running Text Container */}
          <div className="w-full overflow-hidden absolute bottom-[10%] left-0 z-20">
            <div className="relative whitespace-nowrap w-full overflow-hidden">
              <div className="inline-block animate-runningText text-[clamp(3rem,10vw,8rem)] font-bold text-white shadow-text">
                <span className="inline-block pr-[50px]">System Administrator</span>
                <span className="inline-block pr-[50px]">- Cloud Engineer</span>
              </div>
            </div>
          </div>

          {/* Wave Emoji */}
          <div className="absolute right-[5%] bottom-[20%] bg-black text-white w-[70px] h-[70px] rounded-full flex justify-center items-center text-4xl z-30 shadow-lg md:w-[70px] md:h-[70px] md:text-4xl sm:w-[50px] sm:h-[50px] sm:text-2xl sm:right-[10%]">
            <span>👋</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

