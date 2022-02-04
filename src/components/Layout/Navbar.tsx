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
        <a className="group-hover:text-ds-accent transition-all duration-300">
          {title}
        </a>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [navTextAnim, setNavTextAnim] = useState(60);

  useEffect(() => {
    let viewportWidth = window.innerWidth;
    if (viewportWidth < 800) {
      setNavTextAnim(20);
    } else {
      setNavTextAnim(60);
    }
  }, []);

  return (
    <motion.nav
      className="fixed z-40 w-full py-4 px-narrow bg-ds-dark/80 shadow-md backdrop-blur"
      animate={{ y: [-80, 0] }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <a>
            <motion.div
              className="text-xl font-medium leading-6"
              animate={{ x: [navTextAnim, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p>Drew</p>
              <p>Schineller</p>
            </motion.div>
          </a>
        </Link>
        <motion.div
          className="flex gap-6"
          animate={{ x: [-navTextAnim, 0], opacity: [0, 1] }}
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
