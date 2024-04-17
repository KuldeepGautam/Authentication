import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto w-100 justify-content-end">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/logs" href="#">
                  Logs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Pricing
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link class="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/loginForm" className="nav-link" href="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
