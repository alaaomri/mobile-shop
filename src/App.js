import React, { Component } from "react";
import {
  fetchCategories,
  fetchCartData,
  modifyCartData,
  addNewCartData,
} from "./api";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Spinner from "./components/layout/spinner";
import Routes from "./routes/routes";

class App extends Component {
  state = {
    categories: [],
    cartLoading: true,
    cart: {
      id: "",
      total: 0,
      subTotal: 0,
      tax: 20,
      items: [],
    },
  };

  async componentDidMount() {
    const cartID = localStorage.getItem("cartID");

    const data = await fetchCategories();
    this.setState({ categories: data });
    if (cartID != null) {
      const cartData = await fetchCartData(cartID);
      this.setState({ cart: cartData });
    }
    this.setState({ cartLoading: false });
  }

  componentWillUnmount() {
    localStorage.removeItem("cartID");
  }

  changeCartQuantityHandler = (entryId, quantity) => {
    this.setState({ cartLoading: true });
    const cartID = localStorage.getItem("cartID");
    const cart = { ...this.state.cart };

    const entryIndex = cart.items.findIndex((item) => item.id === entryId);

    if (quantity === 0) {
      cart.items[entryIndex].qty = 0;
      cart.items.splice(entryIndex, 1);
    } else {
      cart.items[entryIndex].qty = quantity;
    }

    const total = this.cartTotal(cart);

    cart.total = total;
    cart.subTotal = 0.8 * total;
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
      const cartId = Math.random().toString(36).substr(2, 10);
      localStorage.setItem("cartID", cartId);
      const cart = { ...this.state.cart };
      cart.id = cartId;
      cart.total = product.price;
      cart.subTotal = (0.8 * product.price).toFixed(2);
      cart.tax = 20;
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
      const cart = { ...this.state.cart };
      const entryIndex = cart.items.findIndex((item) => item.id === product.id);
      if (entryIndex > -1) {
        cart.items[entryIndex].qty = cart.items[entryIndex].qty + quantity;
        const total = this.cartTotal(cart);

        cart.total = total;
        cart.subTotal = (0.8 * total).toFixed(2);
      } else {
        const item = {
          id: product.id,
          name: product.name,
          imageName: product.imageName,
          price: product.price,
          qty: quantity,
        };
        cart.items.push(item);
        const total = this.cartTotal(cart);

        cart.total = total;
        cart.subTotal = (0.8 * total).toFixed(2);
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
    return this.state.loding ? (
      <Spinner />
    ) : (
      <React.Fragment>
        <Header categories={this.state.categories} cart={this.state.cart} />
        <Routes
          cartLoading={this.state.cartLoading}
          addToCart={this.addToCart}
          changeQuantityHandler={this.changeCartQuantityHandler}
          cart={this.state.cart}
          categories={this.state.categories}
        />
        <Footer categories={this.state.categories} />
      </React.Fragment>
    );
  }
}

export default App;
