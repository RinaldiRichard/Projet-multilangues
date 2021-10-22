import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
      <Slider />
    </ContextProvider>
  );
}

export default App;
