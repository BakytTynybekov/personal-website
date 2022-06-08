import Header from "../../components/Header/Header";
import "font-awesome/css/font-awesome.min.css";
import Typewriter from "typewriter-effect";
import hero from "../../images/hero.jpg";

import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="home-inner">
          <div className="home__info hero">
            <h2>
              I'm
              <Typewriter
                className="typewriter"
                options={{
                  strings: [" Bakyt Tynybekov", " a Frontend Developer"],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 1800,
                }}
              />
            </h2>{" "}
            <div className="home__info-social">
              <a href="/">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="/">
                <i class="fa-solid fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
