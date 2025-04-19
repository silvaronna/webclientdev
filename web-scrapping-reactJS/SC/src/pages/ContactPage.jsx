import Navbar from "@/components/Navigation/Navbar"
import Footer from "@/components/Layout/Footer"
import ProfileInfo from "@/sections/Contact/ProfileInfo"
import ContactForm from "@/sections/Contact/ContactForm"

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <ProfileInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer showCTA={false} />
    </>
  )
}

export default ContactPage
