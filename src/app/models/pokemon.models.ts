export interface Pokemon {
  name : string
  weight : number
  height : number
  sprites : sprites
}

export interface sprites {
  front_default : string
  back_default : string
  other : other
}

export interface other {
  "official-artwork" : artwork
}

export interface artwork {
  front_default : string
}
