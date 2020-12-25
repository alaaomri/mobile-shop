import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Branding from "../components/branding/branding";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import Footer from "./footer";
import Menu from "./menu";
const Router = (props) => {
  const { cart } = props;
  return (
    <BrowserRouter>
      <Branding cart={props.cart} />
      <Menu categories={props.categories} />

      <Switch>
        {props.categories.map((category) => (
          <Route exact key={category.id} path={`/${category.name}.html`}>
            <ProductList cart={cart} category={category} />
          </Route>
        ))}
        <Route
          exact
          path="/:categoryName/productDetails/:id.html"
          render={(props) => <ProductDetails {...props} cart={cart} />}
        />
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/cart.html" render={() => <CartPage cart={cart} />} />
        <Route path="/checkout.html" render={() => <CheckoutPage />} />

        <Route path="/search" render={() => <SearchPage />} />
      </Switch>
      <Footer categories={props.categories} />
    </BrowserRouter>
  );
};

export default Router;
