import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing page components
import Error from "./pages/Error";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

// importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
