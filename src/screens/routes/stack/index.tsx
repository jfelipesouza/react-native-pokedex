import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootParamsStackRoutes } from "../../../@types/routes/stack";
import Home from "../../home";
import Welcome from "../../welcome";

const { Navigator, Screen } = createStackNavigator<RootParamsStackRoutes>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName={"welcome"}
    >
      <Screen name={"home"} component={Home} />
      <Screen name={"welcome"} component={Welcome} />
    </Navigator>
  );
};

export default StackRoutes;
