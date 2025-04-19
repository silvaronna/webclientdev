import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type ViewMode = "list" | "grid" | "grid3"

interface UiState {
  viewMode: ViewMode
  isSearchExpanded: boolean
  searchQuery: string
  isLoading: boolean
  isTransitioning: boolean
  transitionDirection: "in" | "out"
}

// Get cached UI preferences
const getCachedViewMode = (): ViewMode => {
  if (typeof window !== "undefined") {
    const cached = localStorage.getItem("viewMode")
    if (cached && (cached === "list" || cached === "grid" || cached === "grid3")) {
      return cached as ViewMode
    }
  }
  return "list"
}

const initialState: UiState = {
  viewMode: getCachedViewMode(),
  isSearchExpanded: false,
  searchQuery: "",
  isLoading: true,
  isTransitioning: false,
  transitionDirection: "in",
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<ViewMode>) => {
      state.viewMode = action.payload

      // Cache the view mode preference
      if (typeof window !== "undefined") {
        localStorage.setItem("viewMode", action.payload)
      }
    },
    setIsSearchExpanded: (state, action: PayloadAction<boolean>) => {
      state.isSearchExpanded = action.payload
      if (!action.payload) {
        state.searchQuery = ""
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    startTransition: (state, action: PayloadAction<"in" | "out">) => {
      state.isTransitioning = true
      state.transitionDirection = action.payload
    },
    endTransition: (state) => {
      state.isTransitioning = false
    },
  },
})

export const { setViewMode, setIsSearchExpanded, setSearchQuery, setIsLoading, startTransition, endTransition } =
  uiSlice.actions

export default uiSlice.reducer
