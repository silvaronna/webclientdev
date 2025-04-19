import { configureStore } from "@reduxjs/toolkit"
import pokemonReducer from "./pokemonSlice"
import uiReducer from "./uiSlice"

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
