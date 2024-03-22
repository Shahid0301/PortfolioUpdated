import React from "react";
import { motion } from "framer-motion";

// Reusable component for social media icons
const SocialMediaIcon = ({ icon }) => (
  <span className="text-4xl text-blue-500 mt-5 bg-white/[0.1] p-5 rounded-full mr-3">
    <a href={icon.link}>
      <i className={`fa-brands fa-${icon.name}`}></i>
    </a>
  </span>
);

function About() {
  return (
    <div className="mt-20 flex overflow-hidden">
      {/* Image */}
      <div className="overflow-hidden bg-cover bg-center mt-36">
        <img src="/Images/profile-pic.png" alt="Profile" />
      </div>

      {/* Text Content */}
      <motion.div
        className="ml-20"
        initial={{ translateY: 80 }}
        transition={{ duration: 2 }}
        whileInView={{ translateY: 0 }}
      >
        {/* Heading */}
        <h1 className="absolute text-white text-[180px] font-extrabold tracking-widest opacity-[0.2]">
          ABOUT
        </h1>

        {/* Main Content */}
        <div className="relative top-32 flex flex-col">
          <h1 className="text-5xl text-white mb-20">Hi! I'm Shahid khan</h1>
          <div className="text-3xl text-subheading w-[700px] tracking-widest text-balance">
            An engineering student passionate about front-end development with
            React.js. I specialize in creating user-friendly web applications
            that blend form with function. Let's collaborate and create
            something amazing together!
          </div>

          {/* Social Media Icons */}
          <div className="flex">
            <SocialMediaIcon
              icon={{
                name: "linkedin",
                link: "https://www.linkedin.com/in/shahid-khan-7a97051b8/",
              }}
            />
            <SocialMediaIcon
              icon={{ name: "github", link: "https://github.com/Shahid0301" }}
            />
            <SocialMediaIcon
              icon={{
                name: "instagram",
                link: "https://www.instagram.com/shahid_0301/",
              }}
            />
          </div>

          {/* Link to Resume */}
          <a
            href="/files/resume.pdf"
            download
            className="text-3xl text-blue-500 mt-5"
          >
            Download My Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
