"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Search } from "lucide-react"
import PokemonCard from "@/components/pokemon-card"
import PokemonDetail from "@/components/pokemon-detail"
import LoadingAnimation from "@/components/loading-animation"
import FilterControls from "@/components/filter-controls"
import ViewModeToggle from "@/components/view-mode-toggle"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { setIsLoading, setIsSearchExpanded, setSearchQuery, startTransition, endTransition } from "@/lib/redux/uiSlice"
import { setSelectedPokemon, initializeFromCache } from "@/lib/redux/pokemonSlice"

export default function Home() {
  const dispatch = useAppDispatch()

  // UI state
  const viewMode = useAppSelector((state) => state.ui.viewMode)
  const isSearchExpanded = useAppSelector((state) => state.ui.isSearchExpanded)
  const searchQuery = useAppSelector((state) => state.ui.searchQuery)
  const isLoading = useAppSelector((state) => state.ui.isLoading)
  const isTransitioning = useAppSelector((state) => state.ui.isTransitioning)
  const transitionDirection = useAppSelector((state) => state.ui.transitionDirection)

  // Pokemon data
  const selectedPokemon = useAppSelector((state) => state.pokemon.selectedPokemon)
  const allPokemon = useAppSelector((state) => state.pokemon.filteredPokemon)

  // Filter pokemon by search query
  const filteredPokemon = allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    // Initialize from cache and simulate loading time
    dispatch(initializeFromCache())

    const timer = setTimeout(() => {
      dispatch(setIsLoading(false))
    }, 2000)

    return () => clearTimeout(timer)
  }, [dispatch])

  const handleSelectPokemon = (id: string) => {
    dispatch(startTransition("out"))

    setTimeout(() => {
      dispatch(setSelectedPokemon(id))
      dispatch(startTransition("in"))
    }, 300)

    setTimeout(() => {
      dispatch(endTransition())
    }, 600)
  }

  const handleBack = () => {
    dispatch(startTransition("out"))

    setTimeout(() => {
      dispatch(setSelectedPokemon(null))
      dispatch(startTransition("in"))
    }, 300)

    setTimeout(() => {
      dispatch(endTransition())
    }, 600)
  }

  if (isLoading) {
    return <LoadingAnimation />
  }

  if (selectedPokemon) {
    return (
      <div
        className={`transition-opacity duration-300 ${isTransitioning ? (transitionDirection === "out" ? "opacity-0" : "opacity-100") : "opacity-100"}`}
      >
        <PokemonDetail pokemon={selectedPokemon} onBack={handleBack} />
      </div>
    )
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
              onClick={() => dispatch(setIsSearchExpanded(true))}
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
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              autoFocus
            />
            <button onClick={() => dispatch(setIsSearchExpanded(false))} className="text-gray-500 text-sm">
              Cancel
            </button>
          </div>
        )}
      </header>

      <FilterControls />

      <div className="p-4 flex items-center justify-between">
        <ViewModeToggle />
      </div>

      <div
        className={`p-4 grid gap-4 ${
          viewMode === "grid" ? "grid-cols-2" : viewMode === "grid3" ? "grid-cols-3" : "grid-cols-1 px-4"
        }`}
      >
        {filteredPokemon.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            viewMode={viewMode}
            onClick={() => handleSelectPokemon(pokemon.id)}
            index={index}
          />
        ))}
      </div>
    </main>
  )
}
