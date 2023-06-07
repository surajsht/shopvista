import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Single from "./pages/Single";
import Error from "./pages/Error";
import "./styles/style.css";
import Cart from "./pages/Cart";
import Context from "./component/context/Context";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Single />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
