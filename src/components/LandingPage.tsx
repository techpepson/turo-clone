import React from "react";
import Header from "./utilities/Header";
import { FlipWordsDemo } from "./util/FlipWords";
import { TypewriterEffectSmoothDemo } from "./util/TypewriterEffectSmooth";
import { displayImages } from "../assets/images";
import { ImagesSliderDemo } from "./util/ImageSliderDemo";

const LandingPage: React.FC = () => {
  return (
    <>
      {/*header component rendered here*/}
      <Header />
      {/*containing div for the elements of the page*/}
      <div>
        {/*container div for the image background and the search bar*/}
        <div>
          <ImagesSliderDemo />
        </div>
        {/*container for the car rental message texts*/}
        <div className="flex flex-col font-bold justify-center items-center text-neutral-600 dark:text-neutral-400">
          <div className="text-5xl">
            <FlipWordsDemo />
          </div>
          <div className="text-2xl">
            Rent just about any car, about anywhere
          </div>
        </div>
        {/*map over images to display in the home page*/}
        <div className="flex">
          {displayImages.map((image, index) => (
            <div key={index}>
              <img src={image.image} />
            </div>
          ))}
          {/*side-text for car rental */}
          <div>
            <TypewriterEffectSmoothDemo />
          </div>
        </div>
        {/*explore car section*/}
      </div>
    </>
  );
};

export default LandingPage;
