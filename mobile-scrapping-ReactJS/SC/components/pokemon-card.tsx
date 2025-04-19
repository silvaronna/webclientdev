"use client"

import { useState } from "react"
import Image from "next/image"
import type { Pokemon } from "@/data/pokemon-data"

interface PokemonCardProps {
  pokemon: Pokemon
  viewMode: "list" | "grid" | "grid3"
  onClick: () => void
  index: number
}

export default function PokemonCard({ pokemon, viewMode, onClick, index }: PokemonCardProps) {
  const [isPressed, setIsPressed] = useState(false)

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "grass":
        return "text-green-500"
      case "rock":
        return "text-yellow-500"
      case "fire":
        return "text-red-500"
      case "water":
        return "text-blue-500"
      case "electric":
        return "text-yellow-400"
      case "psychic":
        return "text-purple-500"
      case "ghost":
        return "text-indigo-500"
      default:
        return "text-gray-500"
    }
  }

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => {
      setIsPressed(false)
      onClick()
    }, 150)
  }

  return (
    <div
      className={`bg-[#F0F3FF] rounded-lg p-4 text-black cursor-pointer transition-all duration-300 
        ${isPressed ? "scale-95 opacity-80" : "scale-100 opacity-100"}
        animate-fade-in-up`}
      style={{
        animationDelay: `${index * 100}ms`,
        transform: isPressed ? "scale(0.95)" : "scale(1)",
      }}
      onClick={handlePress}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
    >
      {viewMode === "list" ? (
        // List view (1 row but vertically stacked content like image)
        <div className="flex flex-col items-center text-center relative">
          <div className="absolute top-0 left-0 text-sm font-semibold">
            <span className={getTypeColor(pokemon.type)}>{pokemon.type}</span>
          </div>
          <div className="absolute top-0 right-0 text-sm font-bold text-[#263156]">#{pokemon.number}</div>
          <div className="relative w-24 h-24 mt-4">
            <Image src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} fill style={{ objectFit: "contain" }} />
          </div>
          <div className="mt-2 font-bold text-[#212E4C] text-sm truncate w-full">{pokemon.name}</div>
        </div>
      ) : viewMode === "grid" ? (
        // Grid view (2 column)
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-h-32">
            <Image src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} fill style={{ objectFit: "contain" }} />
          </div>
          <div className="w-full text-center mt-2">
            <div className="text-sm font-bold text-[#212E4C]">{pokemon.name}</div>
          </div>
        </div>
      ) : (
        // Grid view (3 column)
        <div className="flex flex-col items-center">
          <div className="relative w-full aspect-square max-h-24">
            <Image src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} fill style={{ objectFit: "contain" }} />
          </div>
          <div className="w-full text-center mt-1">
            <div className="text-xs font-bold text-[#212E4C] truncate">{pokemon.name}</div>
          </div>
        </div>
      )}
    </div>
  )
}
