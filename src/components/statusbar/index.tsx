import React from "react";
import { StatusBar, StatusBarProps } from "react-native";

export type StatusBarParams = StatusBarProps & {
  visible: boolean;
  color: string;
};

export const StatusBarComponent: React.FC<StatusBarParams> = ({
  visible,
  color,
  ...rest
}) => {
  return <StatusBar backgroundColor={color} translucent={!visible} {...rest} />;
};
