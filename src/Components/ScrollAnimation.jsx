import { useScroll, motion, useSpring, easeInOut } from "framer-motion";
function ScrollAnimation() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    return (
      <motion.div
        style={{ scaleX: scaleX }}
        className="fixed top-0 left-0 right-0 h-3 bg-blue-500 origin-left z-10"
        transition={{ ease: easeInOut }}
      />
    );
}
export default ScrollAnimation;