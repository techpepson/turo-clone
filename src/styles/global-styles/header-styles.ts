//style definitions for the header that can be reused for other components globally

import { headerPositionType } from "./type-exports";

export const headerPosition: headerPositionType = {
  flexProperties: `flex gap-5 justify-between align-middle items-center`,
  justifyEnd: `flex gap-10 justify-around`,
  logoImageSize: `w-32 h-32`,
};

export const searchBarStyles = {
  searchFlex: `flex items-center gap-10 items-center`,
  searchInput: `flex gap-1 flex-col`,
};
