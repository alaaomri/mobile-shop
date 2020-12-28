import React, { Component } from "react";
import Banner from "../layout/Banner";
import AddressForms from "../forms/AddressForms";
class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        orderDetails: {},
        customerInfos: {},
      },
      customer: {
        email: "",
        phone: "",
        note: "",
        billingAddress: {},
        shippingAddress: {},
      },
      billingAddress: {
        civility: "",
        firstName: "Alla",
        lastName: "",
        zipCode: "",
        street: "",
        companyName: "",
        county: "",
        city: "",
      },
      shippingAddress: {
        civility: "",
        firstName: "",
        lastName: "",
        zipCode: "",
        street: "",
        companyName: "",
        county: "",
        city: "",
      },
      paymentMethod: "",
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

  handleInfosChange = (name, value, targetState) => {
    console.log(this.state, "before", value);
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
    } else {
      const shippingAddress = this.state.shippingAddress;
      shippingAddress[name] = value;
      this.setState({ shippingAddress });
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
    console.log(this.state, "after", value);
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
                    enctype="multipart/form-data"
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
                    <h3 id="order_review_heading">Your order</h3>
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
