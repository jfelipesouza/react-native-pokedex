import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { BasicObjectPokemon } from "../../@types/routes/pokemon";
import { PokemonTypeCard } from "../pokemonType";
import {
  Container,
  Title,
  ItemList,
  ItemText,
  Inline,
  ItemInfo,
} from "./styled";

export type ItemData = {
  itemText: string;
  itemInfo: string | BasicObjectPokemon[];
};

export type PokemonCategoryProps = {
  title?: string;
  data: {
    type: string;
    item: ItemData[];
  };
};

export const PokemonCategoryItem: React.FC<ItemData> = ({
  itemInfo,
  itemText,
}) => {
  const [data, setData] = useState([] as { name: string; size: number }[]);
  const { icons } = useTheme();

  const verify = () => {
    if (typeof itemInfo === "string") {
      return;
    } else {
      let newData: any[] = [];
      itemInfo.map((item) => newData.push({ name: item.name, size: icons.md }));
      setData(newData);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <Inline>
      <ItemText>{itemText}</ItemText>
      {typeof itemInfo === "string" ? (
        <ItemInfo>{itemInfo}</ItemInfo>
      ) : (
        <ItemList
          data={data}
          renderItem={({ item, index }) => (
            <PokemonTypeCard data={item as any} />
          )}
          horizontal={true}
          contentContainerStyle={{ justifyContent: "flex-end", width: "100%" }}
        />
      )}
    </Inline>
  );
};

export const PokemonCategory: React.FC<PokemonCategoryProps> = ({
  title,
  data,
}) => {
  return (
    <Container>
      <Title type={data.type}>{title}</Title>
      {data.item.map((item) => (
        <PokemonCategoryItem
          itemInfo={item.itemInfo}
          itemText={item.itemText}
        />
      ))}
    </Container>
  );
};
