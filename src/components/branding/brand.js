import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
const brand = () => {
  return (
    <div className="col-sm-4">
      <div className="logo" style={{ width: "100px", height: "100px" }}>
        <h1>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default brand;
