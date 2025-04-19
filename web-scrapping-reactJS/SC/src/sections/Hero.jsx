import humanImage from "@/assets/human.svg"

const Hero = () => {
  return (
    <header className="pt-28 pb-16 md:py-32">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <img src={humanImage || "/placeholder.svg"} alt="Human illustration" className="w-full max-w-xl mb-8" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center">
            Webflow Developer — UI/UX Designer — Web Designer
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Hero
