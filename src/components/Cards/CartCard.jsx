// importing react hook
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { remove, incrementQuantity } from "../../redux/slice/Cart.slice";

const CartCard = ({ img, name, price, q }) => {
  // states
  const [quantity, setQuantity] = useState(q);

  // redux
  const dispatch = useDispatch();

  // increment quantity
  const increment = (e) => {
    dispatch(incrementQuantity({ name }));
  };

  // remove from cart
  const removeFromCart = (e) => {
    e.preventDefault();
    dispatch(remove({ name }));
  };

  // useEffect hook
  useEffect(() => setQuantity(q), []);

  // incr and decr
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
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
              width: "18rem",
              height: "auto",
              padding: "2rem",
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
            <b>Total: Rs. </b>
            <i className="text-success h6">{quantity * price}</i>
          </p>
          <hr />
          <div className="row">
            <button className="col-2 btn btn-success" onClick={increment}>
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
            <button className="col-2 btn btn-danger" onClick={removeFromCart}>
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
