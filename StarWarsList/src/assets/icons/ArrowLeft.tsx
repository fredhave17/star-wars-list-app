import React from "react";
import { G, Mask, Path, Rect, Svg } from "react-native-svg";
import { IconBase } from "../../components/Icon/Icon";

export const ArrowLeft = ({ size = 20, color = "black" }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <G id='chevron_backward'>
        <Mask
          id='mask0_224_528'
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <Rect id='Bounding box' width='24' height='24' fill='#D9D9D9' />
        </Mask>
        <G mask='url(#mask0_224_528)'>
          <Path
            id='chevron_backward_2'
            d='M14 17.6538L8.34625 12L14 6.34625L15.0538 7.4L10.4538 12L15.0538 16.6L14 17.6538Z'
            fill='white'
          />
        </G>
      </G>
    </Svg>
  );
};
