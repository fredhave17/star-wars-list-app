import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, View } from "react-native";
import { Text } from "../../components/Text/Text";
import { styles } from "./styles";
import { RouteStackParamList } from "src/routes/Routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TopBar } from "src/components/TopBar/TopBar";
import { useCharacterDetailViewModel } from "src/viewmodels/CharacterFilmsViewModel";
import { MovieCard } from "src/components/MovieCard/MovieCard";
import { fetchFilmTitle } from "src/api/services/filmService";

type ScreenProps = NativeStackScreenProps<RouteStackParamList, "DetailsScreen">;

export const DetailScreen = ({ route, navigation }: ScreenProps) => {
  const handlePressGoBack = () => {
    navigation.goBack();
  };

  const { peopleId } = route.params as { peopleId: number };

  const { isLoading, character, error, loadCharacterDetails } =
    useCharacterDetailViewModel();
  const [filmTitles, setFilmTitles] = useState<string[]>([]);

  useEffect(() => {
    loadCharacterDetails(peopleId);
  }, [peopleId]);

  useEffect(() => {
    if (character) {
      const fetchFilmTitles = async () => {
        try {
          const promises = character.films.map((filmUrl) =>
            fetchFilmTitle(filmUrl)
          );
          const titles = await Promise.all(promises);
          setFilmTitles(titles);
        } catch (error) {
          console.error("Erro ao obter títulos dos filmes:", error);
        }
      };

      fetchFilmTitles();
    }
  }, [character]);

  if (isLoading || !character) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar onPressLeftButton={handlePressGoBack} iconRight />
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Text>{route.params.peopleId}</Text>
      </View>
      <View>
        {filmTitles.map((title, index) => (
          <MovieCard key={index} movieTitle={title} />
        ))}
      </View>
    </SafeAreaView>
  );
};
