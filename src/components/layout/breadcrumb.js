import { Link, NavLink } from "react-router-dom";

const breadcrumb = (props) => {
  const { categoryName, productName } = props;
  return (
    <div className="product-breadcroumb">
      <NavLink to="/">Home</NavLink>
      <NavLink to={`/${categoryName}.html`}>{categoryName}</NavLink>
      <Link to="#">{productName}</Link>
    </div>
  );
};

export default breadcrumb;
