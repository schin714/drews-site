import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItemProps {
  title: string;
}

const NavItem = ({ title }: NavItemProps) => {
  return (
    <div className="group">
      <Link href={"#" + title.toLowerCase()}>
        <a className="text-base transition-all duration-300 group-hover:text-ds-accent">
          {title}
        </a>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [smallAnim, setSmallAnim] = useState(false);

  useEffect(() => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 800) {
      setSmallAnim(true);
    } else {
      setSmallAnim(false);
    }
  }, []);

  const navTextVariants = {
    small: {
      x: [0, 0],
      y: [-50, 0],
      opacity: [0, 1],
      transition: { delay: 0.5, duration: 0.9 },
    },
    largeLeft: { x: [60, 0], opacity: [0, 1] },
    largeRight: { x: [-60, 0], opacity: [0, 1] },
  };

  return (
    <motion.nav
      className="px-narrow fixed z-40 w-full bg-ds-dark/80 py-4 shadow-md backdrop-blur"
      animate={{ y: [-80, 0] }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <a>
            <motion.div
              className="text-xl font-medium leading-6"
              variants={navTextVariants}
              animate={smallAnim ? "small" : "largeLeft"}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p>Drew</p>
              <p>Schineller</p>
            </motion.div>
          </a>
        </Link>
        <motion.div
          className="flex gap-6"
          variants={navTextVariants}
          animate={smallAnim ? "small" : "largeRight"}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <NavItem title="About" />
          <NavItem title="Experience" />
          <NavItem title="Work" />
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
