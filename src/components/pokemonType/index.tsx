import React from "react";
import { Container } from "./styled";
import { TypeSymbol } from "../pokemonCardType/symbol";

export type PokemonTypeProps = {
  data: {
    name: string;
    size: number;
  };
};

export const PokemonTypeCard: React.FC<PokemonTypeProps> = ({ data }) => {
  const { size, name } = data;
  return (
    <Container type={name}>
      <TypeSymbol size={size} type={name} />
    </Container>
  );
};
