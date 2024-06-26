import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  TextStyle,
} from "react-native";
import { buttonStyles } from "./styles";
import { Text } from "../Text/Text";

interface ButtonProps extends TouchableOpacityProps {
  style?: TextStyle;
  text: string;
}

export const Button = ({ style, text, ...props }) => {
  return (
    <TouchableOpacity style={[buttonStyles.button, style]} {...props}>
      <Text style={buttonStyles.buttonText} variant='headingLargeBold'>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
