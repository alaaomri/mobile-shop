import SinglePromo from "./singlePromo";

const promotionArea = (props) => {
  return (
    <div className="promo-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <SinglePromo
            promoName="30 Days return"
            promoLogo="fa fa-refresh"
            promoId="promo1"
          />
          <SinglePromo
            promoName="Free shipping"
            promoLogo="fa fa-truck"
            promoId="promo2"
          />
          <SinglePromo
            promoName="Secure payments"
            promoLogo="fa fa-lock"
            promoId="promo3"
          />
          <SinglePromo
            promoName="New products"
            promoLogo="fa fa-gift"
            promoId="promo4"
          />
        </div>
      </div>
    </div>
  );
};

export default promotionArea;
