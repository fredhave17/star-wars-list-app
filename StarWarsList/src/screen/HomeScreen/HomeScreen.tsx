import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, View } from "react-native";
import { Text } from "../../components/Text/Text";
import { styles } from "./styles";
import { CardItem } from "src/components/CardItem/CardItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteStackParamList } from "src/routes/Routes";
import { TopBar } from "src/components/TopBar/TopBar";
import { useCharacterNameListViewModel } from "src/viewmodels/CharacterListNameViewModel";
import { Character } from "src/api/services/characterNameService";
import { useFavoritesStore } from "src/store/favoriteStore";

type ScreenProps = NativeStackScreenProps<RouteStackParamList, "HomeScreen">;

const EmptyState = () => (
  <View style={styles.emptyStateContainer}>
    <Text style={styles.emptyStateText}>No favorite characters yet!</Text>
  </View>
);

export const HomeScreen = ({ navigation }: ScreenProps) => {
  const {
    isLoading,
    hasError,
    characters,
    loadCharacters,
    loadMoreCharacters,
  } = useCharacterNameListViewModel();

  const { getFavoriteCharacters, isFavorite, toggleFavorite } =
    useFavoritesStore();

  useEffect(() => {
    loadCharacters();
  }, []);

  const renderCharacterItem = ({ item }: { item: Character }) => (
    <CardItem
      name={item.name}
      characterId={item.id}
      isFavorite={isFavorite(item.id)}
      onPress={() =>
        navigation.navigate("DetailsScreen", { peopleId: item.id })
      }
      handleFavorite={() => toggleFavorite(item.id)}
    />
  );

  const renderFavoriteItem = ({ item }: { item: number }) => {
    const characterName =
      characters.find((char) => char.id === item)?.name || "Unknown";

    return (
      <CardItem
        name={characterName}
        characterId={item}
        isFavorite={true}
        onPress={() => {
          navigation.navigate("DetailsScreen", { peopleId: item });
        }}
        handleFavorite={() => toggleFavorite(item)}
      />
    );
  };

  if (isLoading && characters.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1B1B1B",
        }}
      >
        <ActivityIndicator size='large' color='#007AFF' />
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

      <View style={styles.favoriteContainer}>
        <Text variant='headingLargeBold' style={styles.listsTitle}>
          Favorite Characters ({getFavoriteCharacters().length})
        </Text>
        <FlatList
          data={getFavoriteCharacters()}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.toString()}
          ListEmptyComponent={<EmptyState />}
        />
      </View>

      <View style={styles.container}>
        <Text variant='headingLargeBold' style={styles.listsTitle}>
          All characters
        </Text>
        <FlatList
          data={characters}
          renderItem={renderCharacterItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={loadMoreCharacters}
          ListFooterComponent={() =>
            isLoading && characters.length > 0 ? (
              <ActivityIndicator size='large' color='#007AFF' />
            ) : null
          }
        />
      </View>
    </SafeAreaView>
  );
};
