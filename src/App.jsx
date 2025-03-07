import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <LandingPage />
      <LandingPage />
    </>
  );
}

export default App;
