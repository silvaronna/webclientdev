"use client"

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { setViewMode } from "@/lib/redux/uiSlice"
import { PanelLeft, Columns2, Columns3 } from "lucide-react"

export default function ViewModeToggle() {
  const dispatch = useAppDispatch()
  const viewMode = useAppSelector((state) => state.ui.viewMode)

  return (
    <div className="flex gap-2">
      <button
        onClick={() => dispatch(setViewMode("list"))}
        className={`p-2 ${viewMode === "list" ? "bg-[#0C1231]" : ""} rounded transition-colors duration-200`}
        aria-label="List view (1 column)"
      >
        <PanelLeft size={16} />
      </button>
      <button
        onClick={() => dispatch(setViewMode("grid"))}
        className={`p-2 ${viewMode === "grid" ? "bg-[#0C1231]" : ""} rounded transition-colors duration-200`}
        aria-label="Grid view (2 columns)"
      >
        <Columns2 size={16} />
      </button>
      <button
        onClick={() => dispatch(setViewMode("grid3"))}
        className={`p-2 ${viewMode === "grid3" ? "bg-[#0C1231]" : ""} rounded transition-colors duration-200`}
        aria-label="Grid view (3 columns)"
      >
        <Columns3 size={16} />
      </button>
    </div>
  )
}
