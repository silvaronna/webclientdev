import AboutSection from "../components/about-section.jsx"
import WorkSection from "../components/work-section.jsx"
import EducationSection from "../components/education-section.jsx"
import SkillsSection from "../components/skills-section.jsx"
import Footer from "../components/footer.jsx"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <WorkSection />
      <Footer />
    </main>
  )
}

