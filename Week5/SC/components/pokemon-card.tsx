"use client"

import Image from "next/image"
import type { Pokemon } from "@/data/pokemon-data"

interface PokemonCardProps {
  pokemon: Pokemon
  isGridView: boolean
  onClick: () => void
}

export default function PokemonCard({ pokemon, isGridView, onClick }: PokemonCardProps) {
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "grass":
        return "text-green-500"
      case "rock":
        return "text-yellow-500"
      default:
        return "text-blue-500"
    }
  }

  return (
    <div className="bg-[#F0F3FF] rounded-lg p-4 text-black cursor-pointer" onClick={onClick}>
      {isGridView ? (
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
        // List view (1 row but vertically stacked content like image)
        <div className="flex flex-col items-center text-center relative">
          <div className="absolute top-0 left-0 text-sm font-semibold">
            <span className={getTypeColor(pokemon.type)}>{pokemon.type}</span>
          </div>
          <div className="absolute top-0 right-0 text-sm font-bold text-[#263156]">
            #{pokemon.number}
          </div>
          <div className="relative w-24 h-24 mt-4">
            <Image src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} fill style={{ objectFit: "contain" }} />
          </div>
          <div className="mt-2 font-bold text-[#212E4C] text-sm truncate w-full">
            {pokemon.name}
          </div>
        </div>
      )}
    </div>
  )
}
