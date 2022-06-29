import "./about.scss";
import logo from "../../images/logo.png";

import React from "react";
import { skillsIcons } from "./skillsIcon";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about__inner">
          <div className="about__image">
            <img
              src="https://i.pinimg.com/originals/9e/5c/77/9e5c77872f818509afc1766a86c9a68b.gif"
              alt=""
            />
          </div>
          <div className="about__info">
            <div className="about__info-me">
              <h3>Who am I?</h3>
              <p>
                <span>
                  <i class="fa-solid fa-user-check"></i>
                </span>
                Enthusiastic Front-End Developer with 1 year of experience
                building scalable and responsive web applications. Specialize in
                Javascript, ES6 and ReactJs. Familiar with Front-End tools,
                libraries such as Redux, Material UI, Sass, Less and Bootstrap.
                Always passionate learning about new skills and eager to work on
                innovative technologies
              </p>
            </div>
            <div className="about__info-skills">
              <h3>Professional Skillset</h3>
              <ul>
                {skillsIcons.map((item, index) => {
                  return (
                    <li key={index}>
                      <span>
                        <i class={`fa-brands ${item}`} color></i>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
