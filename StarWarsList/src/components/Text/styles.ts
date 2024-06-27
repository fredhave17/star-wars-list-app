import { TextStyle, ViewStyle } from "react-native";
import { $COLORS } from "../../theme/colors";

export type TextVariants =
  | "headingLarge"
  | "headingLargeBold"
  | "headingMedium"
  | "headingMediumBold"
  | "paragraphLarge"
  | "paragraphMedium";

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {
    fontSize: 20,
    lineHeight: 28,
    color: $COLORS.colorText,
  },
  headingLargeBold: {
    fontSize: 20,
    lineHeight: 28,
    color: $COLORS.colorText,
    fontWeight: "bold",
  },
  headingMedium: {
    fontSize: 16,
    lineHeight: 22.4,
    color: $COLORS.colorText,
  },
  headingMediumBold: {
    fontSize: 16,
    lineHeight: 22.4,
    color: $COLORS.colorText,
    fontWeight: "bold",
  },
  paragraphLarge: {
    fontSize: 14,
    lineHeight: 19.6,
    color: $COLORS.colorText,
  },
  paragraphMedium: {
    fontSize: 12,
    lineHeight: 16.8,
    color: $COLORS.colorText,
  },
};

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  } as ViewStyle,

  headingLarge: {
    ...$fontSizes.headingLarge,
    color: "#333",
  } as TextStyle,

  paragraph: {
    ...$fontSizes.paragraphMedium,
    color: "#666",
  } as TextStyle,
};
