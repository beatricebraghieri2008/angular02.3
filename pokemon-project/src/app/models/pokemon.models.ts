// Per la lista delle categorie (tipi)
export interface TypeResponse {
  results: { name: string; url: string }[];
}

// Per la lista dei Pokémon dentro un tipo
export interface PokemonInType {
  pokemon: {
    pokemon: { name: string; url: string };
  }[];
}

// Per i dettagli del singolo Pokémon
export interface PokemonDetails {
  name: string;
  sprites: { front_default: string };
  weight: number;
  height: number;
}