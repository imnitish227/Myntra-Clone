import Bagitem from "./BagItem";
import BagSummary from "./BagSummary";
import style from "../assets/module/bag.module.css";
import { useSelector } from "react-redux";
const Bag = () => {
  const productItems = useSelector((store) => store.items);
  const bagItem = useSelector((state) => state.bag);
  const finalItem = productItems.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <div className="container mt-4 d-flex  justify-content-evenly flex-wrap">
      <div className={`${style.bagItemSummary}`}>
        {finalItem.map((item, index) => (
          <Bagitem item={item} key={index} />
        ))}
      </div>
      <div className="mt-4">
        <BagSummary />
      </div>
    </div>
  );
};
export default Bag;
