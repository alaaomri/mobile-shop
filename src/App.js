import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  fetchCategories,
  fetchCartData,
  modifyCartData,
  addNewCartData,
} from "./api";
import ErrorBloc from "./components/layout/errorBloc";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Routes from "./routes/routes";

class App extends Component {
  state = {
    categories: [],
    cartLoading: true,
    pageHasError: false,
    cart: {
      id: "",
      total: 0,
      subTotal: 0,
      tax: 0,
      items: [],
    },
  };

  async componentDidMount() {
    const cartID = localStorage.getItem("cartID");
    await fetchCategories()
      .then((categories) => {
        this.setState({ categories });
      })
      .catch(() => {
        this.setState({ pageHasError: true });
      });

    if (cartID != null) {
      await fetchCartData(cartID)
        .then((cart) => {
          this.setState({ cart });
        })
        .catch(() => {
          this.setState({ pageHasError: true });
        });
    }
    this.setState({ cartLoading: false });
  }

  componentWillUnmount() {
    //localStorage.removeItem("cartID");
  }

  changeCartQuantityHandler = (entryId, quantity) => {
    this.setState({ cartLoading: true });
    const cartID = localStorage.getItem("cartID");
    const cart = { ...this.state.cart };

    const entryIndex = cart.items.findIndex((item) => item.id === entryId);

    //quantity === 0 means user remove the entry from cart
    if (quantity === 0) {
      cart.items[entryIndex].qty = 0;
      cart.items.splice(entryIndex, 1);
    } else {
      cart.items[entryIndex].qty = quantity;
    }

    const total = this.cartTotal(cart) + 5;

    cart.total = total.toFixed(2);
    cart.subTotal = (total - 5).toFixed(2);
    cart.tax = (0.2 * total).toFixed(2);
    if (cartID != null) {
      this.setState({ cart });
    }

    modifyCartData(cartID, cart);
    this.setState({ cartLoading: false });
  };

  addToCart = (product, quantity) => {
    this.setState({ cartLoading: true });
    const cartID = localStorage.getItem("cartID");
    if (cartID == null) {
      // user don't have stored cart => we will create a new cart
      const cartId = Math.random().toString(36).substr(2, 10);
      localStorage.setItem("cartID", cartId);
      const cart = { ...this.state.cart };
      cart.id = cartId;
      cart.total = product.price + 5;
      cart.subTotal = product.price.toFixed(2);
      cart.tax = (0.2 * cart.total).toFixed(2);
      const item = {
        id: product.id,
        name: product.name,
        imageName: product.imageName,
        price: product.price,
        qty: quantity,
      };
      cart.items.push(item);
      this.setState({ cart });
      addNewCartData(cart);
    } else {
      // user already have cart id => we will update his cart
      const cart = { ...this.state.cart };
      const entryIndex = cart.items.findIndex((item) => item.id === product.id);
      if (entryIndex > -1) {
        // product already exist in cart => we will update quantity
        cart.items[entryIndex].qty = cart.items[entryIndex].qty + quantity;
        const total = this.cartTotal(cart);

        cart.total = total.toFixed(2);
        cart.subTotal = (total - 5).toFixed(2);
        cart.tax = (0.2 * total).toFixed(2);
      } else {
        // product doesn't exist in cart => we will create a new entry in cart
        const item = {
          id: product.id,
          name: product.name,
          imageName: product.imageName,
          price: product.price,
          qty: quantity,
        };
        cart.items.push(item);
        const total = this.cartTotal(cart) + 5;
        cart.total = total.toFixed(2);
        cart.subTotal = (total - 5).toFixed(2);
        cart.tax = (0.2 * total).toFixed(2);
      }
      this.setState({ cart });
      modifyCartData(cartID, cart);
    }
    this.setState({ cartLoading: false });
  };

  cartTotal = (cart) => {
    return cart.items
      .map((item) => item.price * item.qty)
      .reduce((sum, current) => parseInt(sum + current), 0);
  };

  render() {
    return this.state.pageHasError ? (
      <ErrorBloc />
    ) : (
      <BrowserRouter>
        <Header categories={this.state.categories} cart={this.state.cart} />
        <Routes
          cartLoading={this.state.cartLoading}
          addToCart={this.addToCart}
          changeQuantityHandler={this.changeCartQuantityHandler}
          cart={this.state.cart}
          categories={this.state.categories}
        />
        <Footer categories={this.state.categories} />
      </BrowserRouter>
    );
  }
}

export default App;
