import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search product" />
      </div>
      <nav>
        <Link to="feature">Feature</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Product;
