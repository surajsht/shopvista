import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

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
      </div>
    </div>
  );
};

export default SingleProduct;
