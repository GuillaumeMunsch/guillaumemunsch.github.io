import React from "react";
import "./Skills.css";
import { Fade } from "react-reveal";
import SkillSection from "./SkillSection";

export default function Skills(props) {
  const { theme } = props;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
