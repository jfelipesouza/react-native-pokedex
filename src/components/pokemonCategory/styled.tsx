import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: ${({ theme }) => theme.space.sm};
`;
export const Inline = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space.sm} 0;
  padding: 0 ${({ theme }) => theme.space.sm};
  width: 98%;
`;

export const Title = styled.Text<{ type: string }>`
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme, type }) => theme.colors.types[type as "grass"]};
`;

export const ItemText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.description};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const ItemInfo = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.description};
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.space.sm} 0;
  text-transform: capitalize;
`;

export const ItemList = styled.FlatList``;
