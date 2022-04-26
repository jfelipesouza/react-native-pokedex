import React from "react";
import { useTheme } from "styled-components";
import { PokemonTypesObject } from "../pokemonCard";
import { Container, PokemonType } from "./styled";
import { TypeSymbol } from "./symbol";

export type PokemonCardTypeProps = {
  data: PokemonTypesObject;
};

export const PokemonCardType: React.FC<PokemonCardTypeProps> = ({ data }) => {
  const { type } = data;
  const { icons } = useTheme();

  return (
    <Container type={type.name}>
      <PokemonType>{type.name}</PokemonType>
      <TypeSymbol type={type.name} size={icons.md} />
    </Container>
  );
};
