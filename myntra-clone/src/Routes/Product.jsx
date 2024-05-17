import { useDispatch, useSelector } from "react-redux";
import style from "../assets/module/product.module.css";
import { FaStar } from "react-icons/fa";
import { bagAction } from "../store/bagSlice";
const Product = ({ item }) => {
  const bagItem = useSelector((state) => state.bag);
  const totalBagItem = bagItem.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <div className="container">
      <div className={`${style.items}`}>
        <div className="imgSection">
          <img src={item.image} alt="" className={`${style.ProductImg}`} />
        </div>
        <div className={`${style.ratingSec}`}>
          <span className={`${style.rating}`}>
            {item.rating.stars}{" "}
            <span className={`${style.ratingStar}`}>
              <FaStar />
            </span>{" "}
            | {item.rating.count}
          </span>
        </div>
        <h2 className={`${style.productTitle}`}>{item.company}</h2>

        <p className={`${style.productDes}`}>
          {item.item_name.substring(0, 25)}
        </p>
        <div className={`${style.priceSec}`}>
          <span className={`${style.currPrice}`}>Rs.{item.current_price} </span>
          <span className={`${style.offPrice}`}>
            Rs. {item.original_price}{" "}
          </span>{" "}
          <span className={`${style.offPerc}`}>
            ( {item.discount_percentage}% OFF)
          </span>
        </div>
        {totalBagItem ? (
          <button
            className={`${style.productCardRemoveBtn}`}
            onClick={handleRemove}
          >
            Remove
          </button>
        ) : (
          <button
            className={`${style.productCardBtn}`}
            onClick={handleAddToBag}
          >
            Add to Bag
          </button>
        )}
      </div>
    </div>
  );
};
export default Product;
