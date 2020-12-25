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
      <a href="single-product.html">
        <img
          src={
            require(`../../assets/img/produts-img/${imageDirectory()}/${imageName}`)
              .default
          }
          alt=""
          className="product-thumb"
        />
      </a>
      <h2>
        <a href="single-product.html">{product.name}</a>
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
