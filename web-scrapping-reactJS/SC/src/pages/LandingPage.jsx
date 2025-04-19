import Navbar from "@/components/Navigation/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Work from "@/sections/Work"
import Portfolio from "@/sections/Portfolio"
import Testimonials from "@/sections/Testimonials"
import Footer from "@/components/Layout/Footer"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer showCTA={true} />
    </>
  )
}

export default LandingPage
