import styled from "styled-components/native";

export const Container = styled.View<{ type: string }>`
  background-color: ${({ type, theme }) =>
    theme.colors.typesBackground[type as "grass"]};
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.space.sm};
  margin-left: ${({ theme }) => theme.space.sm};
  max-height: 40px;
`;
