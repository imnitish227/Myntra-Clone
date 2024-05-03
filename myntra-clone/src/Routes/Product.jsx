import style from "../assets/module/product.module.css";
import { FaStar } from "react-icons/fa";
const Product = () => {
  return (
    <div className="container">
      <div className={`${style.items}`}>
        <div className="imgSection">
          <img
            src="/productImg/img1.jpg"
            alt=""
            className={`${style.ProductImg}`}
          />
        </div>
        <div className={`${style.ratingSec}`}>
          <span className={`${style.rating}`}>
            4.5{" "}
            <span className={`${style.ratingStar}`}>
              <FaStar />
            </span>{" "}
            | 120
          </span>
        </div>
        <h2 className={`${style.productTitle}`}>Zarveri Pearals</h2>

        <p className={`${style.productDes}`}>Gold-Plated jhumkas</p>
        <div className={`${style.priceSec}`}>
          <span className={`${style.currPrice}`}>Rs. 499 </span>
          <span className={`${style.offPrice}`}>Rs. 188</span>{" "}
          <span className={`${style.offPerc}`}>( 42% OFF)</span>
        </div>

        <button className={`${style.productCardBtn}`}>Add to Bag</button>
      </div>
    </div>
  );
};
export default Product;
