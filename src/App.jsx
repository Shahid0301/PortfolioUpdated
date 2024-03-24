import React from "react";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="bg-[url('/Images/background.jpg')] bg-opacity-1 bg-fixed bg-cover bg-center font-Poppins ">
      <Introduction />
      <About/>
      <Skills/>

    </div>
  );
}
export default App;