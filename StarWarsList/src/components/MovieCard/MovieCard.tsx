import React from "react";
import { View } from "react-native";
import { Text } from "../Text/Text";
import { cardStyle } from "./styles";

export interface MovieCardProps {
  movieTitle: string;
}

export const MovieCard = ({ movieTitle }: MovieCardProps) => {
  return (
    <View style={cardStyle.wrapper}>
      <Text variant='headingMediumBold'>{movieTitle}</Text>
    </View>
  );
};
