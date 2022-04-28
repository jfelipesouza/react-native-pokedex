import styled from "styled-components/native";
import { RFPercentage as Percent } from "react-native-responsive-fontsize";
import SearchIcon from "../../assets/svg/search.svg";
import TrashIcon from "../../assets/svg/trash.svg";

export const Container = styled.View`
  position: relative;
  width: 100%;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const IconButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.space.xlg};
  left: ${`${Percent(5) + 5}px`};
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.inputBackgroundPressed};
`;

export const Icon = styled(SearchIcon)``;
export const Trash = styled(TrashIcon)``;

export const TrashButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.inputBackgroundPressed};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.space.xlg};
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  padding-left: ${`${Percent(5) + 10}px`};
  padding-right: ${`${Percent(6.2) + 10}px`};
  border-radius: ${({ theme }) => theme.border.md};
  font-size: ${({ theme }) => theme.fontSize.filterTitle};
  elevation: 3;
  color: ${({ theme }) => theme.colors.text};
`;

export const IndicatorContainer = styled.View`
  position: absolute;
  right: 10px;
  z-index: 10;
`;
