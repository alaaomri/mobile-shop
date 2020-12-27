import { Link } from "react-router-dom";
import Price from "../format/price";
const productSummary = (props) => {
  const { product } = props;
  const imageName = product.imageName;
  const imageDirectory = () => {
    if (imageName.startsWith("apple")) return "Apple";
    if (imageName.startsWith("sony")) return "Sony";
    if (imageName.startsWith("lg")) return "LG";
    if (imageName.startsWith("samsung")) return "Samsung";
    if (imageName.startsWith("huawei")) return "Huawei";
    return "";
  };
  return (
    <div key={product.id} className="single-wid-product">
      <Link
        to={`/${imageDirectory()}/${product.id}/${product.name.replaceAll(
          " ",
          "_"
        )}.html`}
      >
        <img
          src={
            imageDirectory() !== ""
              ? require(`../../assets/img/produts-img/${imageDirectory()}/${imageName}`)
                  .default
              : require(`../../assets/img/noImage.jpg`).default
          }
          alt=""
          className="product-thumb"
        />
      </Link>
      <h2>
        <Link
          to={`/${imageDirectory()}/${product.id}/${product.name.replaceAll(
            " ",
            "_"
          )}.html`}
        >
          {product.name}
        </Link>
      </h2>
      <div className="product-wid-rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
      </div>
      <Price price={product.price} discount={product.discountRate} />
    </div>
  );
};

export default productSummary;
