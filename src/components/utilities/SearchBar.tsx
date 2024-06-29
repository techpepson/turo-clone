import React from "react";
import { Separator, Text, TextField } from "@radix-ui/themes";
import { searchBarStyles } from "../../styles/global-styles/header-styles";

const SearchBar: React.FC = () => {
  const defaultStartDate = new Date().toISOString().split("T")[0];
  const tomorrowDate = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split("T")[0];

  return (
    <>
      {/*search bar at the top of the page to make users search for popular rides*/}

      <form action="#">
        {/*wrapper container for the search bars*/}
        <div
          className={`${searchBarStyles.searchFlex} bg-[#d8d6c5] rounded-3xl justify-center items-center`}
        >
          {/*input type for location*/}
          <div className={`${searchBarStyles.searchInput}`}>
            <Text as="label">Where</Text>
            <TextField.Root placeholder="City, airport, address, hotel">
              <TextField.Slot />
            </TextField.Root>
          </div>
          <Separator orientation="vertical" size="1" />
          {/*time input for start time*/}
          <div className={`${searchBarStyles.searchFlex}`}>
            {/*start date input*/}
            <Text as="label">From:</Text>
            <div className={`${searchBarStyles.searchInput}`}>
              <TextField.Root type="date" defaultValue={defaultStartDate}>
                <TextField.Slot />
              </TextField.Root>
            </div>
            {/*start time input*/}
            <div>
              <TextField.Root type="time" defaultValue="10:00:00">
                <TextField.Slot />
              </TextField.Root>
            </div>
          </div>
          <Separator orientation="vertical" />
          {/*start date and time input for end time and date*/}
          <div className={`${searchBarStyles.searchFlex}`}>
            {/*start date input for end season*/}
            <Text as="label">Until:</Text>
            <div className={`${searchBarStyles.searchInput}`}>
              <TextField.Root type="date" defaultValue={`${tomorrowDate}`}>
                <TextField.Slot />
              </TextField.Root>
            </div>
            {/*start time input*/}
            <TextField.Root type="time" defaultValue="10:00">
              <TextField.Slot />
            </TextField.Root>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
