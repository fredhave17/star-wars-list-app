import React from "react";
import { render, screen } from "@testing-library/react-native";
import { CardCaracter } from "../components/CardItem/CardCaracter/CardCaracter";
import { Character } from "src/api/services/charactersFullDetails";

const mockCharacter: Character = {
  id: 1,
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "Tatooine",
  films: ["A New Hope", "The Empire Strikes Back"],
};

describe("CardCaracter Component", () => {
  it("renders character details correctly", () => {
    render(<CardCaracter character={mockCharacter} />);

    expect(screen.getByText("Height")).toBeTruthy();
    expect(screen.getByText("172")).toBeTruthy();
    expect(screen.getByText("Mass")).toBeTruthy();
    expect(screen.getByText("77")).toBeTruthy();
    expect(screen.getByText("Hair color")).toBeTruthy();
    expect(screen.getByText("blond")).toBeTruthy();
    expect(screen.getByText("Skin color")).toBeTruthy();
    expect(screen.getByText("fair")).toBeTruthy();
    expect(screen.getByText("Eye color")).toBeTruthy();
    expect(screen.getByText("blue")).toBeTruthy();
    expect(screen.getByText("Birth year")).toBeTruthy();
    expect(screen.getByText("19BBY")).toBeTruthy();
    expect(screen.getByText("Gender")).toBeTruthy();
    expect(screen.getByText("male")).toBeTruthy();
  });
});
