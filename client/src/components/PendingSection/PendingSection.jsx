import React from "react";

const PendingSection = ({projectDetails}) => {
  return (
    <section className="pending-section">
      <h3>{"\u{1F4CC}"}Pending</h3>
      {/* <h3>{"\u{1F551}"}Pending</h3> */}
      <p>1 {projectDetails.pending_one}</p>
      <p>2 {projectDetails.pending_two}</p>
      <p>3 {projectDetails.pending_three}</p>
    </section>
  );
};

export default PendingSection;
