import React from "react";
import iconDict from "../../assets/icons/icon-dictionary";
import { IIconProps } from "./types";

const EmptyIcon = () => <div />;

const Icon = ({
  name,
  size = 24,
  color,
  ...rest
}: IIconProps & React.SVGAttributes<SVGAElement>) => {
  const Icon = iconDict[name] || EmptyIcon;
  return <Icon color={color} style={{ width: size, height: size }} {...rest} />;
};

export default Icon;
