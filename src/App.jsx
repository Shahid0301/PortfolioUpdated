import Introduction from "./Components/Introduction";
import About from "./Components/About";

import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

import ScrollAnimation from "./Components/ScrollAnimation";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import "./global.css";
function App() {
  const sections = ["Home", "About", "Skills", "Portfolio", "Contact"];
  return (
    <>
      <ScrollAnimation />
      <div className="bg-[url('/Images/background.jpg')] bg-opacity-1 bg-fixed bg-cover bg-center font-Poppins scroll-smooth">
        <ScrollToTopButton />
        <Navbar sections={sections} />
        <Introduction />
        <About />
        <Skills />
        <Projects />

        <Contact />
      </div>
    </>
  );
}

export default App;
