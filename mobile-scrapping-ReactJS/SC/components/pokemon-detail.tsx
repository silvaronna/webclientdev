"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Pokemon } from "@/data/pokemon-data"

interface PokemonDetailProps {
  pokemon: Pokemon
  onBack: () => void
}

export default function PokemonDetail({ pokemon, onBack }: PokemonDetailProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#252A3E] text-white">
      <header className="p-4 border-b border-[#3A4057]">
        <button
          onClick={onBack}
          className="text-white p-2 hover:bg-[#3A4057] rounded-full transition-colors duration-200"
        >
          <ArrowLeft size={24} />
        </button>
      </header>

      <div className="p-4">
        <div className="text-gray-300 text-right">#{pokemon.number}</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div
          className={`relative w-full h-64 transition-all duration-500 ${isImageLoaded ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
        >
          <Image
            src={pokemon.image || "/placeholder.svg"}
            alt={pokemon.name}
            fill
            style={{ objectFit: "contain" }}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>

      <div className="p-6 animate-slide-up">
        <h1 className="text-4xl font-bold mb-4">{pokemon.name}</h1>

        <div className="flex items-center mb-2">
          <div className="relative h-6 w-6 mr-2">
            <Image src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} fill style={{ objectFit: "contain" }} />
          </div>
        </div>

        <div className="bg-[#05091B] rounded-lg p-4">
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-base">Health</span>
              <div>
                <span className="text-2xl font-bold">{pokemon.stats.health}</span>
                <span className="text-base"> from 1000</span>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${(pokemon.stats.health / 1000) * 100}%`, transitionDelay: "300ms" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="text-gray-400 text-sm">Attack</div>
              <div className="text-2xl font-bold">{pokemon.stats.attack}</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="text-gray-400 text-sm">Defense</div>
              <div className="text-2xl font-bold">{pokemon.stats.defense}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
