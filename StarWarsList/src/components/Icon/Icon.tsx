import React from "react";
import { Pressable } from "react-native";

import { ArrowDown } from "src/assets/icons/ArrowDown";
import { ArrowLeft } from "src/assets/icons/ArrowLeft";
import { Close } from "src/assets/icons/Close";
import { Search } from "src/assets/icons/Search";
import { StarLine } from "src/assets/icons/StarLine";
import { StartOutline } from "src/assets/icons/StartOutline";

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  size?: number;
  onPress?: () => void;
}
export function Icon({
  name,

  size,
  onPress,
}: IconProps) {
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SVGIcon size={size} />
      </Pressable>
    );
  }

  return <SVGIcon size={size} />;
}

const iconRegistry = {
  arrowDown: ArrowDown,
  close: Close,
  search: Search,
  starLine: StarLine,
  startOutline: StartOutline,
  arrowLeft: ArrowLeft,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
