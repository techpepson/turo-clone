import React from "react";
import "@radix-ui/themes/styles.css";
import { Routes, Route } from "react-router-dom";
import { Headers } from "./components/utilities/utility-export";
import { LandingPage } from "./components/component-export";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/header" element={<Headers />} />
      </Routes>
    </>
  );
};

export default App;
