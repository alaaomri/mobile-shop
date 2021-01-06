import React, { Component } from "react";
import Banner from "../layout/Banner";
import AddressForms from "../forms/AddressForms";
import OrderReview from "../order/OrederReview";
import { placeOrder } from "../../api";
import { Redirect } from "react-router-dom";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        id: props.cart.id,
        total: props.cart.total,
        subTotal: props.cart.subTotal,
        tax: props.cart.tax,
        items: props.cart.items,
        customer: {},
        paymentMethod: "bacs",
      },
      customer: {
        email: "",
        phone: "",
        note: "",
        billingAddress: {},
        shippingAddress: {},
      },
      billingAddress: {
        civility: "Mr",
        firstName: "",
        lastName: "",
        zipCode: "",
        street: "",
        companyName: "",
        county: "",
        city: "",
        apartment: "",
      },
      shippingAddress: {
        civility: "Mr",
        firstName: "",
        lastName: "",
        zipCode: "",
        street: "",
        companyName: "",
        county: "",
        city: "",
        apartment: "",
      },
      useOtherAddress: false,
      oderSubmitted: false,
    };
  }

  componentDidMount() {
    const { order, customer } = this.state;
    customer.billingAddress = this.state.billingAddress;
    customer.shippingAddress = this.state.shippingAddress;
    this.setState({ customer });
    order.customer = customer;
    this.setState({ order });
  }

  handleSubmit = async () => {
    this.props.placeOrder(this.state.order);
    this.setState({ oderSubmitted: true });
  };

  handleInfosChange = (name, value, targetState) => {
    if (targetState === "billingAddress") {
      if (name === "email" || name === "phone" || name === "note") {
        const customer = this.state.customer;
        customer[name] = value;

        this.setState({ customer });
      } else {
        const billingAddress = this.state.billingAddress;
        billingAddress[name] = value;
        this.setState({ billingAddress });
      }
    } else if (
      this.state.useOtherAddress &&
      targetState === "shippingAddress"
    ) {
      const shippingAddress = this.state.shippingAddress;
      shippingAddress[name] = value;
      this.setState({ shippingAddress });
    } else {
      const order = this.state.order;
      order.paymentMethod = value;
      this.setState({ order });
    }

    /*********** */
    const { order, customer } = this.state;
    customer.billingAddress = this.state.billingAddress;
    customer.shippingAddress = this.state.shippingAddress;
    this.setState({ customer });
    order.customer = customer;
    this.setState({ order });
  };

  componentWillUnmount() {}

  handleUseOtherAddress = () => {
    this.setState((prevState) => {
      return {
        useOtherAddress: !prevState.useOtherAddress,
      };
    });
  };

  render() {
    return this.state.oderSubmitted ? (
      <Redirect to="/" />
    ) : (
      <React.Fragment>
        <Banner title="Checkout" />
        <div className="single-product-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-content-right">
                  <div className="woocommerce"></div>
                  <form
                    encType="multipart/form-data"
                    action="#"
                    className="checkout"
                    method="post"
                    name="checkout"
                  >
                    <div id="customer_details" className="col2-set">
                      <AddressForms
                        change={this.handleInfosChange}
                        customer={this.state.customer}
                        handleUseOtherAddress={this.handleUseOtherAddress}
                        useOtherAddress={this.state.useOtherAddress}
                      />
                    </div>
                    <OrderReview
                      order={this.props.cart}
                      change={this.handleInfosChange}
                      submit={this.handleSubmit}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutPage;
