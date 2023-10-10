import React from "react";

const ProgressBar = ({ bgcolor, completed, borderRadius, emptyBg, height }) => {
  const containerStyles = {
    height: height || 7,
    width: "100%",
    alignSelf: "center",
    backgroundColor: emptyBg || "rgba(204, 204, 204, .5)",
    borderRadius: borderRadius || 50,
    position: "relative",
    margin: "0rem 0rem 0rem 0rem",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed > 100 ? 100 : completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "1s ease 0.3s",
  };

  const labelStyles = {
    padding: 7,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="progress-bar-wrapper" style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
