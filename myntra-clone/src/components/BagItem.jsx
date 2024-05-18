import { useDispatch } from "react-redux";
import style from "../assets/module/Bagitem.module.css";
import { IoClose } from "react-icons/io5";
import { bagAction } from "../store/bagSlice";
const Bagitem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  const {
    image,
    company,
    item_name,
    original_price,
    current_price,
    discount_percentage,
    return_period,
    delivery_date,
  } = item;
  return (
    <div className={`${style.BagItemContainer}`}>
      <div className={`${style.BagItem}`}>
        <img src={image} alt="" height={"150px"} width={"112px"} />
        <div className={`${style.bagItemSummary}`}>
          <div className="d-flex flex-column ">
            <h2 className={`${style.bagItemBrand}`}>{company}</h2>
            <span className={`${style.bagItemBranddec}`}>{item_name}</span>
            <div className="d-flex">
              <span className={`${style.bagItemPrice}`}>
                Rs.&#8377;{current_price}
              </span>
              <span className={`${style.bagItemOffPrice}`}>
                Rs.&#8377;{original_price}
              </span>
              <span className={`${style.bagItemdiscountPerc}`}>
                {discount_percentage}% OFF
              </span>
            </div>
            <div className={`${style.bagItemReturnSec} mt-2`}>
              <span className="fw-bold">{return_period} Days</span>
              <span className={`${style.bagItemReturnAva}`}>
                Return available
              </span>
            </div>
            <div className={`${style.bagItemDelvSec} `}>
              <span>Deliverd By</span>

              <span className={`${style.bagItemDelDate}`}>{delivery_date}</span>
            </div>
          </div>
        </div>
      </div>
      <span className={`${style.BagItemDelete} badge `} onClick={handleRemove}>
        <IoClose />
      </span>
    </div>
  );
};
export default Bagitem;
