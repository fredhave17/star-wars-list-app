import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { CardItem, CardItemProps } from "../components/CardItem/CardItem";

describe("CardItem Component", () => {
  const mockCharacter = {
    id: 1,
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    skin_color: "fair",
    homeworld: "Tatooine",
    films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
  };

  const mockHandleFavorite = jest.fn();
  const mockOnPress = jest.fn();

  const defaultProps: CardItemProps = {
    name: "Luke Skywalker",
    character: mockCharacter,
    characterId: 1,
    handleFavorite: mockHandleFavorite,
    isFavorite: false,
    onPress: mockOnPress,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly without character details", () => {
    const { getByText, queryByTestId } = render(
      <CardItem {...defaultProps} character={undefined} />
    );

    const titleText = getByText("Luke Skywalker");
    expect(titleText).toBeTruthy();

    const expandIcon = queryByTestId("expand-icon");
    expect(expandIcon).toBeNull();
  });
});
