import { Button } from "@radix-ui/themes";
import React from "react";
//button component for the become a host function which can be imported for use globally
const Ride: React.FC = () => {
  return (
    <>
      <Button className="cursor-pointer" color="amber">
        Book Ride
      </Button>
    </>
  );
};

export default Ride;
