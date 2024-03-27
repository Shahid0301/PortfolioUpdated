//about section

import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";

function About() {
  return (
    <div
      id="about"
      className="mt-20 flex  overflow-hidden phone:flex-col phone:mt-0"
    >
      {/* Image */}
      <div className="overflow-hidden bg-cover bg-center mt-36   phone:m-10">
        <img src="/Images/profile-pic.png" alt="Profile" className="" />
      </div>

      {/* Text Content */}
      <motion.div
        className="ml-20 phone:mx-10"
        initial={{ translateY: 80 }}
        transition={{ duration: 2 }}
        whileInView={{ translateY: 0 }}
      >
        {/* Heading */}
        <h1 className="absolute text-white text-[12vw] font-extrabold tracking-widest opacity-[0.2] phone:text-[20vw]">
          ABOUT
        </h1>

        {/* Main Content */}
        <div className="relative top-32 flex flex-col phone:top-12 phone:h-[110vw] ">
          <h1 className="text-[3vw] text-white mb-20 phone:mb-9 phone:text-[6vw]">
            Hi! I'm Shahid khan
          </h1>
          <div className="text-[2vw] text-subheading w-[50vw] tracking-widest text-balance phone:w-full phone:text-[4vw]">
            An engineering student passionate about front-end development with
            React.js. I specialize in creating user-friendly web applications
            that blend form with function. Let's collaborate and create
            something amazing together!
          </div>
          <div>
            <SocialIcon />

            {/* Link to Resume */}
            <a
              href="/files/resume.pdf"
              download
              className="text-[2vw] text-blue-500 mt-5 phone:mt-6 phone:text-[6vw]"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
