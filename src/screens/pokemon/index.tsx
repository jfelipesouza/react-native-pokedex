import React, { useEffect, useState } from "react";
import axios from "axios";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { RootParamsStackRoutes } from "../../@types/routes/stack";
import { PokemonDetailsProps } from "../../@types/routes/pokemon";
import { PokemonCardType } from "../../components/pokemonCardType";
import { PokemonTypesObject } from "../../components/pokemonCard";
import { Loading } from "../../components/loading";
import { ItemData, PokemonCategory } from "../../components/pokemonCategory";
import {
  BASE_URL_POKEMON,
  IMAGE_URL,
  TYPES_POKEMON_URL,
} from "../../services/constants/pokemon";
import {
  BackArrow,
  Container,
  Content,
  Header,
  HeaderContent,
  HeaderNavigation,
  HeaderPokemonDescriptionContainer,
  IconButton,
  PokemonDescription,
  PokemonID,
  PokemonImage,
  PokemonName,
  PokemonTypes,
  Scroll,
  Title,
} from "./styled";

export const PokemonDetails: React.FC = () => {
  const { params } = useRoute<RouteProp<RootParamsStackRoutes, "pokemon">>();
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState({
    image: IMAGE_URL + `${params.id}.png`,
  } as PokemonDetailsProps);

  const [pokedexData, setPokedexData] = useState<ItemData[]>([] as ItemData[]);
  const [pokedexTraining, setPokedexTraining] = useState<ItemData[]>(
    [] as ItemData[]
  );

  const goBack = () => {
    navigation.goBack();
  };

  const createDataItem = async () => {
    setPokedexData([
      { itemText: "Species", itemInfo: pokemonData.pokeData.species.name },
      { itemText: "Height", itemInfo: pokemonData.pokeData.height + "m" },
      { itemText: "Weight", itemInfo: pokemonData.pokeData.weight + "kg" },
      { itemText: "Weaknesses", itemInfo: pokemonData.type.weaknesses },
    ]);
    setPokedexTraining([
      {
        itemText: "Catch Rate",
        itemInfo: `${pokemonData.pokeData.captureRate}pt`,
      },
      {
        itemText: "Base Friendship",
        itemInfo: `${pokemonData.pokeData.base_happiness}`,
      },
      {
        itemText: "Base Exp",
        itemInfo: `${pokemonData.pokeData.base_experience}` + "xp",
      },
      {
        itemText: "Growth Rate",
        itemInfo: `${pokemonData.pokeData.growth_rate.name.replace("-", " ")}`,
      },
    ]);
  };

  const getPokemonInfo = async () => {
    try {
      const res = await axios.get(BASE_URL_POKEMON + `pokemon/${params.id}`); // buscando as informações do pokemon

      const species = await axios.get(
        BASE_URL_POKEMON + `pokemon-species/${params.id}`
      ); // buscando as informações da especie

      const typeInfo = await axios.get(
        TYPES_POKEMON_URL + params.types[0].type.name
      ); // buscando as informações do tipo

      let height = res.data.height / 10;
      let weight = res.data.weight / 10;
      let description = species.data.flavor_text_entries[0].flavor_text.replace(
        /(\r\n|\n|\r)/gm,
        ""
      ) as string;

      let type = {
        weaknesses: typeInfo.data.damage_relations.double_damage_from,
        damageTo: typeInfo.data.damage_relations.double_damage_to,
        halfWeaknesses: typeInfo.data.damage_relations.half_damage_from,
        halfDamageTo: typeInfo.data.damage_relations.half_damage_to,
      };

      const pokeData = {
        id: params.id,
        name: params.name as string,
        types: params.types,
        height: parseFloat(height.toFixed(1)),
        weight: parseFloat(weight.toFixed(1)),
        species: res.data.species,
        base_experience: res.data.base_experience,
        stats: res.data.stats,
        captureRate: species.data.capture_rate,
        growth_rate: species.data.growth_rate,
        base_happiness: species.data.base_happiness,
      };

      setPokemonData({
        ...pokemonData,
        pokeData,
        pokeSpecies: { description },
        type,
      });
      setLoading(false);
    } catch (error) {}
  };

  const pokemonID = () => {
    if (params.id < 100 && params.id < 10) {
      return `#00${params.id}`;
    }
    if (params.id < 100 && params.id >= 10) {
      return `#0${params.id}`;
    }

    if (params.id >= 100) {
      return `#${params.id}`;
    }
  };

  useEffect(() => {
    const load = async () => {
      await getPokemonInfo();
      await createDataItem();
    };
    load();
  }, [loading === true]);

  if (loading) {
    return (
      <Container type={params.types[0].type.name}>
        <Loading animating color={colors.textLigth} size={20} />
      </Container>
    );
  }

  return (
    <Container type={params.types[0].type.name}>
      <Scroll showsVerticalScrollIndicator={false}>
        <Header>
          <HeaderNavigation>
            <IconButton onPress={goBack}>
              <BackArrow fill={colors.textLigth} />
            </IconButton>
          </HeaderNavigation>
          <HeaderContent>
            <PokemonImage
              type={params.types[0].type.name}
              source={{ uri: pokemonData.image }}
              animation={"fadeInLeft"}
            />
            <HeaderPokemonDescriptionContainer animation={"fadeInRight"}>
              <PokemonID>{pokemonID()}</PokemonID>
              <PokemonName>{params.name}</PokemonName>
              <PokemonTypes
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={params.types}
                renderItem={({ item, index }) => (
                  <PokemonCardType data={item as PokemonTypesObject} />
                )}
                keyExtractor={(item, index) => String(index)}
              />
            </HeaderPokemonDescriptionContainer>
          </HeaderContent>
        </Header>

        <Content animation={"fadeInUp"}>
          <Title type={params.types[0].type.name}>About</Title>
          <PokemonDescription>
            {pokemonData.pokeSpecies.description}
          </PokemonDescription>

          <PokemonCategory
            title={"Pokédex Data"}
            data={{ type: params.types[0].type.name, item: pokedexData }}
          />

          <PokemonCategory
            title={"Training"}
            data={{ type: params.types[0].type.name, item: pokedexTraining }}
          />
        </Content>
      </Scroll>
    </Container>
  );
};
