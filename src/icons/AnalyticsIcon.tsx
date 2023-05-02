import React, { FC } from "react";

import { IIconProps } from "./icons.types";

export const AnalyticsIcon: FC<IIconProps> = ({ width = 24, height = 24}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.56" d="M12.0512 21.949C9.4872 21.9468 7.022 20.9598 5.16491 19.1919C3.30782 17.4241 2.20073 15.0104 2.07237 12.4497C1.944 9.88887 2.80416 7.37661 4.47515 5.43189C6.14614 3.48718 8.50027 2.25861 11.0512 2V6.04C9.9665 6.22351 8.95322 6.70199 8.12235 7.42304C7.29149 8.1441 6.67509 9.07991 6.34068 10.128C6.00627 11.176 5.96674 12.2959 6.22642 13.3649C6.4861 14.4339 7.03499 15.4109 7.81294 16.1887C8.5909 16.9666 9.56792 17.5153 10.637 17.7748C11.706 18.0344 12.8259 17.9947 13.8739 17.6601C14.9219 17.3255 15.8576 16.709 16.5786 15.878C17.2995 15.0471 17.7779 14.0337 17.9612 12.949H22.0002C21.7491 15.4143 20.5928 17.699 18.755 19.3614C16.9172 21.0237 14.5283 21.9457 12.0502 21.949H12.0512ZM22.0012 10.949H17.9612C17.7536 9.72232 17.1693 8.59067 16.2895 7.71103C15.4097 6.8314 14.2779 6.24738 13.0512 6.04V2C15.3446 2.23457 17.487 3.25263 19.1173 4.88257C20.7476 6.51251 21.7661 8.65467 22.0012 10.948V10.949Z" fill="#151F4E" fillOpacity="0.56"/>
    </svg>
  );
};

export default AnalyticsIcon;