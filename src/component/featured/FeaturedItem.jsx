import { Link } from "react-router-dom";

const FeaturedItem = ({ data }) => {
  let { image, title, price } = data;
  return (
    <div className="featured-item">
      <img src={image} alt="" />
      <h2 className="shopvista-item-title">
        <Link to="/product"> {title} </Link>
      </h2>
      <span className="shopvista-price"> ${price} </span>
    </div>
  );
};

export default FeaturedItem;
