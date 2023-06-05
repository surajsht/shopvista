import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Single from "./pages/Single";
import Error from "./pages/Error";
import "./styles/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<Single />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
