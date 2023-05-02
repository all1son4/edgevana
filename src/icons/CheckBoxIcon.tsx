import React, { FC } from "react";

import { IIconProps } from "./icons.types";

export const CheckBoxIcon: FC<IIconProps> = ({ width = 16, height = 16, stroke}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4L6 12L3 9" stroke={stroke} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"/>
    </svg>
  );
};

export default CheckBoxIcon;