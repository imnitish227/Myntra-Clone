import myntraLogo from "../assets/myntra.svg";
import "../assets/css/header.css";
import DesktopIcon from "./DesktopIcon";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navBarcusStyl "
        style={{ boxShadow: "0px 2px 30px rgba(211, 211, 211, 0.350)" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand  ms-4 " to="/">
            <img src={myntraLogo} alt="logo" height={40} />
          </Link>

          <div
            className="collapse navbar-collapse ms-2  "
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-equal-space">
              <li className="nav-item ">
                <a className="nav-link navLink" aria-current="page" href="#">
                  MEN
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navLink" aria-current="page" href="#">
                  WOMEN
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navLink" aria-current="page" href="#">
                  KIDS
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navLink" aria-current="page" href="#">
                  HOME & LIVING
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navLink" aria-current="page" href="#">
                  BEAUTY
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navLink" aria-current="page" href="#">
                  STUDIO <sup style={{ color: "red" }}>NEW</sup>
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="box">
                <span className="searchIcon">
                  <IoSearch />
                </span>
                <input
                  type="text"
                  className="searchBox"
                  placeholder="Search products, brands and more "
                />
              </div>
            </form>
            <DesktopIcon />
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="responsive">
              <span className="navbar-toggler-icon"></span>
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Header;
