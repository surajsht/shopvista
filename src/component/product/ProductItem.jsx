import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  let { id, title, price, image, rating, category } = product;

  return (
    <div className="product-item">
      <img src={image} alt={category} />
      <h2 className="shopvista-item-title">
        <Link to={`/product/${id}`}>{title}</Link>
      </h2>
      <span className="shopvista-price">${price}</span>
      <div className="shopvista-rating">
        <StarIcon />
        <span> ({rating.count}) </span>
      </div>
    </div>
  );
};

export default ProductItem;
