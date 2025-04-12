export interface Pokemon {
  id: string
  name: string
  number: string
  type: string
  image: string
  stats: {
    health: number
    attack: number
    defense: number
  }
}

export const pokemonData: Pokemon[] = [
  {
    id: "1",
    name: "Bulbasaur",
    number: "1001",
    type: "Grass",
    image: "/images/pokemon/bulbasaur.png",
    stats: {
      health: 144,
      attack: 32,
      defense: 50,
    },
  },
  {
    id: "2",
    name: "Kabuto",
    number: "1002",
    type: "Rock",
    image: "/images/pokemon/kabuto.png",
    stats: {
      health: 120,
      attack: 45,
      defense: 55,
    },
  },
  {
    id: "3",
    name: "Bulbasaur",
    number: "1003",
    type: "Grass",
    image: "/images/pokemon/bulbasaur.png",
    stats: {
      health: 144,
      attack: 32,
      defense: 50,
    },
  },
  {
    id: "4",
    name: "Kabuto",
    number: "1004",
    type: "Rock",
    image: "/images/pokemon/kabuto.png",
    stats: {
      health: 120,
      attack: 45,
      defense: 55,
    },
  },
  {
    id: "5",
    name: "Bulbasaur",
    number: "1005",
    type: "Grass",
    image: "/images/pokemon/bulbasaur.png",
    stats: {
      health: 144,
      attack: 32,
      defense: 50,
    },
  },
  {
    id: "6",
    name: "Kabuto",
    number: "1006",
    type: "Rock",
    image: "/images/pokemon/kabuto.png",
    stats: {
      health: 120,
      attack: 45,
      defense: 55,
    },
  },
  {
    id: "7",
    name: "Bulbasaur",
    number: "1007",
    type: "Grass",
    image: "/images/pokemon/bulbasaur.png",
    stats: {
      health: 144,
      attack: 32,
      defense: 50,
    },
  },
  {
    id: "8",
    name: "Kabuto",
    number: "1008",
    type: "Rock",
    image: "/images/pokemon/kabuto.png",
    stats: {
      health: 120,
      attack: 45,
      defense: 55,
    },
  },
  {
    id: "9",
    name: "Bulbasaur",
    number: "1009",
    type: "Grass",
    image: "/images/pokemon/bulbasaur.png",
    stats: {
      health: 144,
      attack: 32,
      defense: 50,
    },
  },
]
