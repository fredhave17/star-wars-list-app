import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  GestureResponderEvent,
} from "react-native";
import { styles } from "./styles";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
interface CardItemProps {
  name: string;
  gender: string;
  birthDate: string;

  onPress: (event: GestureResponderEvent) => void;
}

export const CardItem = ({
  name,
  gender,
  birthDate,
  onPress,
}: CardItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title} variant='headingLargeBold'>
          {name}
        </Text>
        <Icon name='starLine' size={36} />
      </View>
      <View>
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Gender
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {gender}
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text style={styles.title} variant='headingMedium'>
            Birth year
          </Text>
          <Text style={styles.title} variant='headingMediumBold'>
            {birthDate}
          </Text>
        </View>
      </View>
      <Button text={"Films"} style={styles.button} />
    </View>
  );
};
