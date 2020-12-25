const cartTotal = (props) => {
  const { cart } = props;

  return (
    <div className="cart_totals ">
      <h2>Cart Totals</h2>

      <table cellSpacing="0">
        <tbody>
          <tr className="cart-subtotal">
            <th>Cart Subtotal</th>
            <td>
              <span className="amount">{cart.subTotal} €</span>
            </td>
          </tr>

          <tr className="shipping">
            <th>{`Taxe (${cart.tax}%)`}</th>
            <td>20.23 €</td>
          </tr>

          <tr className="order-total">
            <th>Order Total</th>
            <td>
              <strong>
                <span className="amount">{cart.total} €</span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default cartTotal;
