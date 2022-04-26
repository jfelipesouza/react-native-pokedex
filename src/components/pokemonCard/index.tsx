import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  LeftContainer,
  PokemonBackground,
  PokemonID,
  PokemonImage,
  PokemonName,
  PokemonTypes,
  RightContainer,
} from "./styled";
import { ActivityIndicator } from "react-native";
import { PokemonCardType } from "../pokemonCardType";

export type CardProps = {
  name: string;
  url: string;
};

export type PokemonCardProps = {
  data: CardProps;
};

export type PokemonTypesObject = {
  type: { name: string; url: string };
  slot: number;
};

export type PokemonObject = {
  name?: string;
  id: number;
  types: PokemonTypesObject[];
};

export const PokemonCard: React.FC<PokemonCardProps> = ({ data }) => {
  const [pokemon, setPokemon] = useState({} as PokemonObject);

  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`;

  const getPokemonInfo = async () => {
    try {
      const res = await axios.get(data.url);

      const varieties = res.data.varieties[0] as {
        is_default: boolean;
        pokemon: CardProps;
      };

      const response = await axios.get(varieties.pokemon.url);

      setPokemon({
        name: response.data.name,
        id: res.data.id,
        types: response.data.types,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const pokemonID = () => {
    if (pokemon.id < 100 && pokemon.id < 10) {
      return `#00${pokemon.id}`;
    }
    if (pokemon.id < 100 && pokemon.id >= 10) {
      return `#0${pokemon.id}`;
    }

    if (pokemon.id >= 100) {
      return `#${pokemon.id}`;
    }
  };

  useEffect(() => {
    getPokemonInfo();
  }, [data]);

  if (typeof pokemon.name === "undefined") {
    return <ActivityIndicator style={{ marginVertical: 30 }} />;
  }

  return (
    <Container type={pokemon.types[0].type.name}>
      <LeftContainer>
        <PokemonID>{pokemonID()}</PokemonID>
        <PokemonName>{pokemon.name}</PokemonName>

        <PokemonTypes
          data={pokemon.types}
          renderItem={({ item }) => (
            <PokemonCardType data={item as PokemonTypesObject} />
          )}
          horizontal={true}
        />
      </LeftContainer>
      <RightContainer>
        <PokemonBackground />
        <PokemonImage source={{ uri: imageURL + `${pokemon.id}` + ".png" }} />
      </RightContainer>
    </Container>
  );
};
