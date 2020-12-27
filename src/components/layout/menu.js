import { NavLink } from "react-router-dom";

const menu = (props) => {
  return (
    <div className="mainmenu-area">
      <div className="container">
        <div className="row">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-expand">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {props.categories.map((category) => (
                <li key={category.id}>
                  <NavLink to={`/${category.name}.html`}>
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default menu;
