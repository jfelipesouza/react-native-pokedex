import React from "react";
import { ViewProps, ViewPropTypes } from "react-native";
import { useTheme } from "styled-components";
import { Container, Indicator } from "./styled";

export type LoadingParams = ViewProps & {
  size: "sm" | "md" | "lg" | "xlg" | "xxlg" | "xxxlg" | number;
  color: string;
  animating: boolean;
};

export const Loading: React.FC<LoadingParams> = ({
  size,
  color,
  animating,
  ...rest
}) => {
  const { icons } = useTheme();

  const { style } = { ...rest };

  const indicatorSize =
    typeof size === "number" ? size * icons["sm"] : icons[size];

  return (
    <Container style={style}>
      <Indicator animating={animating} color={color} size={indicatorSize} />
    </Container>
  );
};
