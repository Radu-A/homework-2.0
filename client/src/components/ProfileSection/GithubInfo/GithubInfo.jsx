import React from "react";

const GithubInfo = ({userData}) => {
  return (
    <article className="github-info-article">
      <img src={userData.photo} alt="" />
      <p>{userData.github}</p>
    </article>
  );
};

export default GithubInfo;
