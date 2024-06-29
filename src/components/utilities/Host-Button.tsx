import { Button } from "@radix-ui/themes";
import React from "react";
//button component for the become a host function which can be imported for use globally
const Host: React.FC = () => {
  return (
    <>
      <Button className="cursor-pointer" color="jade">Become a host</Button>
    </>
  );
};

export default Host;
