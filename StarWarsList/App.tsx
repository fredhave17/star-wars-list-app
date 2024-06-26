import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { Button } from "src/components/Button/Button";
import { CardItem } from "src/components/CardItem/CardItem";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

export default function App() {
  return (
    <View style={styles.container}>
      <CardItem
        name={"Luke Skywalker"}
        gender={"Male"}
        birthDate={"19BBY"}
        onPress={() => {}}
      />
      <Text variant={"headingLarge"}>Appp react native star wars</Text>
      <Text variant={"headingMedium"}>Appp react native star wars</Text>
      <Text variant={"paragraphLarge"}>Appp react native star wars</Text>
      <Text variant={"paragraphMedium"}>Appp react native star wars</Text>
      <Icon name='starLine' size={50} />
      <Button text={"fimes"} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
