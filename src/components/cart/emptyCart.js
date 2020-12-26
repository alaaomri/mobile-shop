import { Link } from "react-router-dom";

const emptyCart = () => {
  return (
    <div className="cart-empty">
      <div className="panierVide">
        <div className="iconPanierVide mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="42"
            viewBox="0 0 34 42"
          >
            <path
              id="Rectangle_1_copie"
              data-name="Rectangle 1 copie"
              className="cls-1"
              d="M34,42H0L1,12h9.029C10.325,3.984,14.117-.06,17-0.06S23.675,3.984,23.971,12H33ZM17,2c-3.922,0-4.862,5.841-4.983,10h9.967C21.862,7.841,20.922,2,17,2ZM31,14H3L2,40H32ZM10.5,16A1.5,1.5,0,1,1,9,17.5,1.5,1.5,0,0,1,10.5,16Zm13,0A1.5,1.5,0,1,1,22,17.5,1.5,1.5,0,0,1,23.5,16Z"
            ></path>
          </svg>
        </div>
        <p className="text-center">
          Votre panier est vide
          <br />
          Continuez vos achats
        </p>
        <Link to="/" className="emtyCartBack" alt="Continuer mes achats">
          Commencer mes achats
        </Link>
      </div>
    </div>
  );
};

export default emptyCart;
