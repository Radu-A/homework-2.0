import AdviceArticle from "./AdviceArticle/AdviceArticle";
import FeedbackList from "./FeedbackList/FeedbackList";
import NewComment from "./NewComment/NewComment";

const FeedbackSection = () => {
  return (
    <section className="feedback-section">
      <h3>COMMUNITY FEEDBACK</h3>
      <FeedbackList />
      <AdviceArticle />
      <NewComment />
    </section>
  );
};

export default FeedbackSection;
