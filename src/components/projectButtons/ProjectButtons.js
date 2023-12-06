import React from "react";
import "./ProjectButtons.css";
import { useHistory } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { style } from "glamor";

const ProjectButtons = (props) => {
  const openInNewTab = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  const { theme } = props;
  const history = useHistory();
  console.log("Proops", props);

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div>
      <div className="">
        <ul
          className=""
          style={{
            justifyContent: "space-around",
            marginBottom: 0,
            marginLeft: 0,
          }}
        >
          {props?.buttons?.map((btn) => {
            console.log("props", props);
            return (
              <>
                <button
                  className="button"
                  {...styles}
                  style={{
                    marginBottom: 4,
                    marginTop: 4,
                    marginRight: 4,
                    marginLeft: 4,
                  }}
                  onClick={() => openInNewTab(btn.link)}
                >
                  {btn.label}
                </button>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectButtons;
