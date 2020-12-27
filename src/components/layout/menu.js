import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
              <li>
                <Link to="/">Home</Link>
              </li>
              {props.categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/${category.name}.html`}>{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
