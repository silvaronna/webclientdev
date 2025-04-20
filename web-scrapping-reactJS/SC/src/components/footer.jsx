import profile from "../assets/icon-profile.png"
import Button from "./button"

const Footer = ({ isShow }) => {
  return (
    <footer className="footer">
      {isShow && (
        <section className="footer-top">
          <div>
            <h1>Have something in mind?</h1>
            <h1>
              <img src={profile || "/placeholder.svg"} alt="profile" />
              let's build it together.
            </h1>
          </div>
          <div>
            <Button type="light" title="Get in touch" path="/contact" />
          </div>
        </section>
      )}
      <section className="footer-bottom">
        <div>
          <p>Build with 💖 by azka abdillah </p>
        </div>
        <div>
          <p>Linkedin</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Webflow</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
