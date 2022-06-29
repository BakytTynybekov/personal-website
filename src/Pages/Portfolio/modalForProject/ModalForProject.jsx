import "./modal.scss";
function ModalForProject({ setIsModalOpen, isModalOpen, activeProject }) {
  return (
    <div className={isModalOpen ? "project activeProject" : "project"}>
      <div className="container">
        <div className="project__inner">
          <img src={activeProject.img} alt="" />
          <div className="project__info">
            <h2>{activeProject.name}</h2>
            <p>{activeProject.description}</p>
            <div className="project__info-urls">
              <a href={activeProject.github} className="github">
                <span>
                  <i class="fa-brands fa-github"></i>
                </span>{" "}
                View on Github
              </a>
              <a href={activeProject.url} className="website">
                <span>
                  <i class="fa-solid fa-circle-play"></i>{" "}
                </span>
                View Live
              </a>
            </div>
            <div className="closeBtn" onClick={() => setIsModalOpen(false)}>
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForProject;
