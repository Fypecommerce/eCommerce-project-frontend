// importing react-hooks
import { useState, useEffect } from "react";
import axios from "axios";

// importing resuable components
import Product from "../components/Cards/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setActive(true); // loading ends
      })
      .catch((err) => console.warn(err));
  }, []);
  return (
    <>
      {active ? (
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
      ) : (
        <div
          className="container"
          style={{
            width: "100vw",
            height: "70vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="spinner-border text-warning"
            role="status"
            style={{ padding: "2vw" }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Shop;
