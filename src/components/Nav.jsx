import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../routes";

import './Nav.css'

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div id='menu' ref={ref}>
      <span>MENU</span>
      <Hamburger toggled={isOpen} size={24} toggle={setOpen} />
    </div>
  );
};
