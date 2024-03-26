import React from "react";
import Introduction from "./Components/Introduction";
import About from "./Components/About";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ProjectSection from "./Components/ProjectSection";
import ScrollAnimation from "./Components/ScrollAnimation";


function App() {
  return (
    <>
      <ScrollAnimation />
      <div className="bg-[url('/Images/background.jpg')] bg-opacity-1 bg-fixed bg-cover bg-center font-Poppins ">
        {/* Wrap the portion where you want to use useScroll with motion.div */}
        <Introduction />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}



export default App;
