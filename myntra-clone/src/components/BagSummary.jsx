import style from "../assets/module/bagsummary.module.css";
const BagSummary = () => {
  return (
    <div className={`${style.BagSummaryContainer}`}>
      <h6 className={`${style.PriceDetails}`}>PRICE DETAILS (3 Items)</h6>
      <div className={`${style.TotalMrp}`}>
        <span>Total MRP</span>
        <span>&#8377;780</span>
      </div>
      <div className={`${style.MrpDiscount}`}>
        <span>Discount on MRP</span>
        <span style={{ color: "#03A685" }}>-&#8377;780</span>
      </div>
      <div className={`${style.convenienceFee}`}>
        <span>convenience fee</span>
        <span>&#8377;99</span>
      </div>
      <hr className={`${style.BagSummaryHr}`} />
      <div className={`${style.TotalAmount}`}>
        <span>Total Amount</span>
        <span>&#8377;8000</span>
      </div>
      <button className={`${style.PlaceOrderBtn}`}>Place Orrder</button>
    </div>
  );
};

export default BagSummary;
