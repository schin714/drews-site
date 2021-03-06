import { motion } from "framer-motion";
import ButtonLink from "../Common/ButtonLink";
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

  return (
    <div className="h-screen min-h-[600px] overflow-hidden">
      <div className="h-full">
        <div className="px-wide flex h-full items-center justify-start md:px-36 lg:px-40">
          <motion.div
            className="text-left"
            variants={titleContainerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.p className="text-ds-accent" variants={titleVariants}>
              Hi, my name is
            </motion.p>
            <motion.p
              className="text-5xl font-medium md:text-6xl"
              variants={titleVariants}
            >
              Drew Schineller
            </motion.p>
            <motion.p
              className="text-4xl font-medium text-gray-400 md:text-5xl"
              variants={titleVariants}
            >
              I build interactive web experiences.
            </motion.p>
            <motion.p
              className="mt-4 max-w-lg text-lg text-gray-400 md:mt-4"
              variants={titleVariants}
            >
              I&apos;m a software engineer focused on developing beautiful and
              accessible web applications. I have a deep passion for computer
              science, and I aim to be one of the best in full-stack
              development.
            </motion.p>
            <motion.div className="mt-10" variants={titleVariants}>
              <ButtonLink title="Call To Action" link="/" />
            </motion.div>
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
    </div>
  );
};

export default Hero;
