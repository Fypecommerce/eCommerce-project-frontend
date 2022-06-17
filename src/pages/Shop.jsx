// importing react-hooks
import { useState, useEffect } from "react";
import axios from "axios";

// importing resuable components
import Product from "../components/Cards/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 col-sm-12">
            <Product
              img={product.image}
              name={product.title}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
