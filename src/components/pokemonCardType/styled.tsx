import styled from "styled-components/native";

type ContainerProps = {
  type: string;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, type }) => theme.colors.types[type as "ice"]};
  padding: ${({ theme }) => theme.space.sm};
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.space.sm};
  margin-right: ${({ theme }) => theme.space.sm};
  flex-direction: row-reverse;
  left: ${({ theme }) => -theme.icons.sm}px;
`;

export const PokemonType = styled.Text`
  color: ${({ theme }) => theme.colors.textLigth};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSize.pokemonType};
  margin-left: ${({ theme }) => theme.space.sm};
`;
