import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SingleProductSkeletonLoading from "../singleProductSkeleton/SingleProductSkeletonLoading";
import { useContext } from "react";
import { GlobalContext } from "../context/Context";

const SingleProduct = () => {
  let [productData, setProductData] = useState([]);

  let { singleLoading, setSingleLoading, addToCart } =
    useContext(GlobalContext);

  let { id } = useParams();

  let URL = `https://fakestoreapi.com/products/${id}`;

  let fetchSingleProduct = async () => {
    setSingleLoading(true);
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setProductData(data);
      setSingleLoading(false);
    } catch (e) {
      console.error(e);
      setSingleLoading(true);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  let singleProductContent = () => {
    let { title, price, description, category, image, rating } = productData;

    return (
      <div className="single-product-container">
        <div className="product-image">
          <img src={image} alt={category} />
        </div>

        <div className="product-content">
          <span className="product-category"> {category} </span>
          <span className="product-rating">
            <StarIcon /> {rating?.rate} ({rating?.count})
          </span>
          <h2 className="product-title"> {title} </h2>
          <p className="product-desc"> {description} </p>
          <span className="product-price"> ${price} </span>

          <button className="add-to-cart" onClick={() => addToCart(productData)}>
            <ShoppingCartIcon /> Add to cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {singleLoading ? (
        <SingleProductSkeletonLoading />
      ) : (
        singleProductContent()
      )}
    </>
  );
};

export default SingleProduct;
