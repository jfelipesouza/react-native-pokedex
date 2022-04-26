import React from "react";
import { useTheme } from "styled-components";
import { Container, Indicator } from "./styled";

export type LoadingParams = {
  size: "sm" | "md" | "lg" | "xlg" | "xxlg" | "xxxlg" | number;
  color: string;
  animating: boolean;
};

export const Loading: React.FC<LoadingParams> = ({
  size,
  color,
  animating,
}) => {
  const { icons } = useTheme();

  const indicatorSize =
    typeof size === "number" ? size * icons["sm"] : icons[size];

  return (
    <Container>
      <Indicator animating={animating} color={color} size={indicatorSize} />
    </Container>
  );
};
