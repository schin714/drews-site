import { motion } from "framer-motion";
import ArrowDown from "../Icons/ArrowDown";
import Circle1 from "../Icons/Circle1";

const Hero = () => {
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 1.6, staggerChildren: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const arrowContainerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, delay: 3.7 } },
  };

  const arrowVariants = {
    bounce: {
      y: [0, 26, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const circleVariants = {
    down: {
      scale: 0.9,
    },
    up: {
      scale: 1.05,
    },
  };

  return (
    <div className="h-screen min-h-[600px] overflow-hidden">
      <div className="h-full">
        <div className="px-narrow flex h-[90%] items-center justify-start">
          <motion.div
            className="mb-20 text-left md:mb-0"
            variants={titleContainerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p className="text-ds-accent" variants={titleVariants}>
              Hi, my name is
            </motion.p>
            <motion.p
              className="text-4xl font-medium md:text-5xl"
              variants={titleVariants}
            >
              Drew Schineller
            </motion.p>
            <motion.p
              className="text-2xl font-medium text-gray-400 md:text-3xl"
              variants={titleVariants}
            >
              I build interactive web experiences.
            </motion.p>
            <motion.p
              className="mt-4 max-w-md text-lg text-gray-400 md:mt-4"
              variants={titleVariants}
            >
              I&apos;m a software engineer focused on developing beautiful and
              accessible web applications. I have a deep passion for computer
              science, and I aim to be one of the best in full-stack
              development.
            </motion.p>
          </motion.div>
        </div>
        {/* <motion.div
          className="flex w-full justify-center"
          variants={arrowContainerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={arrowVariants} animate="bounce">
            <ArrowDown />
          </motion.div>
        </motion.div> */}
      </div>
      <div className="absolute -bottom-24 -right-10 scale-50 md:-bottom-32 md:-right-24 md:scale-90 lg:top-20 lg:-right-10 lg:scale-90 xl:right-20 xl:scale-100">
        <motion.div
          className="relative h-[550px] w-[440px]"
          initial={{ y: 160, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <motion.div
            className=" let-0 absolute bottom-20"
            variants={circleVariants}
            initial={{ scale: 1 }}
            drag
            dragConstraints={{ top: 40, bottom: 40, left: 40, right: 40 }}
            whileTap="down"
            whileHover="up"
          >
            <Circle1 size="212" color="#1F8C93" />
          </motion.div>
          <motion.div
            className=" absolute bottom-0 right-0"
            variants={circleVariants}
            initial={{ scale: 1 }}
            drag
            dragConstraints={{ top: 40, bottom: 40, left: 40, right: 40 }}
            whileTap="down"
            whileHover="up"
          >
            <Circle1 size="280" color="#41B8A6" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            variants={circleVariants}
            initial={{ scale: 1 }}
            drag
            dragConstraints={{ top: 40, bottom: 40, left: 40, right: 40 }}
            whileTap="down"
            whileHover="up"
          >
            <Circle1 size="347" color="#6CDBCA" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
