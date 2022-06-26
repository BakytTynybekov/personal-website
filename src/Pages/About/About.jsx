import "./about.scss";
import logo from "../../images/logo.png";

import React from "react";

function About() {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>About</h2>
            <p>
              Enthusiastic Front-End Developer with 1 year of experience
              building scalable and responsive web applications. Specialize in
              Javascript, ES6 and ReactJs. Familiar with Front-End tools,
              libraries such as Redux, Material UI, Sass, Less and Bootstrap.
              Always passionate learning about new skills and eager to work on
              innovative technologies
            </p>
            <button>
              <a href="/">View Resume</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
