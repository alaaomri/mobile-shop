import { Link } from "react-router-dom";

const notFound = () => (
  <main role="main" className=" text-center bg-secondary mt-1 pb-5">
    <img
      className="img-notFound"
      alt="404 not found"
      src={require("../assets/img/404-banner.svg").default}
    />
    <p className="text-white">
      OUPS ! IL SEMBLE QUE CETTE PAGE N'EXISTE PLUS POURTANT LE PRODUIT QUE VOUS
      CHERCHEZ VOUS ATTEND
      <br />
      <Link to="/" className="emtyCartBack" alt="Go to Home">
        Home
      </Link>
    </p>
  </main>
);

export default notFound;
