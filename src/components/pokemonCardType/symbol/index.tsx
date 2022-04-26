import React from "react";
import Bug from "../../../assets/svg/types/bug.svg";
import Dragon from "../../../assets/svg/types/dragon.svg";
import Dark from "../../../assets/svg/types/dark.svg";
import Electric from "../../../assets/svg/types/electric.svg";
import Fairy from "../../../assets/svg/types/fairy.svg";
import Fighting from "../../../assets/svg/types/fighting.svg";
import Fire from "../../../assets/svg/types/fire.svg";
import Flying from "../../../assets/svg/types/flying.svg";
import Ghost from "../../../assets/svg/types/ghost.svg";
import Grass from "../../../assets/svg/types/grass.svg";
import Ground from "../../../assets/svg/types/ground.svg";
import Ice from "../../../assets/svg/types/ice.svg";
import Normal from "../../../assets/svg/types/normal.svg";
import Psychic from "../../../assets/svg/types/psychic.svg";
import Poison from "../../../assets/svg/types/poison.svg";
import Rock from "../../../assets/svg/types/rock.svg";
import Steel from "../../../assets/svg/types/steel.svg";
import Water from "../../../assets/svg/types/water.svg";

type TypeSymbolProps = {
  type: string;
  size: number;
};

export const TypeSymbol: React.FC<TypeSymbolProps> = ({ type, size }) => {
  switch (type) {
    case "bug":
      return (
        <Bug fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "dark":
      return (
        <Dark fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "dragon":
      return (
        <Dragon fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "grass":
      return (
        <Grass fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "electric":
      return (
        <Electric fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "fairy":
      return (
        <Fairy fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "fire":
      return (
        <Fire fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "fighting":
      return (
        <Fighting fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "flying":
      return (
        <Flying fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "ghost":
      return (
        <Ghost fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "ground":
      return (
        <Ground fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "ice":
      return (
        <Ice fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "normal":
      return (
        <Normal fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "psychic":
      return (
        <Psychic fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "poison":
      return (
        <Poison fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "rock":
      return (
        <Rock fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "steel":
      return (
        <Steel fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );

    case "water":
      return (
        <Water fill={"#fff"} fillRule="evenodd" height={size} width={size} />
      );
    default:
      return <></>;
  }
};
