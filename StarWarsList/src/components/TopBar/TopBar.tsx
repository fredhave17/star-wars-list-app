import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Icon } from "../Icon/Icon";
import styles from "./styles";

export interface TopBarProps {
  iconLeft?: boolean;
  iconRight?: boolean;
  onPressLeftButton?: () => void;
}

export const TopBar = ({
  iconLeft,
  iconRight,
  onPressLeftButton,
}: TopBarProps) => {
  return (
    <View style={styles.container}>
      {iconLeft && (
        <TouchableOpacity
          onPress={onPressLeftButton}
          accessible={true}
          accessibilityLabel='left-icon'
        >
          <Image source={require("../../assets/images/logoStarWars.png")} />
        </TouchableOpacity>
      )}
      {iconRight && (
        <TouchableOpacity accessible={true} testID='right-icon'>
          <Icon name='arrowLeft' size={30} />
          <Image source={require("../../assets/images/logoStarWars.png")} />
        </TouchableOpacity>
      )}
    </View>
  );
};
