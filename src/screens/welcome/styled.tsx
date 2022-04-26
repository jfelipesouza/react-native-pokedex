import AnimatedLottieView from "lottie-react-native";
import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.types.water};
`;

export const Content = styled.View`
  height: 75%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View`
  margin-top: ${({ theme }) => `${theme.screenDimensions.statusbar}px`};
  margin-bottom: ${({ theme }) => theme.border.md};
  border-radius: ${({ theme }) => `${theme.screenDimensions.width * 0.5}px`};
  background-color: ${({ theme }) => theme.colors.typesBackground.water};
`;
export const Animation = styled(AnimatedLottieView)`
  width: 80%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.textLigth};
  align-self: center;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSize.pokemonName};
  color: ${({ theme }) => theme.colors.textLigth};
`;

export const Footer = styled(Animatable.View)`
  height: 25%;
  background-color: ${({ theme }) => theme.colors.types.dragon};
  border-top-left-radius: ${({ theme }) => theme.space.lg};
  border-top-right-radius: ${({ theme }) => theme.space.lg};
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme }) => theme.space.sm};
  padding-bottom: ${({ theme }) => theme.space.sm};
  background-color: ${({ theme }) => theme.colors.types.water};
  border-radius: ${({ theme }) => theme.border.sm};
`;
