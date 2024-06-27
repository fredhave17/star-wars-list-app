import React from "react";
import Svg, { G, Mask, Path, Rect } from "react-native-svg";
import { IconBase } from "../../components/Icon/Icon";

export const StarLine = ({ size = 20, color = "black" }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Mask
        id='mask0_252_2'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <Rect width='24' height='24' fill='#D9D9D9' />
      </Mask>
      <G mask='url(#mask0_252_2)'>
        <Path
          d='M8.85 16.8251L12 14.9251L15.15 16.8501L14.325 13.2501L17.1 10.8501L13.45 10.5251L12 7.12505L10.55 10.5001L6.9 10.8251L9.675 13.2501L8.85 16.8251ZM6.575 19.9616L8.00775 13.7923L3.22125 9.6443L9.5365 9.0963L12 3.27905L14.4635 9.0963L20.7788 9.6443L15.9923 13.7923L17.425 19.9616L12 16.6886L6.575 19.9616Z'
          fill='#F4CA37'
        />
        <Path
          d='M8.85 16.8251L12 14.9251L15.15 16.8501L14.325 13.2501L17.1 10.8501L13.45 10.5251L12 7.12505L10.55 10.5001L6.9 10.8251L9.675 13.2501L8.85 16.8251Z'
          fill='#F4CA37'
        />
      </G>
    </Svg>
  );
};
