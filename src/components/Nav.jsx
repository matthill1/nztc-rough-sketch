import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";
import Facebook from '../assets/social_logos/facebook.svg'
import Linked_in from '../assets/social_logos/linkedin.svg'
import Twitter from '../assets/social_logos/twitter.svg'
import Youtube from '../assets/social_logos/youtube.svg'
import './Nav.css'

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div id='menu' ref={ref}>
      <span>MENU</span>
      <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="menu_container"
          >
            <ul className="">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="nav_item"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      href={route.href}
                    >
                      {route.title}
                    </a>
                  </motion.li>
                  
                );
              })}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + routes.length / 10 }}
              className="social_logo_container"
            >
                <img className="social_logo" src={Linked_in}></img>
                <img className="social_logo" src={Twitter}></img>
                <img className="social_logo" src={Youtube}></img>
                <img className="social_logo" src={Facebook}></img>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
