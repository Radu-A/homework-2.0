import React from "react";

const GithubInfo = ({ userData }) => {
  return (
    <article className="github-info-article">
      <a href={userData.github} target="blank">
        <img src={userData.photo} alt="" />
      </a>
      <a href={userData.github} target="blank">
        {userData.github}
      </a>
    </article>
  );
};

export default GithubInfo;
