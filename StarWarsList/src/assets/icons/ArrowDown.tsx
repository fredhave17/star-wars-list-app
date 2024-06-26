import React from "react";
import { G, Mask, Path, Rect, Svg } from "react-native-svg";
import { IconBase } from "src/components/Icon/Icon";

export const ArrowDown = ({ size = 20, color = "black" }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <Mask
        id='mask0_224_47'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='24'
        height='24'
      >
        <Rect
          y='24'
          width='24'
          height='24'
          transform='rotate(-90 0 24)'
          fill='#D9D9D9'
        />
      </Mask>
      <G mask='url(#mask0_224_47)'>
        <Path
          d='M15.0538 12.0001L9.4 17.6538L8.34625 16.6001L12.9463 12.0001L8.34625 7.40006L9.4 6.34631L15.0538 12.0001Z'
          fill='white'
        />
      </G>
    </Svg>
  );
};
