import React, { Component } from "react";
import Banner from "../layout/Banner";
import AddressForms from "../forms/AddressForms";
import OrderReview from "../order/OrederReview";

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        orderDetails: props.cart,
        customerInfos: {},
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
    };
  }

  componentDidMount() {
    const order = this.state.order;
    const customer = this.state.customer;
    //const billingAddress = this.state.billingAddress ;
    //const shippingAddress =this.state.shippingAddress ;
    customer.billingAddress = this.state.billingAddress;
    customer.shippingAddress = this.state.shippingAddress;
    customer.paymentMethod = this.state.paymentMethod;
    this.setState({ customer });
    order.orderDetails = this.props.cart;
    order.customerInfos = customer;
    this.setState({ order });
  }

  handleSubmit = () => {
    console.log("submitted");
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
    } else if (targetState === "shippingAddress") {
      const shippingAddress = this.state.shippingAddress;
      shippingAddress[name] = value;
      this.setState({ shippingAddress });
    } else {
      debugger;
      const order = this.state.order;
      order.paymentMethod = value;
      this.setState({ order });
    }

    /*********** */
    const order = this.state.order;
    const customer = this.state.customer;
    //const billingAddress = this.state.billingAddress ;
    //const shippingAddress =this.state.shippingAddress ;
    customer.billingAddress = this.state.billingAddress;
    customer.shippingAddress = this.state.shippingAddress;
    customer.paymentMethod = this.state.paymentMethod;
    this.setState({ customer });
    order.orderDetails = this.props.cart;
    order.customerInfos = customer;
    this.setState({ order });
  };

  render() {
    return (
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
