import React from "react";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="bg-[url('/Images/background.jpg')] bg-opacity-1 bg-fixed bg-cover bg-center font-Poppins ">
      <Introduction />
      <About/>
   

    </div>
  );
}
export default App;