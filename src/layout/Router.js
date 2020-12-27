import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/notFound";
import Footer from "./footer";
import Header from "./header";
const Router = (props) => {
  const { cart, changeQuantityHandler, addToCart, categories } = props;
  return (
    <React.Fragment>
      <Header {...props} />

      <Switch>
        {props.categories.map((category) => (
          <Route exact key={category.id} path={`/${category.name}.html`}>
            <ProductList
              cart={cart}
              category={category}
              addToCart={addToCart}
              changeQuantityHandler={props.changeQuantityHandler}
            />
          </Route>
        ))}
        <Route
          exact
          path="/:categoryName/:id/:productName.html"
          render={(props) => (
            <ProductDetails
              {...props}
              cart={cart}
              addToCart={addToCart}
              categories={categories}
              changeQuantityHandler={changeQuantityHandler}
            />
          )}
        />

        <Route
          path="/cart.html"
          render={() => (
            <CartPage
              changeQuantityHandler={props.changeQuantityHandler}
              cart={cart}
            />
          )}
        />
        <Route path="/checkout.html" render={() => <CheckoutPage />} />

        <Route
          path="/search"
          render={(props) => <SearchPage {...props} addToCart={addToCart} />}
        />
        <Route path="/" exact render={() => <HomePage />} />
        <Route component={NotFound} />
      </Switch>
      <Footer categories={categories} />
    </React.Fragment>
  );
};

export default withRouter(Router);
