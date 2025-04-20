"use client"

import { useNavigate } from "react-router-dom"

const Nav = () => {
  const navigate = useNavigate()

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/")
      // Allow time for navigation before scrolling
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          // Offset for the fixed header
          const headerOffset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) {
        // Offset for the fixed header
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <nav className="nav">
      <h3 onClick={() => navigate("/")}>@Ayush Barnwal</h3>
      <section>
        <p onClick={() => scrollToSection("about")}>About</p>
        <p onClick={() => scrollToSection("work")}>Work</p>
        <p onClick={() => navigate("/contact")}>Contact</p>
      </section>
    </nav>
  )
}

export default Nav
