import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { DetailScreen } from "../screen/DetailScreen/DetailScreen";
import { useCharacterDetailViewModel } from "../viewmodels/CharacterDetails";
import { useFilmViewModel } from "../viewmodels/FilmViewModel";
import { useFavoritesStore } from "../store/favoriteStore";
import { RouteProp, StackActionHelpers } from "@react-navigation/native";
import { RouteStackParamList } from "../routes/Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

jest.mock("../viewmodels/CharacterDetails");
jest.mock("../viewmodels/FilmViewModel");
jest.mock("../store/favoriteStore");

describe("DetailScreen", () => {
  const mockRoute: RouteProp<RouteStackParamList, "DetailsScreen"> = {
    key: "mock-key",
    name: "DetailsScreen",
    params: { peopleId: 1 },
  };

  const mockNavigation: NativeStackNavigationProp<
    RouteStackParamList,
    "DetailsScreen"
  > &
    StackActionHelpers<RouteStackParamList> = {
    goBack: jest.fn(),
    navigate: jest.fn(),
    reset: jest.fn(),
    dispatch: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    canGoBack: jest.fn(),
    isFocused: jest.fn(),
    getParent: jest.fn(),
    setParams: jest.fn(),
    setOptions: jest.fn(),
    getId: jest.fn(),
    getState: jest.fn(),
    replace: jest.fn(),
    push: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
  };

  const mockCharacter = {
    id: 1,
    name: "Luke Skywalker",
    films: ["https://swapi.dev/api/films/1/"],
  };

  const mockFilmTitles = {
    "https://swapi.dev/api/films/1/": "A New Hope",
  };

  const mockViewModels = {
    isLoading: false,
    character: mockCharacter,
    error: null,
    loadCharacterDetails: jest.fn(),
  };

  const mockFilmViewModel = {
    filmTitles: mockFilmTitles,
    error: null,
    loadFilmTitle: jest.fn(),
  };

  const mockFavoriteStore = {
    isFavorite: jest.fn().mockReturnValue(false),
    toggleFavorite: jest.fn(),
  };

  beforeEach(() => {
    (useCharacterDetailViewModel as jest.Mock).mockReturnValue(mockViewModels);
    (useFilmViewModel as jest.Mock).mockReturnValue(mockFilmViewModel);
    (useFavoritesStore as jest.Mock).mockReturnValue(mockFavoriteStore);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders error message when error occurs", () => {
    const errorMessage = "Error loading character details";

    (useCharacterDetailViewModel as jest.Mock).mockReturnValue({
      ...mockViewModels,
      error: errorMessage,
    });

    const { getByText } = render(
      <DetailScreen route={mockRoute} navigation={mockNavigation} />
    );

    const errorText = getByText(errorMessage);
    expect(errorText).toBeTruthy();
  });

  it("calls loadCharacterDetails on mount with correct peopleId", () => {
    render(<DetailScreen route={mockRoute} navigation={mockNavigation} />);
    expect(mockViewModels.loadCharacterDetails).toHaveBeenCalledWith(1);
  });

  it("renders character details correctly", () => {
    const { getByText } = render(
      <DetailScreen route={mockRoute} navigation={mockNavigation} />
    );

    const characterName = getByText("Luke Skywalker");
    expect(characterName).toBeTruthy();

    const filmTitle = getByText("A New Hope");
    expect(filmTitle).toBeTruthy();
  });
});
