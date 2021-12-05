import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../Cart/Cart-Icon";
import { Search } from "../Search/Search";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#top">
            Hidden brand
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#top">
                  Home
                </a>
              </li>
            </Link>
          </ul>
          <Link to="/Cart">
            <div style={{ marginRight: 20 }}>
              <CartIcon />
            </div>
          </Link>
          <Search />
        </div>
      </div>
    </nav>
  );
}
