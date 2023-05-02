import React, { FC } from "react";

import { IIconProps } from "./icons.types";

export const DiscoverBoxIcon: FC<IIconProps> = ({ width = 22, height = 23, fill= '#FFFFFF'}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8252 4.53012C17.1694 6.93178 18.3336 2.49512 18.3336 2.49512C18.3336 2.49512 17.3161 8.05928 12.6411 10.3326C11.6877 10.8001 11.0919 11.0476 11.0919 11.0476L3.4194 7.30762L11.0919 4.16345C11.0919 4.16345 10.9086 4.10845 11.8252 4.53012ZM10.1936 20.8285L3.05273 16.9601V8.97595L10.1936 12.6151V20.8285ZM11.8069 20.8285L18.9569 16.9601V8.97595L11.8069 12.6151V20.8285Z"
            fill={fill}/>
    </svg>

  );
};

export default DiscoverBoxIcon;