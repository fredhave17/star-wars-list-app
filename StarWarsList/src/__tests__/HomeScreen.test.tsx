import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { HomeScreen } from "../screen/HomeScreen/HomeScreen";
import { useCharacterNameListViewModel } from "../viewmodels/CharacterListNameViewModel";
import { useFavoritesStore } from "../store/favoriteStore";
import { RouteStackParamList } from "src/routes/Routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, StackActionHelpers } from "@react-navigation/native";

jest.mock("../viewmodels/CharacterListNameViewModel");
jest.mock("../store/favoriteStore");

describe("HomeScreen", () => {
  const mockRoute: RouteProp<RouteStackParamList, "HomeScreen"> = {
    key: "mock-key",
    name: "HomeScreen",
    params: undefined,
  };

  const mockNavigation: NativeStackNavigationProp<
    RouteStackParamList,
    "HomeScreen"
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

  const mockViewModels = {
    isLoading: false,
    hasError: false,
    characters: [
      { id: 1, name: "Luke Skywalker" },
      { id: 2, name: "Leia Organa" },
    ],
    loadCharacters: jest.fn(),
    loadMoreCharacters: jest.fn(),
  };

  const mockFavoritesStore = {
    getFavoriteCharacters: jest.fn().mockReturnValue([1, 2]),
    isFavorite: jest.fn().mockReturnValue(true),
    toggleFavorite: jest.fn(),
  };

  beforeEach(() => {
    (useCharacterNameListViewModel as jest.Mock).mockReturnValue(
      mockViewModels
    );
    (useFavoritesStore as jest.Mock).mockReturnValue(mockFavoritesStore);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders error message when hasError is true", () => {
    (useCharacterNameListViewModel as jest.Mock).mockReturnValue({
      ...mockViewModels,
      hasError: true,
    });

    const { getByText } = render(
      <HomeScreen navigation={mockNavigation} route={mockRoute} />
    );
    const errorMessage = getByText(
      "Ocorreu um erro ao carregar os personagens."
    );
    expect(errorMessage).toBeTruthy();
  });

  it("renders favorite characters correctly", () => {
    const { getByText } = render(
      <HomeScreen navigation={mockNavigation} route={mockRoute} />
    );
    const favoriteTitle = getByText("Favorite Characters (2)");
    expect(favoriteTitle).toBeTruthy();
    expect(mockFavoritesStore.getFavoriteCharacters).toHaveBeenCalled();
  });

  it("renders all characters correctly", () => {
    const { getByText } = render(
      <HomeScreen navigation={mockNavigation} route={mockRoute} />
    );
    const allCharactersTitle = getByText("All characters");
    expect(allCharactersTitle).toBeTruthy();
    expect(mockViewModels.characters.length).toBe(2);
  });
});
