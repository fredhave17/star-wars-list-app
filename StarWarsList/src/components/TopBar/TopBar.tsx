import React from "react";
import { View, Image } from "react-native";
import { Icon } from "../Icon/Icon";
import styles from "./styles";

export interface TopBarProps {
  iconLeft?: boolean;
  iconRight?: boolean;
  onPressLeftButton?: () => void;
}

const imagePath = "../";

export const TopBar = ({
  iconLeft,
  iconRight,
  onPressLeftButton,
}: TopBarProps) => {
  return (
    <View style={styles.container}>
      {iconLeft && (
        <View>
          <Image source={require("../../assets/images/logoStarWars.png")} />
        </View>
      )}
      <>
        {iconRight && (
          <>
            <Icon onPress={onPressLeftButton} name='arrowLeft' size={30} />
            <View>
              <Image source={require("../../assets/images/logoStarWars.png")} />
            </View>
          </>
        )}
      </>
    </View>
  );
};
