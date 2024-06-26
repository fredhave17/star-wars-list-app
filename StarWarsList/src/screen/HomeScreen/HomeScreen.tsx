// src/screens/HomeScreen.tsx

import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";
import { Text } from "../../components/Text/Text";
import { styles } from "./styles";
import { CardItem } from "src/components/CardItem/CardItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteStackParamList } from "src/routes/Routes";
import { TopBar } from "src/components/TopBar/TopBar";
import { useCharacterListViewModel } from "src/viewmodels/CharacterListViewModel";
import { Character } from "src/api/services/characterService";

type ScreenProps = NativeStackScreenProps<RouteStackParamList, "HomeScreen">;

export const HomeScreen = ({ navigation }: ScreenProps) => {
  const {
    isLoading,
    hasError,
    characters,
    loadCharacters,
    loadMoreCharacters,
  } = useCharacterListViewModel();

  useEffect(() => {
    loadCharacters();
  }, []);

  const renderCharacterItem = ({ item }: { item: Character }) => (
    <CardItem
      name={item.name}
      gender={item.gender}
      birthDate={item.birth_year}
      onPress={() =>
        navigation.navigate("DetailsScreen", { peopleId: item.id })
      }
    />
  );

  if (isLoading && characters.length === 0) {
    return (
      <View>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  if (hasError) {
    return (
      <View>
        <Text>Ocorreu um erro ao carregar os personagens.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar iconLeft />
      <View style={styles.container}>
        <Text>All characters</Text>
        <FlatList
          data={characters}
          renderItem={renderCharacterItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreCharacters} // Carrega mais personagens ao alcançar 50% do fim da lista
          ListFooterComponent={() =>
            isLoading && characters.length > 0 ? (
              <ActivityIndicator size='large' color='#0000ff' />
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
};
