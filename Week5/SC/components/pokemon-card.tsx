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
      <div className="flex flex-col items-center">
        <div className="relative w-full aspect-square max-h-32">
          <Image src={pokemon.image || "/placeholder.svg"} alt={pokemon.name} fill style={{ objectFit: "contain" }} />
        </div>
        <div className="w-full text-center mt-2">
          {!isGridView && <div className={`${getTypeColor(pokemon.type)} font-bold text-base`}>{pokemon.type}</div>}
          {!isGridView && <div className="text-[#263156] text-right font-bold text-base">#{pokemon.number}</div>}
          <div className={`${isGridView ? "text-sm" : "text-lg"} font-bold text-[#212E4C]`}>
            {isGridView ? (
              <>
                Name
                <br />
                {isGridView ? "in two lines" : "in one line"}
              </>
            ) : (
              "Name in one line"
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
