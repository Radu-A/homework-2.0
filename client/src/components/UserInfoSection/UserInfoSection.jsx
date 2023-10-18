import React from "react";

const UserInfoSection = ({projectDetails}) => {
  return (
    <section className="user-info-section">
      <img src={projectDetails.photo} alt="" />
      <article className="user-info-name">
        <h4>{projectDetails.firstname}</h4>
        <h4>{projectDetails.lastname}</h4>
      </article>
    </section>
  );
};

export default UserInfoSection;
