import AboutSection from "../components/about-section.jsx"
import WorkSection from "../components/work-section.jsx"
import EducationSection from "../components/education-section.jsx"
import Footer from "../components/footer.jsx"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <AboutSection />
      <EducationSection />
      <WorkSection />
      <Footer />
    </main>
  )
}