import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const SingleProduct = () => {
  let [productData, setProductData] = useState([]);
  let { id } = useParams();

  let URL = `https://fakestoreapi.com/products/${id}`;

  let fetchSingleProduct = async () => {
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setProductData(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

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

        <div className="product-quantity">
          <span className="product-quantity-title"> Quantity </span>
          <button className="product-btn decrease-product">
            <RemoveIcon />
          </button>
          <input
            type="number"
            className="product-quantity-indicator"
            value={"1"}
          />
          <button className="product-btn increase-product">
            <AddIcon />
          </button>
        </div>

        <button className="add-to-cart">
          <ShoppingCartIcon /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
