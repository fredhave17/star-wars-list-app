import React from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import { IconBase } from "src/components/Icon/Icon";

export const StartOutline = ({ size = 20, color = "black" }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 18 17' fill='none'>
      <Path
        d='M5.85 13.825L9 11.925L12.15 13.85L11.325 10.25L14.1 7.84999L10.45 7.52499L9 4.12499L7.55 7.49999L3.9 7.82499L6.675 10.25L5.85 13.825ZM3.575 16.9615L5.00775 10.7922L0.221252 6.64424L6.5365 6.09624L9 0.278992L11.4635 6.09624L17.7788 6.64424L12.9923 10.7922L14.425 16.9615L9 13.6885L3.575 16.9615Z'
        fill='white'
      />
    </Svg>
  );
};
