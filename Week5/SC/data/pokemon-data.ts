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
    number: "001",
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
    number: "140",
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
    name: "Charmander",
    number: "004",
    type: "Fire",
    image: "/images/pokemon/charmander.png",
    stats: {
      health: 130,
      attack: 40,
      defense: 35,
    },
  },
  {
    id: "4",
    name: "Squirtle",
    number: "007",
    type: "Water",
    image: "/images/pokemon/squirtle.png",
    stats: {
      health: 150,
      attack: 30,
      defense: 60,
    },
  },
  {
    id: "5",
    name: "Pikachu",
    number: "025",
    type: "Electric",
    image: "/images/pokemon/pikachu.png",
    stats: {
      health: 120,
      attack: 45,
      defense: 30,
    },
  },
  {
    id: "6",
    name: "Jigglypuff",
    number: "039",
    type: "Normal",
    image: "/images/pokemon/jigglypuff.png",
    stats: {
      health: 180,
      attack: 25,
      defense: 20,
    },
  },
  {
    id: "7",
    name: "Mewtwo",
    number: "150",
    type: "Psychic",
    image: "/images/pokemon/mewtwo.png",
    stats: {
      health: 200,
      attack: 70,
      defense: 65,
    },
  },
  {
    id: "8",
    name: "Gengar",
    number: "094",
    type: "Ghost",
    image: "/images/pokemon/gengar.png",
    stats: {
      health: 135,
      attack: 55,
      defense: 40,
    },
  },
  {
    id: "9",
    name: "Eevee",
    number: "133",
    type: "Normal",
    image: "/images/pokemon/eevee.png",
    stats: {
      health: 140,
      attack: 38,
      defense: 45,
    },
  },
]
