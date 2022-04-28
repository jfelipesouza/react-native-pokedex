import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import Arrow from "../../assets/svg/back.svg";

type Type = {
  type: string;
};

export const Container = styled.View<Type>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    theme.colors.typesBackground[type as "grass"]};
`;
export const Scroll = styled.ScrollView``;

export const Header = styled.View`
  height: ${({ theme }) => theme.screenDimensions.height * 0.4}px;
  padding-top: ${({ theme }) => theme.screenDimensions.statusbar}px;
  padding-left: ${({ theme }) => theme.space.md};
  padding-right: ${({ theme }) => theme.space.md};
`;

export const HeaderNavigation = styled.View`
  width: 100%;
  flex-direction: row;
  margin: ${({ theme }) => theme.space.md} 0;
`;

export const HeaderContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const PokemonImage = styled(Animatable.Image)<Type>`
  width: ${({ theme }) => theme.screenDimensions.width * 0.3}px;
  height: ${({ theme }) => theme.screenDimensions.width * 0.3}px;
  background-color: ${({ theme, type }) => theme.colors.types[type as "grass"]};
  border-radius: ${({ theme }) => theme.screenDimensions.width * 0.3}px;
`;
export const IconButton = styled.TouchableOpacity``;

export const BackArrow = styled(Arrow)``;

export const HeaderPokemonDescriptionContainer = styled(Animatable.View)``;
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

export const PokemonTypes = styled.FlatList`
  margin-top: ${({ theme }) => theme.space.sm};
  max-height: 15%;
`;

export const Content = styled(Animatable.View)`
  min-height: ${({ theme }) => theme.screenDimensions.height * 0.6}px;
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.md};
  border-top-left-radius: ${({ theme }) => theme.space.xxxlg};
  border-top-right-radius: ${({ theme }) => theme.space.xxxlg};
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: ${({ theme }) => theme.space.md};
`;

export const Title = styled.Text<Type>`
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme, type }) => theme.colors.types[type as "grass"]};
`;

export const PokemonDescription = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.description};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.space.sm} 0;
  text-align: justify;
`;
