import { Link } from "react-router-dom";

const breadcrumb = (props) => {
  const { categoryName, productName } = props;
  return (
    <div className="product-breadcroumb">
      <Link to="/">Home</Link>
      <Link to={`/${categoryName}.html`}>{categoryName}</Link>
      <Link to="#">{productName}</Link>
    </div>
  );
};

export default breadcrumb;
