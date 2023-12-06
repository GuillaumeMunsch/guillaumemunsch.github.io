import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ProjectLanguages = (props) => (
  <div>
    <div className="software-skills-main-div">
      <ul className="dev-icons-languages">
        {props.logos.map((logo) => {
          console.log("props", props);
          return (
            <OverlayTrigger
              key={logo.name}
              placement="top"
              overlay={
                <Tooltip id="tooltip-top">
                  <strong>{logo.name}</strong>
                </Tooltip>
              }
            >
              <li
                className="software-skill-inline-languages"
                name={logo.skillName}
              >
                <span
                  className="iconify"
                  data-icon={logo.iconifyClass}
                  data-inline="false"
                />
              </li>
            </OverlayTrigger>
          );
        })}
      </ul>
    </div>
  </div>
);

export default ProjectLanguages;
