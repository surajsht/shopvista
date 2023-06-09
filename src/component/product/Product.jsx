import { useContext } from "react";
import { GlobalContext } from "../context/Context";
import ProductItem from "./ProductItem";
import Skeleton from "../skeletonLoading/Skeleton";

const Product = () => {
  let { allProduct, productLoading } = useContext(GlobalContext);

  let getProducts = () => {
    return (
      <div className="product-container">
        {allProduct.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    );
  };

  return <>{productLoading ? <Skeleton count={6} /> : getProducts()}</>;
};

export default Product;
