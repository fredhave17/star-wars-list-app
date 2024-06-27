import React from "react";
import { Line, Svg } from "react-native-svg";
import { IconBase } from "../../components/Icon/Icon";

export function Close({ size = 20, color = "black" }: IconBase) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <Line x1='18' y1='6' x2='6' y2='18'></Line>
      <Line x1='6' y1='6' x2='18' y2='18'></Line>
    </Svg>
  );
}
