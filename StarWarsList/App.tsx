import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "src/components/Button/Button";
import { CardItem } from "src/components/CardItem/CardItem";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";
import { Router } from "src/routes/Routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
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
