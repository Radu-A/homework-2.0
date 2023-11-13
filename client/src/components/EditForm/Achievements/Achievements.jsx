const Achievements = ({ projectDetails }) => {
  return (
    <>
      <label htmlFor="">The achievements you are proud of</label>
      <textarea
        name="achievement_one"
        id="achievement_one"
        cols="30"
        rows="10"
        placeholder="1"
        required
        defaultValue={projectDetails.achievement_one}
      ></textarea>
      <textarea
        name="achievement_two"
        id="achievement_two"
        cols="30"
        rows="10"
        placeholder="2"
        required
        defaultValue={projectDetails.achievement_two}
      ></textarea>
      <textarea
        name="achievement_three"
        id="achievement_three"
        cols="30"
        rows="10"
        placeholder="3"
        required
        defaultValue={projectDetails.achievement_three}
      ></textarea>
    </>
  );
};

export default Achievements;
