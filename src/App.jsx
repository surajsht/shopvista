import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Error from "./pages/Error";
import "./styles/style.css";
import Cart from "./pages/Cart";
import Context from "./component/context/Context";
import Shop from "./pages/Shop";
import ScrollToTop from "./component/scrolltotop/ScrollToTop";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
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
