import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  ScrollView,
} from "react-native";
import { Text } from "../../components/Text/Text";
import { styles } from "./styles";
import { RouteStackParamList } from "../../routes/Routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TopBar } from "../../components/TopBar/TopBar";
import { useCharacterDetailViewModel } from "../../viewmodels/CharacterDetails";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { CardItem } from "../../components/CardItem/CardItem";
import { useFilmViewModel } from "../../viewmodels/FilmViewModel";
import { useFavoritesStore } from "../../store/favoriteStore";

type ScreenProps = NativeStackScreenProps<RouteStackParamList, "DetailsScreen">;

export const DetailScreen = ({ route, navigation }: ScreenProps) => {
  const handlePressGoBack = () => {
    navigation.goBack();
  };

  const { peopleId } = route.params as { peopleId: number };

  const { isLoading, character, error, loadCharacterDetails } =
    useCharacterDetailViewModel();
  const { filmTitles, error: filmError, loadFilmTitle } = useFilmViewModel();
  const { isFavorite, toggleFavorite } = useFavoritesStore();

  useEffect(() => {
    loadCharacterDetails(peopleId);
  }, [peopleId]);

  useEffect(() => {
    if (character) {
      character.films.forEach((filmUrl) => {
        if (!filmTitles[filmUrl]) {
          loadFilmTitle(filmUrl);
        }
      });
    }
  }, [character]);

  if (isLoading || !character) {
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

  if (error || filmError) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar onPressLeftButton={handlePressGoBack} iconRight />

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.containerTitle}>
          <Text variant='headingLargeBold'>Detail Screen</Text>
        </View>

        <View>
          <CardItem
            name={character.name}
            character={character}
            characterId={character.id}
            handleFavorite={toggleFavorite}
            isFavorite={isFavorite(character.id)}
          />
        </View>

        <View style={styles.containerFilms}>
          <Text variant='headingLargeBold' style={styles.FilmTitle}>
            Films
          </Text>
          {character.films.map((filmUrl) => (
            <MovieCard
              key={filmUrl}
              movieTitle={filmTitles[filmUrl] || "Loading..."}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
