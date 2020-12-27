import { Link } from "react-router-dom";
import Price from "../format/price";

const SingleProduct = (props) => {
  const { product, categoryName } = props;

  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product">
        <div className="product-upper">
          <img
            src={
              categoryName !== ""
                ? require(`../../assets/img/produts-img/${categoryName}/${product.imageName}`)
                    .default
                : require(`../../assets/img/noImage.jpg`).default
            }
            alt=""
          />
        </div>
        <h2>
          <Link
            to={`/${categoryName}/${product.id}/${product.name.replaceAll(
              " ",
              "_"
            )}.html`}
          >
            {product.name}
          </Link>
        </h2>
        <Price
          discount={product.discountRate}
          price={product.price}
          stylingClass="product-carousel-price"
        />

        <div className="product-option-shop">
          <button
            className="add_to_cart_button"
            data-quantity="1"
            data-product_sku=""
            data-product_id="70"
            onClick={() => props.addToCart(product, 1)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
