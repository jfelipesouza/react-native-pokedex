import React from "react";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import {
  Animation,
  Button,
  Circle,
  Container,
  Content,
  Footer,
  Subtitle,
  Title,
} from "./styled";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamsStackRoutes } from "../../@types/routes/stack";

import Pokemon from "../../assets/animation/pokemon.json";

const Welcome: React.FC = () => {
  const { replace } =
    useNavigation<StackNavigationProp<RootParamsStackRoutes>>();

  const handleNavigationScreen = (route: string, params?: {}) => {
    replace(route as never, params as never);
  };

  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <Content>
        <Animatable.View
          animation={"bounceInDown"}
          duration={1500}
          easing={"linear"}
        >
          <Circle>
            <Animation
              source={Pokemon}
              autoPlay
              loop={true}
              cacheComposition={true}
            />
          </Circle>
        </Animatable.View>
        <Animatable.View
          delay={200}
          animation={"bounceInUp"}
          duration={1500}
          easing={"linear"}
        >
          <Title>Welcome!</Title>
          <Subtitle>Catch all pokemons! </Subtitle>
        </Animatable.View>
      </Content>

      <Footer
        delay={200}
        animation={"bounceInUp"}
        duration={1500}
        easing={"linear"}
      >
        <Button onPress={() => handleNavigationScreen("home")}>
          <Subtitle>Começar</Subtitle>
        </Button>
      </Footer>
    </Container>
  );
};

export default Welcome;
