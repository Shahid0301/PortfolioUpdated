import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function About() {
  return (
    <div className=" mt-20 flex ">
      <div className=" overflow-hidden bg-cover bg-center mt-36">
        <img src="/Images/profile-pic.png" className=""></img>
      </div>
      <div className="ml-20">
        <h1 className="absolute text-white text-[180px] font-extrabold tracking-widest opacity-[0.2]">
          ABOUT
        </h1>
        <div className="relative top-32 flex justify-center items flex-col">
          <h1 className="text-5xl text-white mb-20 ">Hi! I'm Shahid khan</h1>
          <div className="text-3xl text-subheading w-[700px] tracking-widest text-balance">
            An engineering student passionate about front-end development with
            React.js. I specialize in creating user-friendly web applications
            that blend form with function. Let's collaborate and create
            something amazing together!
          </div>

          <span className="text-3xl text-blue-500 mt-5">
            <a>Checkout My Resume</a>
          </span>
          <div className="flex">
            <span className="text-4xl text-blue-500 mt-5 bg-white/[0.1] p-5 rounded-full mr-3">
              <a>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </span>
            <span className="text-4xl text-blue-500 mt-5 bg-white/[0.1] p-5 rounded-full mr-3">
              <a>
              <i class="fa-brands fa-github"></i>
              </a>
            </span>
            <span className="text-4xl text-blue-500 mt-5 bg-white/[0.1] p-5 rounded-full ">
              <a>
              <i class="fa-brands fa-instagram"></i>
              </a>
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
