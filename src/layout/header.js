import Menu from "./menu";
import Branding from "../components/branding/branding";
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

export default header;
