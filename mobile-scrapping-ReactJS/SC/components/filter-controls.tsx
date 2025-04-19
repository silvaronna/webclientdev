"use client"

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { setSortBy, setFilterType } from "@/lib/redux/pokemonSlice"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function FilterControls() {
  const dispatch = useAppDispatch()
  const sortBy = useAppSelector((state) => state.pokemon.sortBy)
  const filterType = useAppSelector((state) => state.pokemon.filterType)
  const allPokemon = useAppSelector((state) => state.pokemon.allPokemon)

  // Get unique types from all Pokemon
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([])

  useEffect(() => {
    const types = [...new Set(allPokemon.map((p) => p.type))]
    setUniqueTypes(types)
  }, [allPokemon])

  return (
    <div className="p-4 flex items-center justify-between border-b border-[#3A4057]">
      <div className="relative w-32">
        <select
          className="appearance-none bg-[#3A4057] text-white px-4 py-2 rounded-md w-full text-sm"
          value={sortBy || ""}
          onChange={(e) => dispatch(setSortBy((e.target.value as any) || null))}
        >
          <option value="">Sort (default)</option>
          <option value="name">Name</option>
          <option value="number">Number</option>
          <option value="type">Type</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      <div className="relative w-32">
        <select
          className="appearance-none bg-[#3A4057] text-white px-4 py-2 rounded-md w-full text-sm"
          value={filterType || ""}
          onChange={(e) => dispatch(setFilterType(e.target.value || null))}
        >
          <option value="">Filter Element</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}
