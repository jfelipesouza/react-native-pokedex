import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useTheme } from "styled-components";
import {
  Container,
  IconButton,
  Input,
  Icon,
  IndicatorContainer,
  Trash,
  TrashButton,
} from "./styled";
import axios from "axios";
import { Loading } from "../loading";

export type SeachPokemon = {
  name: string;
  url: string;
};

export type SearchProps = {
  onSearch: React.Dispatch<React.SetStateAction<SeachPokemon[]>>;
  setIndicator: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Search: React.FC<SearchProps> = ({ onSearch, setIndicator }) => {
  const { icons, colors } = useTheme();

  const [pokemon, setPokemon] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const onDismiss = () => {
    Keyboard.dismiss();
  };

  const cleanInput = () => {
    setPokemon("");
  };

  const handleSearchPokemon = async () => {
    try {
      const pokemonName = `https://pokeapi.co/api/v2/pokemon-species/${pokemon
        .trim()
        .toLocaleLowerCase()}`;

      const res = await axios.get(pokemonName);

      return [{ name: res.data.name, url: pokemonName }] as SeachPokemon[];
    } catch (error) {
      return [] as SeachPokemon[];
    }
  };

  const handleClick = async () => {
    setIndicator(false);
    setLoading(true);

    onDismiss();
    if (pokemon.trim() === "") {
      onSearch([]);
      setIndicator(true);
      setLoading(false);
    } else {
      const value = await handleSearchPokemon();
      if (value) {
        cleanInput();
        setLoading(false);
        onSearch(value);
      }
    }
  };

  return (
    <Container>
      <IconButton onPress={handleClick}>
        <Icon
          height={icons.lg}
          width={icons.lg}
          fill={colors.gray}
          fillRule={"evenodd"}
        />
      </IconButton>
      <Input
        placeholder="What Pokémon are you looking for?"
        placeholderTextColor={"#312f2f9f"}
        value={pokemon}
        onChangeText={(value: string) => setPokemon(value)}
        onEndEditing={handleClick}
      />
      <IndicatorContainer>
        {loading === false && pokemon !== "" ? (
          <TrashButton onPress={cleanInput}>
            <Trash
              height={icons.lg}
              width={icons.lg}
              fill={colors.gray}
              fillRule={"evenodd"}
            />
          </TrashButton>
        ) : (
          <Loading color={colors.primary} animating={loading} size={"xlg"} />
        )}
      </IndicatorContainer>
    </Container>
  );
};
