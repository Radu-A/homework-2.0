import React from "react";

const UserInfoSection = ({projectDetails}) => {
  return (
    <section className="user-info-section">
      <article className="user-info-photo">
        <img src={projectDetails.photo} alt="" />
      </article>
      <article className="user-info-name">
        <h3>{projectDetails.firstname}</h3>
        <h3>{projectDetails.lastname}</h3>
        <p>{projectDetails.bootcamp}</p>
        <p>{projectDetails.curse}</p>
      </article>
    </section>
  );
};

export default UserInfoSection;
