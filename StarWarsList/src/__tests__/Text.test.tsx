// src/__tests__/Text.test.tsx

import React from "react";
import { render } from "@testing-library/react-native";
import { Text, TextProps } from "../components/Text/Text";

describe("Text Component", () => {
  const defaultProps: TextProps = {
    children: "Hello, World!",
  };

  it("renders default variant correctly", () => {
    const { getByText } = render(<Text {...defaultProps} />);
    const textElement = getByText(defaultProps.children);
    expect(textElement).toBeDefined();
    expect(textElement.props.style).toContainEqual({
      fontSize: 16, // Adjust this value based on your default font size
    });
  });

  it("renders specified variant correctly", () => {
    const { getByText } = render(
      <Text {...defaultProps} variant='headingLarge' />
    );
    const textElement = getByText(defaultProps.children);
    expect(textElement).toBeDefined();
    expect(textElement.props.style).toContainEqual({
      fontSize: 24, // Adjust this value based on your headingLarge font size
    });
  });

  it("applies custom styles correctly", () => {
    const customStyle = { color: "red" };
    const { getByText } = render(
      <Text {...defaultProps} style={customStyle} />
    );
    const textElement = getByText(defaultProps.children);
    expect(textElement).toBeDefined();
    expect(textElement.props.style).toContainEqual(customStyle);
  });
});
