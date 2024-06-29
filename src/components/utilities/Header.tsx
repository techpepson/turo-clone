import React from "react";
import { Hosts, Ride } from "./utility-export";
import { heroIcons } from "../../assets/icons/icons";
import { turoImage } from "../../assets/images";
import { headerPosition } from "../../styles/global-styles/header-styles";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      {/*header section of the page is defined here to be used globally as a utility component*/}
      <header>
        {/*containing div for the top section header*/}
        <div className={`${headerPosition.flexProperties}`}>
          {/*company logo*/}
          <Link to="/">
            <img
              src={turoImage}
              alt="an image of the company logo"
              className={`${headerPosition.logoImageSize}`}
            />
          </Link>
          {/*right-content header*/}
          <div className={`${headerPosition.justifyEnd}`}>
            {/*book a ride button*/}
            <Link to="#">
              <Ride />
            </Link>
            {/*become a host button*/}
            <Link to="#">
              <Hosts />
            </Link>
            {/*user-profile icon*/}
            <button className={`relative right-2 text-[#0ea5e9]`}>
              {heroIcons.user}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
