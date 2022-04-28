import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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
import { PokemonCardType } from "../pokemonCardType";
import { RootParamsStackRoutes } from "../../@types/routes/stack";
import { IMAGE_URL } from "../../services/constants/pokemon";
import { Loading } from "../loading";

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
  const navigation =
    useNavigation<StackNavigationProp<RootParamsStackRoutes>>();

  const [pokemon, setPokemon] = useState({} as PokemonObject);

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

  const onNavigate = (route: string, params: {}) => {
    navigation.navigate(route as never, params as never);
  };

  useEffect(() => {
    getPokemonInfo();
  }, [data]);

  if (typeof pokemon.name === "undefined" || pokemon.types.length === 0) {
    return (
      <Loading
        animating={true}
        color={"#008080"}
        size="md"
        style={{ marginVertical: 20 }}
      />
    );
  }

  return (
    <Container
      type={pokemon.types[0].type.name}
      onPress={() => onNavigate("pokemon", pokemon)}
    >
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
        <PokemonImage source={{ uri: IMAGE_URL + `${pokemon.id}` + ".png" }} />
      </RightContainer>
    </Container>
  );
};
