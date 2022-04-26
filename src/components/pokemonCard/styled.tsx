import styled from "styled-components/native";
import Pokeball from "../../assets/svg/pokeball.svg";

type CardContainerProps = {
  type: string;
};

export const Container = styled.TouchableOpacity<CardContainerProps>`
  width: 100%;
  min-height: 100px;
  background-color: ${({ theme, type }) =>
    theme.colors.typesBackground[type as "grass"]};
  margin: ${({ theme }) => theme.space.md} 0;
  border-radius: ${({ theme }) => theme.space.xlg};
  flex-direction: row;
  elevation: 3;
`;

export const LeftContainer = styled.View`
  flex: 2;
  border-top-left-radius: ${({ theme }) => theme.space.xlg};
  border-bottom-left-radius: ${({ theme }) => theme.space.xlg};
  justify-content: center;
  padding: ${({ theme }) => theme.space.lg};
`;

export const RightContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: ${({ theme }) => theme.space.xlg};
  border-top-right-radius: ${({ theme }) => theme.space.xlg};
  padding-right: ${({ theme }) => theme.space.sm};
  position: relative;
`;

export const PokemonBackground = styled(Pokeball)`
  position: absolute;
  z-index: 1;
`;

export const PokemonImage = styled.Image`
  width: ${({ theme }) => `${theme.screenDimensions.width * 0.3}px`};
  height: ${({ theme }) => `${theme.screenDimensions.width * 0.3}px`};
  z-index: 6;
`;

export const PokemonName = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.pokemonName};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: #fff;
  text-transform: capitalize;
`;

export const PokemonID = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.pokemonNumber};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.modal};
`;

export const Inline = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const PokemonTypes = styled.FlatList`
  margin-top: ${({ theme }) => theme.space.sm};
`;
