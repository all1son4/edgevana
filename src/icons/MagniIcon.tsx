import React, { FC } from "react";

import { IIconProps } from "./icons.types";

export const MagniIcon: FC<IIconProps> = ({ width = 19, height = 19}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18 18L17.0714 17.0714L13.8571 13.8571M16 8.5C16 9.48491 15.806 10.4602 15.4291 11.3701C15.0522 12.2801 14.4997 13.1069 13.8033 13.8033C13.1069 14.4997 12.2801 15.0522 11.3701 15.4291C10.4602 15.806 9.48491 16 8.5 16C7.51509 16 6.53982 15.806 5.62987 15.4291C4.71993 15.0522 3.89314 14.4997 3.1967 13.8033C2.50026 13.1069 1.94781 12.2801 1.5709 11.3701C1.19399 10.4602 1 9.48491 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8.5 1C10.4891 1 12.3968 1.79018 13.8033 3.1967C15.2098 4.60322 16 6.51088 16 8.5Z" stroke="#4B516A" strokeOpacity="0.56" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
};

export default MagniIcon;