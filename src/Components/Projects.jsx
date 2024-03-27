import React from "react";
import { motion } from "framer-motion";
import projectData from "./../assets/projects.json";
import ProjectSection from "./ProjectSection";

function Projects() {
  return (
    <div id="portfolio" className="tracking-widest overflow-hidden">
      <div className="text-center h-[80%] m-72">
        <h2 className="text-subheading text-5xl">PORTFOLIO</h2>
        <h1 className="text-white text-8xl">Checkout a few of my works</h1>
      </div>
      {/* Map over projectData and render ProjectSection for each project */}
      {projectData.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
