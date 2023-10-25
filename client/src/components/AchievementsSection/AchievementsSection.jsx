import React from "react";

const AchievementsSection = ({ projectDetails }) => {
  return (
    <section className="achievements-section">
      <h3>{"\u{1F680}"}Achievements</h3>
      {/* <h3>{"\u{1F947}"}Achievements</h3> */}
      <article className="pending-article">
        <h4>1</h4>
        <p>{projectDetails.achievement_one}</p>
      </article>
      <article className="pending-article">
        <h4>2</h4>
        <p>{projectDetails.achievement_two}</p>
      </article>
      <article className="pending-article">
        <h4>3</h4>
        <p>{projectDetails.achievement_three}</p>
      </article>
    </section>
  );
};

export default AchievementsSection;
