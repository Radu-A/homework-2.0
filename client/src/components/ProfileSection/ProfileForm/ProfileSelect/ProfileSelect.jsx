import React from "react";

const ProfileSelect = ({ selectDefaultValue }) => {
  return (
    <select name="bootcamp" id="bootcamp" defaultValue={selectDefaultValue}>
      <option value="">Select your Bootcamp</option>
      <option value="Cybersecurity">Cybersecurity</option>
      <option value="Data Science">Data Science</option>
      <option value="Full-Stack">Full-Stack</option>
      <option value="UX/UI">UX/UI</option>
    </select>
  );
};

export default ProfileSelect;
