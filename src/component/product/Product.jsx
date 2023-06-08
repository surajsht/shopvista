import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import ProductItem from "./ProductItem";

const Product = () => {
  let { allProduct } = useContext(GlobalContext);

  return (
    <div className="product-container">
      {allProduct.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Product;
