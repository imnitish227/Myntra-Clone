import style from "../assets/module/Bagitem.module.css";
import { IoClose } from "react-icons/io5";
const Bagitem = () => {
  return (
    <div className={`${style.BagItemContainer}`}>
      <div className={`${style.BagItem}`}>
        <img
          src="/productImg/img1.jpg"
          alt=""
          height={"150px"}
          width={"112px"}
        />
        <div className={`${style.bagItemSummary}`}>
          <div className="d-flex flex-column ">
            <h2 className={`${style.bagItemBrand}`}>Zarveri Pearals</h2>
            <span className={`${style.bagItemBranddec}`}>
              Gold-Plated jhumkas
            </span>
            <div className="d-flex">
              <span className={`${style.bagItemPrice}`}>Rs.&#8377;700</span>
              <span className={`${style.bagItemOffPrice}`}>Rs.&#8377;700</span>
              <span className={`${style.bagItemdiscountPerc}`}>50% OFF</span>
            </div>
            <div className={`${style.bagItemReturnSec} mt-2`}>
              <span className="fw-bold">14 Days</span>
              <span className={`${style.bagItemReturnAva}`}>
                Return available
              </span>
            </div>
            <div className={`${style.bagItemDelvSec} `}>
              <span>Deliverd By</span>
              <span className={`${style.bagItemDelDate}`}>14 May 2024</span>
            </div>
          </div>
        </div>
      </div>
      <span class={`${style.BagItemDelete} badge `}>
        {" "}
        <IoClose />
      </span>
    </div>
  );
};
export default Bagitem;
