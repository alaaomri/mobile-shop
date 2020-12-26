import { Link } from "react-router-dom";

const otherBrands = (props) => {
  return (
    <div className="single-sidebar">
      <h2 className="sidebar-title">Others brands</h2>
      <ul>
        {props.otherBrands.map((category) => (
          <li key={category.id}>
            <Link to={`/${category.name}.html`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default otherBrands;
