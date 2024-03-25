import React from "react";
import { motion } from "framer-motion";
function Projects() {
  return (
    <div className="tracking-widest overflow-hidden">
      <div className="text-center h-[80%] m-72">
        <h2 className="text-subheading text-5xl">PORTFOLIO</h2>
        <h1 className="text-white text-8xl">Checkout a few of my works</h1>
      </div>
      <div className="flex justify-evenly relative overflow-hidden">
        <motion.div
          className="mx-20 relative group transition-opacity ease-in-out overflow-hidden"
          initial={{ translateX: -150, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/Images/notekeeping.jpg"
            className="object-cover w-full h-[40vw] transition-transform duration-500 transform group-hover:scale-110"
            alt="Notekeeping"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black/[0.3] invisible transition-all ease-in-out duration group-hover:visible">
            <span className="text-4xl text-blue-500 mt-5 bg-white/[0.9] p-5 rounded-full mr-3">
              <a href="https://shahid0301.github.io/NoteKeepingWebsite/">
                <i className="fas fa-search"></i>
              </a>
            </span>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col mx-20 w-full text-balance"
          initial={{ translateX: 150, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-8xl">NoteKeeping Website</h1>
          <div className="w-3/4 text-subheading text-3xl my-10">
            Streamline your note-taking with our user-friendly website. Create,
            edit, and access your notes anytime, anywhere. Keep it simple, stay
            organized.
                  </div>
                  <div className="text-white">
                      TechStack:<span className="mx-5 text-subheading">Html,Css,JavaScript</span>
                  </div>
          <a
            href="https://shahid0301.github.io/NoteKeepingWebsite/"
            className="text-3xl text-blue-500 mt-5"
          >
            View Project
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
