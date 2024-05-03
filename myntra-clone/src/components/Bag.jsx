import Bagitem from "./BagItem";
import BagSummary from "./BagSummary";
import style from "../assets/module/bag.module.css";
const Bag = () => {
  return (
    <div className="container mt-4 d-flex  justify-content-evenly flex-wrap">
      <div className={`${style.bagItemSummary}`}>
        <Bagitem />
        <Bagitem />
      </div>
      <div className="mt-4">
        <BagSummary />
      </div>
    </div>
  );
};
export default Bag;
