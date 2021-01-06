import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  fetchCategories,
  fetchCartData,
  modifyCartData,
  addNewCartData,
  fetchTopProducts,
  placeOrder,
} from "./api";
import ErrorBloc from "./components/layout/ErrorBloc";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Routes from "./routes/Routes";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

const RECENT_VIEWED_COOKIE_NAME = "recentViewed";
class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      topSellers: [],
      topNew: [],
      recentlyViewed: [],
      categories: [],
      cartLoading: true,
      pageHasError: false,
      oderSubmitted: false,
      cart: {
        id: "",
        total: 0.0,
        subTotal: 0.0,
        tax: 0.0,
        items: [],
      },
    };
  }

  componentDidMount() {
    fetchCategories()
      .then((categories) => {
        this.setState({ categories });
      })
      .catch(() => {
        this.setState({ pageHasError: true });
      });

    // preparing recent view
    const { cookies } = this.props;
    const recentlyViewed = cookies.get(RECENT_VIEWED_COOKIE_NAME) || [];
    this.setState({ recentlyViewed });

    //preparing cart
    const cartID = localStorage.getItem("cartID");

    if (cartID != null) {
      fetchCartData(cartID)
        .then((cart) => {
          this.setState({ cart });
        })
        .catch(() => {
          this.setState({ pageHasError: true });
        });
    }
    fetchTopProducts("top-sellers-products")
      .then((topSellers) => {
        this.setState({ topSellers });
      })
      .catch(() => {
        this.setState({ pageHasError: true });
      });
    fetchTopProducts("top-new-products")
      .then((topNew) => {
        this.setState({ topNew });
      })
      .catch(() => {
        this.setState({ pageHasError: true });
      });

    this.setState({ cartLoading: false });
  }

  placeOrder = (order) => {
    const id = localStorage.getItem("cartID");
    placeOrder(order, id)
      .then((res) => {
        localStorage.removeItem("cartID");
        this.setState({
          cart: {
            id: "",
            total: 0.0,
            subTotal: 0.0,
            tax: 0.0,
            items: [],
          },
        });
      })
      .catch((err) => console.error(err));
  };

  recentViewedChangeHandler = (product) => {
    const { cookies } = this.props;
    const newProduct = { ...product };
    newProduct.description = "";
    let recentViewed = [...this.state.recentlyViewed];

    recentViewed.unshift(newProduct);

    const recentlyViewed = recentViewed
      .reduce(
        (x, y) => (x.findIndex((e) => e.id === y.id) < 0 ? [...x, y] : x),
        []
      )
      .splice(0, 5);

    cookies.set(RECENT_VIEWED_COOKIE_NAME, recentlyViewed, {
      path: "/",
    });
    this.setState({ recentlyViewed });
  };

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

    const total = this.cartTotal(cart) !== 0 ? this.cartTotal(cart) + 5 : 0;

    cart.total = total.toFixed(2);
    cart.subTotal = (total !== 0 ? total - 5 : total).toFixed(2);
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
      cart.total = (product.price * quantity + 5).toFixed(2);
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
          recentlyViewed={this.state.recentlyViewed}
          topNew={this.state.topNew}
          topSellers={this.state.topSellers}
          recentViewedChange={this.recentViewedChangeHandler}
          cartLoading={this.state.cartLoading}
          addToCart={this.addToCart}
          changeQuantityHandler={this.changeCartQuantityHandler}
          cart={this.state.cart}
          categories={this.state.categories}
          placeOrder={this.placeOrder}
        />
        <Footer categories={this.state.categories} />
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
