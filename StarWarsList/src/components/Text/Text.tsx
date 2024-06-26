import React from "react";
import { Text as RNText, TextStyle } from "react-native";
import { $fontSizes } from "./styles";

type TextVariants = keyof typeof $fontSizes;

interface TextProps {
  variant?: TextVariants;
  style?: TextStyle;
  children: React.ReactNode;
}

export const Text = ({
  variant = "paragraphMedium",
  style,
  children,
}: TextProps) => {
  const defaultTextStyle = $fontSizes[variant] || $fontSizes["paragraphMedium"];

  return <RNText style={[defaultTextStyle, style]}>{children}</RNText>;
};
