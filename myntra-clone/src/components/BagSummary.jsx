import { useSelector } from "react-redux";
import style from "../assets/module/bagsummary.module.css";
const BagSummary = () => {
  const bagItem = useSelector((state) => {
    return state.bag;
  });
  const productItem = useSelector((state) => state.items);
  const finalItem = productItem.filter((item) => {
    const indexItem = bagItem.indexOf(item.id) >= 0;
    return indexItem;
  });

  let totalMrp = 0;
  let disCountMrp = 0;
  let convenienceFee = 99;
  let totalAmount = 0;

  finalItem.map((item) => {
    const { current_price, original_price } = item;
    totalMrp += original_price;
    disCountMrp += original_price - current_price;
    totalAmount += current_price + convenienceFee;
  });

  return (
    <div className={`${style.BagSummaryContainer}`}>
      <h6 className={`${style.PriceDetails}`}>
        PRICE DETAILS ({`${bagItem.length}`} Items)
      </h6>
      <div className={`${style.TotalMrp}`}>
        <span>Total MRP</span>
        <span>&#8377;{totalMrp}</span>
      </div>
      <div className={`${style.MrpDiscount}`}>
        <span>Discount on MRP</span>
        <span style={{ color: "#03A685" }}>-&#8377;{disCountMrp}</span>
      </div>
      <div className={`${style.convenienceFee}`}>
        <span>convenience fee</span>
        <span>&#8377;{convenienceFee}</span>
      </div>
      <hr className={`${style.BagSummaryHr}`} />
      <div className={`${style.TotalAmount}`}>
        <span>Total Amount</span>
        <span>&#8377;{totalAmount}</span>
      </div>
      <button className={`${style.PlaceOrderBtn}`}>Place Orrder</button>
    </div>
  );
};

export default BagSummary;
