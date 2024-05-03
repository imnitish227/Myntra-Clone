import "../../assets/css/footer.css";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiFillTwitterSquare } from "react-icons/ai";
import { SiYoutubekids } from "react-icons/si";
import { PiInstagramLogoDuotone } from "react-icons/pi";
const Footer = () => {
  const onlineShoping = [
    "Men",
    "Women",
    "Kids",
    "Home & Living",
    "Beauty",
    "Gift Cards",
    "Myntra Insider",
  ];

  const customerPolicies = [
    "Contact Us",
    "FAQ",
    "T&C",
    "Terms Of Use",
    "Track Orders",
    "Shipping",
    "Cancellation",
    "Returns",
    "Privacy policy",
    "Grievance Officer",
  ];

  return (
    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="footerNavHead"> ONLINE SHOPING</h5>
            <ul className="nav flex-column footerNav mt-4">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Men
                </a>
              </li>
              {onlineShoping.map((shoping, index) => (
                <li className="nav-item mb-2" key={index}>
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    {shoping}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="footerNavHead">CUSTOMER POLICIES </h5>
            <ul className="nav flex-column footerNav mt-4">
              {customerPolicies.map((policies, index) => (
                <li className="nav-item mb-2" key={index}>
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    {policies}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5 className="footerNavHead">EXPERIENCE MYNTRA APP ON MOBILE </h5>
            <div className="row mt-4 d-flex">
              <div className="col-6">
                <img
                  src="./google_play.png"
                  alt=""
                  style={{ height: "42px" }}
                />
              </div>
              <div className="col-6 ps-4  ">
                <img src="./app_store.png" alt="" style={{ height: "42px" }} />
              </div>
            </div>
            <h5 className="footerNavHead mt-4">KEEP IN TOUCH</h5>
            <div className="keepInTouchIcons">
              <span style={{ fontSize: "25px" }}>
                <BiLogoFacebookSquare />
              </span>
              <span style={{ fontSize: "25px" }}>
                <AiFillTwitterSquare />
              </span>
              <span style={{ fontSize: "25px" }}>
                <SiYoutubekids />
              </span>
              <span style={{ fontSize: "25px" }}>
                <PiInstagramLogoDuotone />
              </span>
            </div>
          </div>

          <div className="col-md-4 offset-md-1 mb-3 mt-6">
            <div className="row">
              <div className="col-2">
                <img
                  src="./icons/origianal100.png"
                  alt=""
                  style={{ width: "48px" }}
                />
              </div>
              <div className="col-8">
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  100% ORIGINAL{" "}
                  <span style={{ color: " #696B79", fontWeight: "400" }}>
                    guarantee for all products at myntra.com
                  </span>
                </span>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <img
                  src="./icons/14DaysReturn.png"
                  alt=""
                  style={{ width: "48px" }}
                />
              </div>
              <div className="col-8">
                <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Return within 14days{" "}
                  <span style={{ color: " #696B79", fontWeight: "400" }}>
                    of receiving your order
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
