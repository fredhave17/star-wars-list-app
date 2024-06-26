import React from "react";
import { SafeAreaView, View } from "react-native";
import { Text } from "../../components/Text/Text";
import { styles } from "./styles";
import { RouteStackParamList } from "src/routes/Routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TopBar } from "src/components/TopBar/TopBar";

type ScreenProps = NativeStackScreenProps<RouteStackParamList, "DetailsScreen">;

export const DetailScreen = ({ route, navigation }: ScreenProps) => {
  const handlePressGoBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar onPressLeftButton={handlePressGoBack} iconRight />
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Text>{route.params.peopleId}</Text>
      </View>
    </SafeAreaView>
  );
};
