import React, { Component } from "react";
import {
  fetchCategories,
  fetchCartData,
  modifyCartData,
  addNewCartData,
} from "./api";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Routes from "./routes/routes";

class App extends Component {
  state = {
    categories: [],
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
  }

  componentWillUnmount() {
    localStorage.removeItem("cartID");
  }

  changeCartQuantityHandler = (entryId, quantity) => {
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
  };

  addToCart = (product, quantity) => {
    const cartID = localStorage.getItem("cartID");
    if (cartID == null) {
      const cartId = Math.random().toString(36).substr(2, 10);
      localStorage.setItem("cartID", cartId);
      const cart = { ...this.state.cart };
      cart.id = cartId;
      cart.total = product.price;
      cart.subTotal = 0.8 * product.price;
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
        cart.subTotal = 0.8 * total;
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
        cart.subTotal = 0.8 * total;
      }
      this.setState({ cart });
      modifyCartData(cartID, cart);
    }
  };

  cartTotal = (cart) => {
    return cart.items
      .map((item) => item.price * item.qty)
      .reduce((sum, current) => parseInt(sum + current), 0);
  };

  loadingBloc = () => {
    return (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  render() {
    return this.state.loding ? (
      this.loadingBloc
    ) : (
      <React.Fragment>
        <Header categories={this.state.categories} cart={this.state.cart} />
        <Routes
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
