import React from "react";
import { Route, Switch } from "react-router-dom";

import CartPage from "../components/pages/CartPage";
import CheckoutPage from "../components/pages/CheckoutPage";
import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchPage";
import ProductList from "../components/pages/ProductListPage";
import ProductDetails from "../components/pages/ProductDetailsPage";
import NotFound from "../components/pages/NotFoundPage";

const routes = (props) => {
  const {
    cart,
    changeQuantityHandler,
    addToCart,
    categories,
    cartLoading,
  } = props;
  return (
    <Switch>
      <Route
        path="/:categoryName/:id/:productName.html"
        render={() => (
          <ProductDetails
            recentlyViewed={props.recentlyViewed}
            recentViewedChange={props.recentViewedChange}
            cart={cart}
            addToCart={addToCart}
            categories={categories}
            changeQuantityHandler={changeQuantityHandler}
          />
        )}
      />
      {categories.map((category) => (
        <Route key={category.id} path={`/${category.name}.html`}>
          <ProductList
            cart={cart}
            category={category}
            addToCart={addToCart}
            changeQuantityHandler={changeQuantityHandler}
          />
        </Route>
      ))}

      <Route
        path="/cart.html"
        render={() => (
          <CartPage
            changeQuantityHandler={changeQuantityHandler}
            cartLoading={cartLoading}
            cart={cart}
          />
        )}
      />
      <Route
        path="/checkout.html"
        render={() => <CheckoutPage cart={cart} />}
      />

      <Route
        path="/search"
        render={() => <SearchPage addToCart={addToCart} />}
      />
      <Route
        exact
        path="/"
        render={() => (
          <HomePage
            recentlyViewed={props.recentlyViewed}
            topNew={props.topNew}
            topSellers={props.topSellers}
          />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default routes;
