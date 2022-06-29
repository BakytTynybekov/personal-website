import "./portfolio.scss";
import React, { useEffect, useState } from "react";
import { portfolioData } from "./portfolio-data";
import ModalForProject from "./modalForProject/ModalForProject";

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const handleClick = (item) => {
    setActiveProject(item);
    setIsModalOpen(true);
  };
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio__inner">
          <h2 className="section-title portfolio-title">Portfolio</h2>
          <h3 className="subTitle">Portfolio showcase of some of my work.</h3>
          <div className="portfolio__list">
            {portfolioData.map((item, index) => {
              return (
                <div
                  className="portfolio__list-item"
                  key={item.id}
                  onClick={() => handleClick(item)}
                >
                  <div className="overlay">
                    <h4>
                      {item.name}
                      <span>
                        {" "}
                        <i class="fa-solid fa-circle-info"></i>
                      </span>
                    </h4>
                  </div>
                  <img src={item.img} alt={`${item.name} image`} />
                </div>
              );
            })}
          </div>
          {activeProject && (
            <div className={isModalOpen ? "modal activeModal" : "modal"}>
              <ModalForProject
                activeProject={activeProject}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
