import BootcampFilterArticle from "./BootcampFilterArticle/BootcampFilterArticle";
import DeployedFilterArticle from "./DeployedFilterArticle/DeployedFilterArticle";
import FinishedFilterArticle from "./FinishedFilterArticle/FinishedFilterArticle";

const Aside = () => {
  return (
    <aside>
      <BootcampFilterArticle />
      <FinishedFilterArticle />
      <DeployedFilterArticle />
    </aside>
  );
};

export default Aside;
