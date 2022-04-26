import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, SeachPokemon } from "../../components/search";
import { Container, ListPokemon, SubTitle, Title } from "./styled";
import { ActivityIndicator } from "react-native";
import { BASE_URL_POKEMON } from "../../services/constants/pokemon";
import { CardProps, PokemonCard } from "../../components/pokemonCard";
import { useTheme } from "styled-components";
import { Loading } from "../../components/loading";

const Home: React.FC = () => {
  const { icons, colors } = useTheme();

  const [data, setData] = useState([] as SeachPokemon[]);

  const [indicator, setIndicator] = useState(true);

  const [load, setLoad] = useState(false);

  const getListPokemon = async (value: number) => {
    setLoad(true);
    if (data.length < 829) {
      try {
        let offset = data.length;
        const res = await axios(
          BASE_URL_POKEMON + `pokemon-species?limit=${value}&offset=${offset}`
        );
        setData([...data, ...res.data.results]);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const infinityScroll = async () => {
    if (indicator === true) {
      await getListPokemon(20);
    }
  };

  useEffect(() => {
    const loadScreen = async (): Promise<void> => {
      if (data.length === 0) {
        await getListPokemon(28);
      }
    };
    loadScreen();
  }, [data.length === 0]);

  if (load === true && data.length === 0) {
    return <Loading animating={load} size={20} color={colors.primary} />;
  }

  return (
    <Container>
      <Title>Pokédex</Title>
      <SubTitle>
        Search for Pokémon by name or using the National Pokédex number.
      </SubTitle>

      <Search onSearch={setData} setIndicator={setIndicator} />

      <ListPokemon
        data={data}
        renderItem={({ item }) => <PokemonCard data={item as CardProps} />}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10 }}
        onEndReached={infinityScroll}
        onEndReachedThreshold={2}
        ListFooterComponent={
          <ActivityIndicator
            size={icons.xxlg}
            color={colors.primary}
            animating={indicator}
            style={{ display: indicator ? "flex" : "none" }}
          />
        }
      />
    </Container>
  );
};

export default Home;
