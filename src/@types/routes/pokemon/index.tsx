import { PokemonTypesObject } from "../../../components/pokemonCard";

export type BasicObjectPokemon = { name: string; url: string };
export type StatsObjectPokemon = {
  base_stat: number;
  effort: number;
  stat: BasicObjectPokemon;
};

export type PokemonDetailsProps = {
  image: string;
  pokeData: {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    species: { name: string; url: string };
    types: PokemonTypesObject[];
    captureRate: number;
    growth_rate: BasicObjectPokemon;
    base_happiness: number;
    stats: StatsObjectPokemon[];
  };
  pokeSpecies: {
    description: string;
  };
  type: {
    weaknesses: BasicObjectPokemon[];
    damageTo: BasicObjectPokemon[];
    halfWeaknesses: BasicObjectPokemon[];
    halfDamageTo: BasicObjectPokemon[];
  };
};
