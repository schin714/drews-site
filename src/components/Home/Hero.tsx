import { motion } from "framer-motion";
import ArrowDown from "../Icons/ArrowDown";

const Hero = () => {
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 1.4, staggerChildren: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const arrowContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, delay: 3.5 } },
  };

  const arrowVariants = {
    bounce: {
      y: [0, 26, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  return (
    <div className="h-screen min-h-[750px]">
      <div className="flex h-full justify-center items-center">
        <div className="px-10">
          <motion.div
            className="my-16 md:my-28 text-left"
            variants={titleContainerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p className="text-ds-accent" variants={titleVariants}>
              Hi, my name is
            </motion.p>
            <motion.p
              className="text-5xl md:text-6xl font-medium"
              variants={titleVariants}
            >
              Drew Schineller
            </motion.p>
            <motion.p
              className="text-3xl md:text-4xl font-medium text-gray-400"
              variants={titleVariants}
            >
              I build interactive web experiences.
            </motion.p>
            <motion.p
              className="mt-4 md:mt-6 max-w-md text-lg text-gray-400"
              variants={titleVariants}
            >
              I&apos;m a software engineer focused on developing beautiful and
              accessible web applications. I have a deep passion for computer
              science, and I aim to be one of the best in full-stack
              development.
            </motion.p>
          </motion.div>
          <motion.div
            className="w-full flex justify-center"
            variants={arrowContainerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={arrowVariants} animate="bounce">
              <ArrowDown />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
