import React from "react";
import logo from "../../img/react.png";
import { Link, NavLink } from "react-router-dom";
import CryptoDetail from "../../Pages/CryptoDetail";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-body-dark bg-dark">
        <div className="container-fluid text-white">
          <Link className="navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              style={{ height: "35px", verticalAlign: "top" }}
            ></img>
            RouteOpedia
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/crypto/btc/10">
                  CryptoCurrency
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/product"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/product">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/details">
                      Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/list">
                      List
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product/create">
                      Create
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
