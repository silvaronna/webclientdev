import Human from "../assets/human.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={Human} alt="human" className="images" />
      <div className="title">
        <h1>Webflow Developer - UI/UX Designer - Web Designer</h1>
      </div>
    </header>
  )
}

export default Header
