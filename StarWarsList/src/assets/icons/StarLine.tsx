import React from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import { IconBase } from "src/components/Icon/Icon";

export const StarLine = ({ size = 20, color = "black" }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Mask
        id='mask0_224_104'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={size}
        height={size}
      >
        <Rect width={size} height={size} fill='#D9D9D9' />
      </Mask>
      <G mask='url(#mask0_224_104)'>
        <Path
          d='M8.85 16.825L12 14.925L15.15 16.85L14.325 13.25L17.1 10.85L13.45 10.525L12 7.12499L10.55 10.5L6.9 10.825L9.675 13.25L8.85 16.825ZM6.575 19.9615L8.00775 13.7922L3.22125 9.64424L9.5365 9.09624L12 3.27899L14.4635 9.09624L20.7788 9.64424L15.9923 13.7922L17.425 19.9615L12 16.6885L6.575 19.9615Z'
          fill='#F4CA37'
        />
        <Path
          d='M8.85 16.825L12 14.925L15.15 16.85L14.325 13.25L17.1 10.85L13.45 10.525L12 7.12499L10.55 10.5L6.9 10.825L9.675 13.25L8.85 16.825Z'
          fill='#F4CA37'
        />
      </G>
    </Svg>
  );
};
