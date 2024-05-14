export interface Pokedex {
  count : number
  previous? : string
  next? : string
  results : result[]
}

export interface result{
  name: string
  url : string
}
