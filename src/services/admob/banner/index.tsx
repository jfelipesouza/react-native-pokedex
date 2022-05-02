import { BannerAd, BannerAdSize, TestIds } from "@react-native-admob/admob";
import React from "react";
import { StyleSheet, View } from "react-native";

export type BannerProps = {
  position: "top" | "bottom";
  id?: string;
};

export const Banner: React.FC<BannerProps> = ({ position, id }) => {
  return (
    <View style={[styles.container, styles[position]]}>
      <BannerAd
        size={BannerAdSize.ADAPTIVE_BANNER}
        unitId={id ? id : TestIds.BANNER}
        onAdFailedToLoad={(error) => console.log(error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  top: {
    top: 0,
  },
  bottom: {
    bottom: 0,
  },
});
