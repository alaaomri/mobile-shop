import React, { Component } from "react";
import { fetchCategories, fetchCartData } from "./api";

import Branding from "./components/branding/branding";
import Router from "./layout/Router";
import Footer from "./layout/footer";

class App extends Component {
  state = {
    categories: [],
    isMenuDisplayed: true,
    cart: {
      id: "",
      total: 0,
      subTotal: 0,
      tax: 14.7,
      items: [],
    },
  };

  async componentDidMount() {
    const cartID = localStorage.getItem("cartID");

    const data = await fetchCategories();
    this.setState({ categories: data });
    if (cartID != null) {
      const cartData = await fetchCartData(cartID);
      console.log(cartData);
      this.setState({ cart: cartData });
    }
  }

  errorBloc = () => {
    return (
      <div className="alert alert-dismissible alert-danger">
        <button type="button" className="close" data-dismiss="alert">
          &times;
        </button>
        <strong>Oh snap!</strong>
        <a href="#" className="alert-link">
          Change a few things up
        </a>
        and try submitting again.
      </div>
    );
  };

  render() {
    return (
      <div>
        <Router cart={this.state.cart} categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
