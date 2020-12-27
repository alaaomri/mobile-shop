import React from "react";
import { Route, Switch } from "react-router-dom";

import CartPage from "../components/pages/cartPage";
import CheckoutPage from "../components/pages/CheckoutPage";
import HomePage from "../components/pages/homePage";
import SearchPage from "../components/pages/SearchPage";
import ProductList from "../components/pages/ProductListPage";
import ProductDetails from "../components/pages/ProductDetailsPage";
import NotFound from "../components/pages/notFoundPage";

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
      <Route path="/checkout.html" render={() => <CheckoutPage />} />

      <Route
        path="/search"
        render={() => <SearchPage addToCart={addToCart} />}
      />
      <Route exact path="/" render={() => <HomePage />} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default routes;
