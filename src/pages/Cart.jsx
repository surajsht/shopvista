import Navbar from "../component/navbar/Navbar";
import { useContext } from "react";
import { GlobalContext } from "../component/context/Context";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  let { cartItem } = useContext(GlobalContext);

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
                  <div> Items </div>
                  <div> Unite Price </div>
                  <div> Quantity </div>
                  <div> Final Price </div>
                  <div> Remove </div>
                </div>

                <div className="product-content-body">
                  {cartItem.map((item) => {
                    let { id, image, title, price, quantity } = item;

                    return (
                      <div key={id}>
                        <div>
                          <div className="cart-product-image">
                            <img src={image} alt={title} />
                          </div>

                          <div className="cart-product-title">
                            <h2> {title} </h2>
                          </div>
                        </div>
                        <div> {price} </div>
                        <div> {quantity} </div>
                        <div> {quantity * price} </div>
                        <div>
                          <CloseIcon />
                        </div>
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
