import React from "react";

const ScreenshotSection = ({projectDetails}) => {
  return (
    <section className="screenshot-section">
      <img src={projectDetails.img_big} alt="" />
      <img src={projectDetails.img_small} alt="" />
    </section>
  );
};

export default ScreenshotSection;
