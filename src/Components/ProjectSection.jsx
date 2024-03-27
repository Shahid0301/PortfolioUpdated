import { motion } from "framer-motion";
function ProjectSection({ project }) {
  const initialAnimation1 =
    project.id % 2 !== 0
      ? { translateX: -30, opacity: 0 }
      : { translateX: 30, opacity: 0 };
      const initialAnimation2 =
      project.id % 2 === 0
        ? { translateX: -30, opacity: 0 }
        : { translateX: 30, opacity: 0 };
  return (
    <div
      className={`flex justify-evenly relative overflow-hidden mt-36 ${
        project.id % 2 === 0 ? "flex-row-reverse" : ""
      } phone:flex-col phone:mt-10`}
    >
      <motion.div
        className="mx-20 relative group transition-opacity ease-in-out overflow-hidden phone:mx-4"
          initial={initialAnimation1}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1}}
      >
        <img
          src={`/Images/${project.image}.jpg`}
          className="object-cover w-full h-[40vw] transition-transform duration-500 transform group-hover:scale-110 phone:h-[60vw]"
          alt="Notekeeping"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black/[0.3] invisible transition-all ease-in-out duration group-hover:visible">
          <span className="text-4xl text-blue-500 mt-5 bg-white/[0.9] p-5 rounded-full mr-3">
            <a href={project.link}>
              <i className="fas fa-search"></i>
            </a>
          </span>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col mx-20 w-full text-balance text-wrap phone:mx-4"
          initial={initialAnimation2}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-white text-[6vw] phone:mt-5">{project.title}</h1>
        <div className="w-3/4 text-subheading text-justify text-[1.5vw] my-10 phone:text-[4vw] phone:w-[90%]">
          {project.description}
        </div>
        <div className="text-white">
          TechStack:<span className="mx-5 text-subheading text-wrap">{project.techStack}</span>
        </div>
        <a href={project.link} className="text-3xl text-blue-500 mt-5">
          View Project
        </a>
      </motion.div>
    </div>
  );
}

export default ProjectSection;
