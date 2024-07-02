"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import SearchBar from "../utilities/SearchBar";
import { image1 } from "../../assets/images";
import { image2 } from "../../assets/images";
import { image5 } from "../../assets/images";

export function ImagesSliderDemo() {
  const images = [image1, image2, image5];
  return (
    <>
      <SearchBar />
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The peer-to-peer car rental app
            <br /> that saves you resources
          </motion.p>
        </motion.div>
      </ImagesSlider>
    </>
  );
}
