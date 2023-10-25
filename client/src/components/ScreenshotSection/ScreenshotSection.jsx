import React from "react";

const ScreenshotSection = ({projectDetails}) => {
  return (
    <section className="screenshot-section">
      <img className="screenshot-big" src={projectDetails.img_big} alt="" />
      <img className="screenshot-small" src={projectDetails.img_small} alt="" />
    </section>
  );
};

export default ScreenshotSection;
