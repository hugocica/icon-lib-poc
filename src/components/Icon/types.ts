import iconDictionary from "../../assets/icons/icon-dictionary";

export interface IIconProps {
  name: keyof typeof iconDictionary;
  color?: string;
  size?: number;
}
