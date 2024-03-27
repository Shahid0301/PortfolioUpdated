import React, { useEffect, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { ParallaxLayer } from "@react-spring/parallax";

function Introduction() {
  const contents = [
    { subhead: "HELLO I'M", head: "SHAHID KHAN", index: 0 },
    { subhead: "I'M FROM AGRA", head: "A FRONTEND DEVELOPER", index: 1 },
  ];
  const [introContent, setIntroContent] = useState(contents[0]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIntroContent((prevContent) =>
        prevContent.index === 0 ? contents[1] : contents[0]
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const variants = {
    initial: { opacity: 0, translateY: 60 },
    animate: { opacity: 1, translateY: 0 },
  };


  return (


      
    <motion.div id="home" className="w-full h-screen flex justify-center mb- items-end tracking-[12px] overflow-hidden phone:items-center">
      <motion.div
        className="text-center relative bottom-72 phone:bottom-20"
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ ease: easeInOut, duration: 2 }}
        exit={true}
      >
        <motion.div
          className=""
          key={introContent.index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4 }}
          exit={true}
        >
          <h1 className="text-subheading text-[3vw] mb-10">
            {introContent.subhead}
          </h1>
          <h1 className="text-white text-[6vw] font-bold">{introContent.head}</h1>
        </motion.div>
      </motion.div>
    </motion.div>
   

  );
}

export default Introduction;
