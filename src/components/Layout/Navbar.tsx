import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "../Icons/MenuIcon";
import X from "../Icons/X";

interface NavItemProps {
  title: string;
}

const navVariants = {
  hidden: { y: -80 },
  show: {
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const NavItem = ({ title }: NavItemProps) => {
  return (
    <motion.div className="group" variants={textVariants}>
      <Link href={"#" + title.toLowerCase()}>
        <a className="text-base transition-all duration-300 group-hover:text-ds-accent">
          {title}
        </a>
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <motion.nav
      className="px-narrow fixed z-40 w-full bg-ds-dark/80 py-4 shadow-md backdrop-blur"
      variants={navVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <motion.div
              className="text-xl font-medium leading-6"
              variants={textVariants}
            >
              <p>Drew</p>
              <p>Schineller</p>
            </motion.div>
          </a>
        </Link>
        <div>
          <div className="hidden gap-6 md:flex">
            <NavItem title="About" />
            <NavItem title="Experience" />
            <NavItem title="Work" />
          </div>

          <div
            className="block cursor-pointer md:hidden"
            onClick={() => setShowSidebar(true)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      <div
        className={
          "absolute top-0 right-0 h-screen border-2 border-white bg-ds-dark p-20 md:hidden " +
          (showSidebar ? "block" : "hidden")
        }
      >
        <div className="px-narrow absolute top-6 right-0">
          <div className="cursor-pointer" onClick={() => setShowSidebar(false)}>
            <X />
          </div>
        </div>
        <p>Hello</p>
      </div>
    </motion.nav>
  );
};

export default Navbar;
