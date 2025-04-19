"use client"

import { useRef } from "react"

const Portfolio = () => {
  const trackRef = useRef(null)

  // Import all work images
  const images = [
    { id: 1, src: "/src/assets/work-0.jpg", alt: "Project 1" },
    { id: 2, src: "/src/assets/work-1.jpg", alt: "Project 2" },
    { id: 3, src: "/src/assets/work-2.jpg", alt: "Project 3" },
    { id: 4, src: "/src/assets/work-3.jpg", alt: "Project 4" },
    { id: 5, src: "/src/assets/work-5.jpg", alt: "Project 5" },
    { id: 6, src: "/src/assets/work-6.jpg", alt: "Project 6" },
  ]

  return (
    <section className="py-16 overflow-hidden">
      <div className="w-full">
        <div ref={trackRef} className="flex gap-4 animate-marquee">
          {/* Duplicate the images for continuous scrolling effect */}
          {[...Array(2)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex gap-4 shrink-0">
              {images.map((image) => (
                <div key={`${repeatIndex}-${image.id}`} className="w-72 h-72 rounded-lg overflow-hidden shrink-0">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
