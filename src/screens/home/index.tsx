import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search, SeachPokemon } from "../../components/search";
import { Container, Header, ListPokemon, SubTitle, Title } from "./styled";
import { ActivityIndicator, ListRenderItemInfo } from "react-native";
import { BASE_URL_POKEMON } from "../../services/constants/pokemon";
import { CardProps, PokemonCard } from "../../components/pokemonCard";
import { useTheme } from "styled-components";
import { Loading } from "../../components/loading";

const Card: React.FC<ListRenderItemInfo<CardProps>> = ({ item }) => (
  <PokemonCard data={item} />
);

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
        await getListPokemon(8);
      }
    };
    loadScreen();
  }, [data.length === 0]);

  return (
    <>
      <Header />
      <Container>
        <Title>Pokédex</Title>
        <SubTitle>
          Search for Pokémon by name or using the National Pokédex number.
        </SubTitle>

        <Search onSearch={setData} setIndicator={setIndicator} />

        {load === true && data.length === 0 ? (
          <Loading animating={load} size={20} color={colors.primary} />
        ) : (
          <ListPokemon
            data={data}
            renderItem={Card as any}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10 }}
            onEndReached={infinityScroll}
            onEndReachedThreshold={3}
            removeClippedSubviews={true}
            maxToRenderPerBatch={18}
            updateCellsBatchingPeriod={50}
            initialNumToRender={10}
            ListFooterComponent={
              <Loading
                size={icons.sm}
                color={colors.primary}
                animating={indicator}
                style={{ display: indicator ? "flex" : "none" }}
              />
            }
          />
        )}
      </Container>
    </>
  );
};

export default Home;
