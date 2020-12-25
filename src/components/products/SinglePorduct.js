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
              require(`../../assets/img/produts-img/${categoryName}/${product.imageName}`)
                .default
            }
            alt=""
          />
        </div>
        <h2>
          <Link to={`${categoryName}/productDetails/${product.id}.html`}>
            {product.name}
          </Link>
        </h2>
        <Price
          discount={product.discountRate}
          price={product.price}
          stylingClass="product-carousel-price"
        />

        <div className="product-option-shop">
          <a
            className="add_to_cart_button"
            data-quantity="1"
            data-product_sku=""
            data-product_id="70"
            rel="nofollow"
            href="#"
            onClick={() => props.addToCart(product)}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
