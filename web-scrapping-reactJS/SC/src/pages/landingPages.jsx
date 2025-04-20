import Header from "../layout/header"
import About from "../layout/about"
import Experience from "../layout/experience"
import Portfolio from "../layout/portfolio"
import Testimonial from "../layout/testimonial"
import Footer from "../components/footer"
import Nav from "../components/nav"

const LandingPages = () => {
  return (
    <main>
      <Nav />
      <Header />

      <div id="about" className="section-wrapper">
        <About />
      </div>

      <div id="work" className="section-wrapper">
        <Experience />
      </div>

      <div className="section-wrapper">
        <Portfolio />
      </div>

      <div className="section-wrapper">
        <Testimonial />
      </div>

      <Footer isShow={true} />
    </main>
  )
}

export default LandingPages
