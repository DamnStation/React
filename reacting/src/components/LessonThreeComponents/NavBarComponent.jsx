import React from "react";

function NavBarComponent() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="navbar-brand">Reacting</li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://www.konfest.com/product/free-png-owl-27/"
              target="_blank"
            >
              PRO
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="http://cliparting.com/free-cartoon-owl-45574/"
              target="_blank"
            >
              BA
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://www.shutterstock.com/image-photo/common-barn-owl-tyto-albahead-head-379547776"
              target="_blank"
            >
              HEI
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              href="http://cliparting.com/free-cartoon-owl-45676/"
              target="_blank"
            >
              Shest
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default NavBarComponent;
