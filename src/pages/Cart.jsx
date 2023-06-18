import Navbar from "../component/navbar/Navbar";
import { useContext } from "react";
import { GlobalContext } from "../component/context/Context";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const Cart = () => {
  let { cartItem, increaseCart, decreaseCart, removeCartItem } =
    useContext(GlobalContext);

  return (
    <>
      <Navbar />

      <div className="cart">
        <div className="wrapper">
          <div className="cart-content">
            <div className="cart-products">
              <h2 className="cart-prodcut-title">items in cart</h2>

              <div className="cart-product-content">
                <div className="product-content-header">
                  <div className="product-content-item"> Items </div>
                  <div className="product-content-unitPrice"> Unite Price </div>
                  <div className="product-content-quantity"> Quantity </div>
                  <div className="product-content-finalPrice">Final Price</div>
                  <div className="product-content-remove"> Remove </div>
                </div>

                <div className="product-content-body">
                  {cartItem.map((item) => {
                    let { id, image, title, price, quantity } = item;

                    return (
                      <div key={id} className="content-item-container">
                        <div className="product-content-item">
                          <div className="cart-product-image">
                            <img src={image} alt={title} />
                          </div>

                          <div className="cart-product-title">
                            <h2>
                              <Link to={`/product/${id}`}> {title} </Link>
                            </h2>
                          </div>
                        </div>

                        <div className="product-content-unitPrice">
                          Rs. {price}
                        </div>

                        <div className="product-content-quantity product-quantity">
                          <button
                            className="product-btn decrease-product"
                            onClick={() => decreaseCart(item)}
                          >
                            <RemoveIcon />
                          </button>
                          <input
                            type="number"
                            className="product-quantity-indicator"
                            value={quantity}
                            onChange={(e) => e.preventDefault()}
                          />
                          <button
                            className="product-btn increase-product"
                            onClick={() => increaseCart(item)}
                          >
                            <AddIcon />
                          </button>
                        </div>

                        <div className="product-content-finalPrice">
                          Rs. {(quantity * price).toFixed(2)}
                        </div>

                        <button
                          className="product-content-remove"
                          onClick={() => removeCartItem(item)}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="cart-product-total"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
