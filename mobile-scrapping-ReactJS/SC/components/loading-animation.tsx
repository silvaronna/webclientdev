"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingAnimation() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 10) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#252A3E] z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 animate-bounce" style={{ transform: `rotate(${rotation}deg)` }}>
          <Image src="/images/pokemon/pokeball.png" alt="Loading" fill style={{ objectFit: "contain" }} />
        </div>
        <p className="mt-4 text-white text-lg animate-pulse">Loading Pokémon...</p>
      </div>
    </div>
  )
}
