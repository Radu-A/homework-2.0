
const Achievements = () => {
  return (
    <>
      <label htmlFor="">The achievements you are proud of *</label>
      <textarea
        name="achievement_one"
        id="achievement_one"
        cols="30"
        rows="10"
        placeholder="1"
        required
      ></textarea>
      <textarea
        name="achievement_two"
        id="achievement_two"
        cols="30"
        rows="10"
        placeholder="2"
        required
      ></textarea>
      <textarea
        name="achievement_three"
        id="achievement_three"
        cols="30"
        rows="10"
        placeholder="3"
        required
      ></textarea>
    </>
  );
};

export default Achievements;
