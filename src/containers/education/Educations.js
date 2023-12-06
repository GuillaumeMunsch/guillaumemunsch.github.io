import React from "react";
import "./Educations.css";
import { Fade } from "react-reveal";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";

function Educations(props) {
  const { theme } = props;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => (
          <DegreeCard degree={degree} index={index} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default Educations;
