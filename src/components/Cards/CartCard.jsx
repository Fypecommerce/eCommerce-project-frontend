// importing react hook
import { useEffect } from "react";
import { useState } from "react";

const CartCard = ({ img, name, price, q }) => {
  // states
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState([]);

  // useEffect hook
  useEffect(() => setQuantity(q), []);

  // incr and decr
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const removeProduct = () => {};
  return (
    <div className="card" style={{ width: "90vw", margin: "2vw auto" }}>
      <div
        className="card-horizontal"
        style={{
          display: "flex",
          flex: "1 1 auto",
        }}
      >
        <div
          className="img-square-wrapper"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="container img-fluid"
            src={img}
            alt="Card image cap"
            style={{
              width: "22rem",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <b>Product: </b>
            {name}
          </h4>
          <hr />
          <p className="card-text">
            <b>Quantity: </b>
            {quantity}
          </p>
          <p className="card-text">
            <b>Total: $ </b>
            <i className="text-success h6">{quantity * price}</i>
          </p>
          <hr />
          <div className="row">
            <button
              className="col-2 btn btn-success"
              onClick={incrementQuantity}
            >
              Add 1 more
            </button>
            <div className="col-1"></div>
            <button
              className="col-2 btn btn-warning"
              onClick={decrementQuantity}
            >
              Remove 1 more
            </button>
            <div className="col-1"></div>
            <button className="col-2 btn btn-danger" onClick={removeProduct}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Added about a minute ago</small>
      </div>
    </div>
  );
};

export default CartCard;
