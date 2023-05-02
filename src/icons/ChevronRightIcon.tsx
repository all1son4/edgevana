import React, { FC } from "react";

import { IIconProps } from "./icons.types";

export const ChevronRightIcon: FC<IIconProps> = ({ width = 32, height = 32, stroke = '#2B3E9B'}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3334 24.0011L20.3334 16.0011L12.3334 8.0011" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export default ChevronRightIcon;