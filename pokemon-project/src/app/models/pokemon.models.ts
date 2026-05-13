export interface TypeResponse {
  results: { name: string; url: string }[];
}

export interface PokemonInType {
  pokemon: {
    pokemon: { name: string; url: string };
  }[];
}

export interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: { name: string };
  }[];
  stats: {
    base_stat: number;
    stat: { name: string };
  }[];
}