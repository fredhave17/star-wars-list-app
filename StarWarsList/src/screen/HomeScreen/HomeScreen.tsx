import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "../../components/Text/Text";
import { styles } from "./styles";
import { CardItem } from "src/components/CardItem/CardItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteStackParamList } from "src/routes/Routes";
import { TopBar } from "src/components/TopBar/TopBar";

type ScreenProps = NativeStackScreenProps<RouteStackParamList, "HomeScreen">;

export const HomeScreen = ({ navigation }: ScreenProps) => {
  function navigationToDetailScreen() {
    navigation.navigate("DetailsScreen", {
      peopleId: "aq3e3",
    });
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar iconLeft />
      <View style={styles.container}>
        <View>
          <Text>All characters</Text>
        </View>
        <CardItem
          name={"Luke Skaiwalker"}
          gender={"famele"}
          birthDate={"18ni"}
          onPress={navigationToDetailScreen}
        />
      </View>
    </SafeAreaView>
  );
};
