import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Character } from "src/api/services/charactersFullDetails";
import { CardCaracter } from "./CardCaracter/CardCaracter";
import { styles } from "./styles";

export interface CardItemProps {
  name: string;
  character?: Character;
  characterId?: number;
  onPress?: () => void;
  handleFavorite?: (characterId: number) => void;
  isFavorite?: boolean;
}

export const CardItem = ({
  name,
  character,
  onPress,
  characterId,
  handleFavorite,
  isFavorite,
}: CardItemProps) => {
  const iconName = isFavorite ? "starLine" : "startOutline";

  const toggleFavorite = () => {
    if (characterId !== undefined && handleFavorite) {
      handleFavorite(characterId);
    }
  };

  const styleContainer = character
    ? styles.containerExpanded
    : styles.containerNormal;

  return (
    <View style={styleContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title} variant='headingLargeBold'>
          {name}
        </Text>
        <View style={styles.containerActions}>
          <TouchableOpacity onPress={toggleFavorite} style={styles.iconButton}>
            <Icon name={iconName} size={28} />
          </TouchableOpacity>
          {onPress && (
            <TouchableOpacity
              onPress={onPress}
              style={styles.iconButton}
              testID='favorite-icon'
            >
              <Icon name={"arrowDown"} size={28} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {character && <CardCaracter character={character} />}
    </View>
  );
};
