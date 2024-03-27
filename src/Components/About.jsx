//about section

import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";

function About() {
  return (
    <div id="about" className="mt-20 flex overflow-hidden">
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
          <SocialIcon />

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
