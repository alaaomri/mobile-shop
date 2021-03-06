import Menu from "./Menu";
import Branding from "../branding/BrandingArea";
import { withRouter } from "react-router-dom";
const header = (props) => {
  const isDisplay =
    props.location.pathname !== "/cart.html" &&
    props.location.pathname !== "/checkout.html";

  return (
    <>
      <Branding cart={props.cart} isSearchDisplay={isDisplay} />
      {isDisplay ? <Menu categories={props.categories} /> : null}
    </>
  );
};

export default withRouter(header);
