import React from "react";
import Me from "../../assets/me-about.jpg";
import { BsAward } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiFolderSettingsLine } from "react-icons/ri";
import './about.css'

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icon"/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className="about_card">
              <HiOutlineUserGroup className="about_icon"/>
              <h5>Clients</h5>
              <small>0 as of now</small>
            </article>

            <article className="about_card">
              <RiFolderSettingsLine className="about_icon"/>
              <h5>Projects</h5>
              <small>5 Personal Projects</small>
            </article>
          </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quos
        repellendus fugit aspernatur quod sit sint eum! Voluptatum laborum optio
        minima adipisci perferendis, reiciendis est facere, pariatur accusamus
        accusantium recusandae alias vitae deleniti excepturi quas, sequi error
        maxime vero ea asperiores quibusdam itaque. Fugit nesciunt facere
        perferendis iusto, excepturi eaque!
      </p>

      <a className="btn btn-primary" href="#contact">Let's Talk</a>
        </div>
      </div>

    </section>
  );
};

export default about;
