// importing react and redux
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, remove } from "../redux/slice/Cart.slice";
import axios from "axios";

const ProductPage = () => {
  // redux
  const dispatch = useDispatch();
  // state
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [q, setQuantity] = useState(1);
  // Dynamic route params
  const params = useParams();
  // product model

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        const p = res.data;
        setProduct({
          name: p.title,
          id: p.id,
          img: p.image,
          description: p.description,
          ppu: p.price,
          q,
        });
        setLoading(false);
      })
      .catch((err) => console.warn(err));
  }, [q]);

  const addToCart = (e) => {
    e.preventDefault();
    var p = {
      ...product,
    };
    dispatch(add({ product }));
  };

  return (
    <>
      {loading ? (
        <h1 className="text-center" style={{ margin: "4vw auto" }}>
          Loading
        </h1>
      ) : (
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={product.img}
                  alt="product-image"
                  style={{ width: "60%" }}
                />
              </div>
              <div className="col-md-6">
                <div className="small mb-1">
                  SKU: product-PID-00{product.id}
                </div>
                <h1 className="display-5 fw-bolder">{product.name}</h1>
                <div className="fs-5 mb-5">
                  <span className="text-decoration-line-through text-danger">
                    Rs.{(product.ppu + product.ppu * (1 / 5)) * q}
                    {"  "}
                  </span>
                  <span className="text-success">
                    {" "}
                    Rs. {product.ppu.toFixed(2) * q}
                  </span>
                </div>
                <p className="lead">{product.description}</p>
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    placeholder="1"
                    onChange={(e) => {
                      setQuantity(Number(e.target.value));
                      console.log(Number(e.target.value));
                    }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    onClick={addToCart}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductPage;
