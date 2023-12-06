import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectButtons from "../projectButtons/ProjectButtons";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  const Description = repo.description;

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          // onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard, cursor: "initial" }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            <Description theme={theme} />
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={repo.languages} />
          </div>
          <ProjectButtons theme={theme} buttons={repo.buttons} />
        </div>
      </Fade>
    </div>
  );
}
