import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Character } from "src/api/services/charactersFullDetails";
import { Text } from "../../Text/Text";

export interface CardCaracterProps {
  character: Character;
}

export const CardCaracter = ({ character }: CardCaracterProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Height
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {character.height}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Mass
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {character.mass}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Hair color
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {character.hair_color}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Skin color
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {character.skin_color}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Eye color
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {character.eye_color}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Birth year
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {character.birth_year}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Gender
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {character.gender}
          </Text>
        </View>
      </View>
    </>
  );
};
