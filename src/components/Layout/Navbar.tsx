import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ButtonLink from "../Common/ButtonLink";
import MenuIcon from "../Icons/MenuIcon";
import X from "../Icons/X";

interface NavItemProps {
  title: string;
  link: string;
}

interface NavMenuProps {
  sidebar: boolean;
}

interface SideBarProps {
  close: Function;
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

const NavItem = ({ title, link }: NavItemProps) => {
  return (
    <motion.div className="group" variants={textVariants}>
      <Link href={link}>
        <a className="text-base transition-all duration-300 group-hover:text-ds-accent">
          {title}
        </a>
      </Link>
    </motion.div>
  );
};

const NavMenu = ({ sidebar }: NavMenuProps) => {
  return (
    <>
      <NavItem title="About" link="#about" />
      <NavItem title="Experience" link="#experience" />
      <NavItem title="Work" link="#work" />
      <motion.div variants={textVariants}>
        <ButtonLink title="Resume" link="/" size="small" />
      </motion.div>
    </>
  );
};

const SideBar = ({ close }: SideBarProps) => {
  return (
    <motion.div
      className={
        "fixed top-0 right-0 z-50 h-screen w-screen bg-gray-900/0 backdrop-blur md:hidden "
        // +
        // (showSidebar ? "block" : "hidden")
      }
      onClick={() => close()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className="absolute top-0 right-0 h-full max-w-[400px] bg-gray-900 px-28 py-20"
        onClick={(e) => e.stopPropagation()}
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        transition={{ duration: 0.15 }}
      >
        <div className="px-wide absolute top-4 right-0">
          <div className="cursor-pointer" onClick={() => close()}>
            <X />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5">
          <NavMenu sidebar={true} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeBar = () => {
    setShowSidebar(false);
  };

  //Handle Page change event by watching router.query
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
    closeBar();
  }, [router.query]);

  return (
    <>
      <motion.nav
        className="px-wide fixed z-40 w-full bg-ds-dark/80 py-4 shadow-md backdrop-blur"
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
                <p>Drew Schineller</p>
              </motion.div>
            </a>
          </Link>
          <div>
            <div className="hidden items-center gap-6 md:flex">
              <NavMenu sidebar={false} />
            </div>

            <motion.div
              className="block cursor-pointer md:hidden"
              onClick={() => setShowSidebar(true)}
              variants={textVariants}
              initial="hidden"
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.9,
                },
              }}
            >
              <MenuIcon />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {showSidebar ? <SideBar close={closeBar} /> : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
