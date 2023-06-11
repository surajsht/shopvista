import { useEffect } from "react";
import Category from "../component/category/Category";
import Navbar from "../component/navbar/Navbar";
import Product from "../component/product/Product";

const Shop = () => {
  useEffect(() => {
    document.body.classList.add("shop");

    return () => document.body.classList.remove("shop");
  }, []);

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="product">
          <div className="filter">
            <Category />
          </div>

          <Product />
        </div>
      </div>
    </>
  );
};

export default Shop;
