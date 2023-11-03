import React from "react";

const GithubInfo = ({userData}) => {
  return (
    <article className="github-info-article">
      <img src={userData.photo} alt="" />
      <a href={userData.github} target="blank">{userData.github}</a>
    </article>
  );
};

export default GithubInfo;
