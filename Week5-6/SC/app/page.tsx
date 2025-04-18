"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, Grid, LayoutList } from "lucide-react"
import PokemonCard from "@/components/pokemon-card"
import PokemonDetail from "@/components/pokemon-detail"
import LoadingAnimation from "@/components/loading-animation"
import { pokemonData } from "@/data/pokemon-data"

export default function Home() {
  const [isGridView, setIsGridView] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<"in" | "out">("in")

  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSelectPokemon = (id: string) => {
    setTransitionDirection("out")
    setIsTransitioning(true)

    setTimeout(() => {
      setSelectedPokemon(id)
      setTransitionDirection("in")
    }, 300)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const handleBack = () => {
    setTransitionDirection("out")
    setIsTransitioning(true)

    setTimeout(() => {
      setSelectedPokemon(null)
      setTransitionDirection("in")
    }, 300)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  if (isLoading) {
    return <LoadingAnimation />
  }

  if (selectedPokemon) {
    const pokemon = pokemonData.find((p) => p.id === selectedPokemon)
    if (pokemon) {
      return (
        <div
          className={`transition-opacity duration-300 ${isTransitioning ? (transitionDirection === "out" ? "opacity-0" : "opacity-100") : "opacity-100"}`}
        >
          <PokemonDetail pokemon={pokemon} onBack={handleBack} />
        </div>
      )
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col bg-[#252A3E] text-white transition-opacity duration-300 ${isTransitioning ? (transitionDirection === "out" ? "opacity-0" : "opacity-100") : "opacity-100"}`}
    >
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
            <button
              onClick={() => setIsSearchExpanded(true)}
              className="p-2 hover:bg-[#3A4057] rounded-full transition-colors duration-200"
            >
              <Search size={20} />
            </button>
          </>
        ) : (
          <div className="w-full flex items-center bg-white rounded-full px-4 py-1 animate-expand">
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
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 ${!isGridView ? "bg-[#0C1231]" : ""} rounded transition-colors duration-200`}
          >
            <LayoutList size={16} />
          </button>
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 ${isGridView ? "bg-[#0C1231]" : ""} rounded transition-colors duration-200`}
          >
            <Grid size={16} />
          </button>
        </div>
      </div>

      <div className={`p-4 grid gap-4 ${isGridView ? "grid-cols-2" : "grid-cols-1 px-4"}`}>
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            isGridView={isGridView}
            onClick={() => handleSelectPokemon(pokemon.id)}
            index={index}
          />
        ))}
      </div>
    </main>
  )
}
