import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles.css";
import { BsFillCartFill } from "react-icons/bs";

const Header = ({ cartCount }) => {
  return (
    <div className="header container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <h3 className="title">Start Bootstrap</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <button className="btn " aria-expanded="false">
                Home
              </button>
              <button className="btn " aria-expanded="false">
                About
              </button>
              <li className="nav-item dropdown">
                <button
                  className="btn  dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </button>
                <ul className="dropdown-menu p-3">
                  <li> All Products</li>
                  <hr style={{ opacity: "30%" }} />
                  <li> Popular Items</li>
                  <li>New Arrivals</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <button type="button" className="btn btn-outline-dark cart">
          <BsFillCartFill />
          <p style={{ marginBottom: "0px" }}> Cart</p>
          <span className="counters">{cartCount}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
