import React, { useState } from "react";
import "./Navigation.scss";
import logo from "../../../assets/images/logo_elixir.png";
import { Link, NavLink } from "react-router-dom";
import routes from "../../../utils/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <img src={logo} alt="Elixir logo" />
        </Link>
        <div className={showMobileMenu ? "show-mobile-menu" : "nav-menu"}>
          {Object.values(routes)
            .filter((element) => element.includeInNav === true)
            .map((element, index) => (
              <NavLink
                key={index + 1}
                to={element.path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {element.name}
              </NavLink>
            ))}
        </div>
      </div>
      <div className="mobile-menu-wrapper">
        <FontAwesomeIcon
          className="mobile-menu-btn"
          icon={faBars}
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        />
      </div>
    </nav>
  );
};

export default Navigation;
