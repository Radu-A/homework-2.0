import React from "react";

const AchievementsSection = ({ projectDetails }) => {
  return (
    <section className="achievements-section">
      <h3>{"\u{1F680}"}Achievements</h3>
      {/* <h3>{"\u{1F947}"}Achievements</h3> */}
      <p>1 {projectDetails.achievement_one}</p>
      <p>2 {projectDetails.achievement_two}</p>
      <p>3 {projectDetails.achievement_three}</p>
    </section>
  );
};

export default AchievementsSection;
