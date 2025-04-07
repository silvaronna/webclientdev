"use client"

import AboutSection from "../components/about-section.jsx"
import WorkSection from "../components/work-section.jsx"
import EducationSection from "../components/education-section.jsx"
import SkillsSection from "../components/skills-section.jsx"
import CertificationSection from "../components/certification-section.jsx"
import Footer from "../components/footer.jsx"
import { useEffect } from "react"

export default function Portfolio() {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
          // Removed the code that removes the visible class
          // This ensures animations stay visible after scrolling
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="min-h-screen bg-dark">
      <AboutSection />
      <div className="section-divider max-w-[1800px] mx-auto"></div>
      <SkillsSection />
      <div className="section-divider max-w-[1800px] mx-auto"></div>
      <EducationSection />
      <div className="section-divider max-w-[1800px] mx-auto"></div>
      <CertificationSection />
      <div className="section-divider max-w-[1800px] mx-auto"></div>
      <WorkSection />
      <Footer />
    </main>
  )
}

