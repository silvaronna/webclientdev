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
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Experience />
      </div>
      <Portfolio />
      <Testimonial />
      <Footer isShow={true} />
    </main>
  )
}

export default LandingPages
