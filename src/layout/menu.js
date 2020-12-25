import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import ProductList from "../pages/ProductList";
const Menu = (props) => {
  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
              <li>
                <a href="/">Home</a>
              </li>
              {props.categories.map((category) => (
                <li key={category.id}>
                  <Link to={`${category.name}.html`}>{category.name}</Link>
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
