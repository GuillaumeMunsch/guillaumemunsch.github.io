import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import TeacherImg from "./TeacherImg";
// import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  else if (props.fileName === "TeacherImg")
    return <TeacherImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

const renderImg = (skill, theme, opts) => (
  <>
    <Fade duration={2000} {...opts}>
      <div className="skills-image-div">
        <GetSkillSvg fileName={skill.fileName} theme={theme} />
      </div>
    </Fade>
  </>
);

const renderText = (skill, theme, opts) => (
  <>
    <div className="skills-text-div">
      <Fade duration={1000} {...opts}>
        <h1 className="skills-heading" style={{ color: theme.text }}>
          {skill.title}
        </h1>
      </Fade>
      <Fade duration={1500} {...opts}>
        <SoftwareSkill logos={skill.softwareSkills} />
      </Fade>
      <Fade duration={2000} {...opts}>
        <div>
          {skill.skills.map((skillSentence) => {
            return (
              <p
                className="subTitle skills-text"
                style={{ color: theme.secondaryText }}
              >
                {skillSentence}
              </p>
            );
          })}
        </div>
      </Fade>
    </div>
  </>
);

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
              {renderImg(skill, theme, { left: true })}
              {renderText(skill, theme, { right: true })}
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              {renderText(skill, theme, { left: true })}
              {renderImg(skill, theme, { right: true })}
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
