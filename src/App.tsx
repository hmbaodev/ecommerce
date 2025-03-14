import { Route, Routes } from "react-router";

import { Footer, Header } from "./components";
import {
  Home,
  AboutUs,
  Contact,
  Collection,
  Login,
  SignUp,
  Cart,
  OrderHistory,
  ProductDetail,
} from "./routes";

const App = () => {
  return (
    <div className="app__container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
