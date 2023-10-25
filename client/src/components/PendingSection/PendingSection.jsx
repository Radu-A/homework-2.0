import React from "react";

const PendingSection = ({ projectDetails }) => {
  return (
    <section className="pending-section">
      <h3>{"\u{1F4CC}"}Pending</h3>
      {/* <h3>{"\u{1F551}"}Pending</h3> */}

      <article className="pending-article">
        <h4>1</h4>
        <p>{projectDetails.pending_one}</p>
      </article>
      <article className="pending-article">
        <h4>2</h4>
        <p>{projectDetails.pending_two}</p>
      </article>
      <article className="pending-article">
        <h4>3</h4>
        <p>{projectDetails.pending_three}</p>
      </article>
    </section>
  );
};

export default PendingSection;
