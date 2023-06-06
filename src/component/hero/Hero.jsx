import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="" />

      <div className="hero-content">
        <h2 className="hero-title">Rest, Relax, Unwind</h2>

        <h3 className="hero-sub-title"> Embrace your choices - we do </h3>

        <Link to="/product" className="primary-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
