const singlePromo = (props) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className={`single-promo ${props.promoId}`}>
        <i className={props.promoLogo}></i>
        <p>{props.promoName}</p>
      </div>
    </div>
  );
};

export default singlePromo;
