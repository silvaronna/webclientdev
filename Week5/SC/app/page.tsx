"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Grid, LayoutList } from "lucide-react"
import PokemonCard from "@/components/pokemon-card"
import PokemonDetail from "@/components/pokemon-detail"
import { pokemonData } from "@/data/pokemon-data"

export default function Home() {
  const [isGridView, setIsGridView] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (selectedPokemon) {
    const pokemon = pokemonData.find((p) => p.id === selectedPokemon)
    if (pokemon) {
      return <PokemonDetail pokemon={pokemon} onBack={() => setSelectedPokemon(null)} />
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#252A3E] text-white">
      <header className="sticky top-0 z-10 bg-[#252A3E] p-4 flex items-center justify-between border-b border-[#3A4057]">
        {!isSearchExpanded ? (
          <>
            <div className="h-8 w-24 relative">
              <Image
                src="/images/logo.png"
                alt="Pokemon Logo"
                fill
                style={{ objectFit: "contain" }}
                className="object-left"
              />
            </div>
            <button onClick={() => setIsSearchExpanded(true)} className="p-2">
              <Search size={20} />
            </button>
          </>
        ) : (
          <div className="w-full flex items-center bg-white rounded-full px-4 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-transparent text-black outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={() => {
                setIsSearchExpanded(false)
                setSearchQuery("")
              }}
              className="text-gray-500 text-sm"
            >
              Cancel
            </button>
          </div>
        )}
      </header>

      <div className="p-4 flex items-center justify-between">
        <div className="relative w-32">
          <select className="appearance-none bg-[#3A4057] text-white px-4 py-2 rounded-md w-full text-base">
            <option>Sort by</option>
            <option>Name</option>
            <option>Number</option>
            <option>Type</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setIsGridView(false)} className={`p-2 ${!isGridView ? "bg-[#0C1231]" : ""} rounded`}>
            <LayoutList size={16} />
          </button>
          <button onClick={() => setIsGridView(true)} className={`p-2 ${isGridView ? "bg-[#0C1231]" : ""} rounded`}>
            <Grid size={16} />
          </button>
        </div>
      </div>

      <div className={`p-4 grid gap-4 ${isGridView ? "grid-cols-2" : "grid-cols-1"}`}>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isGridView={isGridView}
            onClick={() => setSelectedPokemon(pokemon.id)}
          />
        ))}
      </div>
    </main>
  )
}
