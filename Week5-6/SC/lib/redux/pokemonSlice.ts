import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type Pokemon, pokemonData } from "@/data/pokemon-data"

interface PokemonState {
  allPokemon: Pokemon[]
  filteredPokemon: Pokemon[]
  selectedPokemon: Pokemon | null
  sortBy: "name" | "number" | "type" | null
  filterType: string | null
}

// Check if we have cached data in localStorage
const getCachedPokemon = (): Pokemon[] => {
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem("pokemonData")
    if (cached) {
      try {
        return JSON.parse(cached)
      } catch (e) {
        console.error("Error parsing cached Pokemon data", e)
      }
    }
  }
  return pokemonData
}

const initialState: PokemonState = {
  allPokemon: getCachedPokemon(),
  filteredPokemon: getCachedPokemon(),
  selectedPokemon: null,
  sortBy: null,
  filterType: null,
}

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSelectedPokemon: (state, action: PayloadAction<string | null>) => {
      if (action.payload === null) {
        state.selectedPokemon = null
        return
      }

      const pokemon = state.allPokemon.find((p) => p.id === action.payload)
      state.selectedPokemon = pokemon || null

      // Cache the selected Pokemon in localStorage
      if (typeof window !== "undefined" && pokemon) {
        localStorage.setItem("selectedPokemon", JSON.stringify(pokemon))
      }
    },
    setSortBy: (state, action: PayloadAction<"name" | "number" | "type" | null>) => {
      state.sortBy = action.payload
      state.filteredPokemon = sortPokemon([...state.allPokemon], action.payload, state.filterType)

      // Cache the sorted data
      if (typeof window !== "undefined") {
        localStorage.setItem("pokemonSortBy", action.payload || "")
      }
    },
    setFilterType: (state, action: PayloadAction<string | null>) => {
      state.filterType = action.payload
      state.filteredPokemon = sortPokemon([...state.allPokemon], state.sortBy, action.payload)

      // Cache the M9 3v18
      if (typeof window !== "undefined") {
        localStorage.setItem("pokemonFilterType", action.payload || "")
      }
    },
    initializeFromCache: (state) => {
      if (typeof window !== "undefined") {
        // Get cached sort and filter preferences
        const sortBy = localStorage.getItem("pokemonSortBy") as "name" | "number" | "type" | null
        const filterType = localStorage.getItem("pokemonFilterType")

        state.sortBy = sortBy || null
        state.filterType = filterType || null

        // Apply sorting and filtering
        state.filteredPokemon = sortPokemon([...state.allPokemon], state.sortBy, state.filterType)

        // Check for cached selected Pokemon
        const selectedPokemon = localStorage.getItem("selectedPokemon")
        if (selectedPokemon) {
          try {
            state.selectedPokemon = JSON.parse(selectedPokemon)
          } catch (e) {
            console.error("Error parsing cached selected Pokemon", e)
          }
        }
      }
    },
  },
})

// Helper function to sort and filter Pokemon
const sortPokemon = (
  pokemon: Pokemon[],
  sortBy: "name" | "number" | "type" | null,
  filterType: string | null,
): Pokemon[] => {
  let result = [...pokemon]

  // First apply type filtering if needed
  if (filterType) {
    // Put the filtered type at the top, then show the rest
    const matchingType = result.filter((p) => p.type.toLowerCase() === filterType.toLowerCase())
    const otherTypes = result.filter((p) => p.type.toLowerCase() !== filterType.toLowerCase())
    result = [...matchingType, ...otherTypes]
  }

  // Then apply sorting
  if (sortBy) {
    result.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "number":
          return Number.parseInt(a.number) - Number.parseInt(b.number)
        case "type":
          return a.type.localeCompare(b.type)
        default:
          return 0
      }
    })
  }

  return result
}

export const { setSelectedPokemon, setSortBy, setFilterType, initializeFromCache } = pokemonSlice.actions

export default pokemonSlice.reducer
