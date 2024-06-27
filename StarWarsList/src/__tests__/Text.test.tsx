import React from "react";
import { render } from "@testing-library/react-native";
import { Text, TextProps } from "../components/Text/Text";
import { StyleSheet } from "react-native";

describe("Text Component", () => {
  const defaultProps: TextProps = {
    children: "Hello, World!",
  };

  it("renders default variant correctly", () => {
    const { getByText } = render(<Text {...defaultProps} />);
    const textElement = getByText(defaultProps.children);
    expect(textElement).toBeDefined();

    const styles = StyleSheet.flatten(textElement.props.style);

    expect(styles.fontSize).toBe(12);
  });

  it("renders specified variant correctly", () => {
    const { getByText } = render(
      <Text {...defaultProps} variant='headingLarge' />
    );
    const textElement = getByText(defaultProps.children);
    expect(textElement).toBeDefined();

    const styles = StyleSheet.flatten(textElement.props.style);

    expect(styles.fontSize).toBe(20);
  });

  it("applies custom styles correctly", () => {
    const customStyle = { color: "red" };
    const { getByText } = render(
      <Text {...defaultProps} style={customStyle} />
    );
    const textElement = getByText(defaultProps.children);
    expect(textElement).toBeDefined();

    const styles = StyleSheet.flatten(textElement.props.style);

    expect(styles.color).toBe("red");
  });
});
