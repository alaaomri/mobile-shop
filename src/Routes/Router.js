import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import CartPage from "../components/pages/CartPage";
import CheckoutPage from "../components/pages/CheckoutPage";
import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchPage";
import ProductList from "../components/pages/ProductListPage";
import ProductDetails from "../components/pages/ProductDetailsPage";
import NotFound from "../components/pages/notFoundPage";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
const Router = (props) => {
  const { cart, changeQuantityHandler, addToCart, categories } = props;
  return (
    <React.Fragment>
      <Header categories={categories} cart={cart} />

      <Switch>
        {categories.map((category) => (
          <Route exact key={category.id} path={`/${category.name}.html`}>
            <ProductList
              cart={cart}
              category={category}
              addToCart={addToCart}
              changeQuantityHandler={changeQuantityHandler}
            />
          </Route>
        ))}
        <Route
          exact
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

        <Route
          path="/cart.html"
          render={() => (
            <CartPage
              changeQuantityHandler={changeQuantityHandler}
              cart={cart}
            />
          )}
        />
        <Route path="/checkout.html" render={() => <CheckoutPage />} />

        <Route
          path="/search"
          render={() => <SearchPage addToCart={addToCart} />}
        />
        <Route path="/" exact render={() => <HomePage />} />
        <Route component={NotFound} />
      </Switch>
      <Footer categories={categories} />
    </React.Fragment>
  );
};

export default Router;
