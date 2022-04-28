import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 ${({ theme }) => theme.space.md};
`;

export const Header = styled.View`
  height: ${({ theme }) => `${theme.screenDimensions.statusbar}px`};
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ theme }) => `${theme.screenDimensions.width}px`};
`;

export const Title = styled.Text`
  margin-top: ${({ theme }) => theme.space.xlg};
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const SubTitle = styled.Text`
  margin-top: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSize.description};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
  width: 98%;
`;

export const Image = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 100px;
  background-color: red;
`;

export const ListPokemon = styled.FlatList``;
