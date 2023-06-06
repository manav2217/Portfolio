import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { BiBookBookmark } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import "./nav.css";

const Nav = () => {
  const [activeClass, setActiveClass] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveClass("#")}
        className={activeClass === "#" ? "active" : ""}
      >
        {AiOutlineHome()}
      </a>
      <a
        href="#about"
        onClick={() => setActiveClass("#about")}
        className={activeClass === "#about" ? "active" : ""}
      >
        {SiAboutdotme()}
      </a>
      <a
        href="#experience"
        onClick={() => setActiveClass("#experience")}
        className={activeClass === "#experience" ? "active" : ""}
      >
        {BiBookBookmark()}
      </a>
      <a
        href="#services"
        onClick={() => setActiveClass("#services")}
        className={activeClass === "#services" ? "active" : ""}
      >
        {MdHomeRepairService()}
      </a>
      <a
        href="#contact"
        onClick={() => setActiveClass("#contact")}
        className={activeClass === "#contact" ? "active" : ""}
      >
        {RiContactsLine()}
      </a>
    </nav>
  );
};

export default Nav;
