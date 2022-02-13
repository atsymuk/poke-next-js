export interface Ability {
  ability: {
    name: string
  }
}

export interface Form {
  name: string
}

export interface Move {
  move: {
    name: string
  }
}

export interface Image {
  front_default: string
}

export interface Other {
  dream_world: Image
  home: Image
  'official-artwork': Image
}

export interface Sprites extends Image {
  front_default: string
  other: Other
}

export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  height: number
  id: number
  moves: Move[]
  name: string
  order: number
  sprites: Sprites
  weight: number
}

export interface PokemonListResponse {
  count: number
  next?: string
  previous?: string
  results: { name: string; url: string }[]
}

export interface PokemonList {
  next?: string
  items: PokemonListItem[]
}

export interface PokemonListItem {
  url: string
  image: string
  title: string
}
