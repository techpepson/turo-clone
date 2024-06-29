import React from "react";
import SearchBar from "./utilities/SearchBar";
import Header from "./utilities/Header";

const LandingPage: React.FC = () => {
  return (
    <>
      {/*header component rendered here*/}
      <Header />
      {/*search bar container*/}
      <div>
        <SearchBar />
      </div>
    </>
  );
};

export default LandingPage;
