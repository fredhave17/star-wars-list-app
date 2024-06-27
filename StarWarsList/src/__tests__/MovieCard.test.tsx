// src/__tests__/MovieCard.test.tsx

import React from "react";
import { render } from "@testing-library/react-native";
import { MovieCard, MovieCardProps } from "../components/MovieCard/MovieCard";

describe("MovieCard Component", () => {
  const defaultProps: MovieCardProps = {
    movieTitle: "Star Wars: A New Hope",
  };

  it("renders movie title correctly", () => {
    const { getByText } = render(<MovieCard {...defaultProps} />);
    const titleElement = getByText(defaultProps.movieTitle);
    expect(titleElement).toBeDefined();
  });
});
