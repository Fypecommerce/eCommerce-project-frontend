// redux
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/slice/Cart.slice";
import { Link } from "react-router-dom";

const Product = ({ id, img, name, description, price }) => {
  // product detail
  const product = {
    id,
    img,
    name,
    description,
    ppu: price,
    q: 1,
  };

  // redux
  const dispatch = useDispatch();

  // adding to cart
  const addToCart = (e) => {
    e.preventDefault();
    dispatch(
      add({
        product,
      })
    );
  };

  // remove from cart
  const removeFromCart = (e) => {
    e.preventDefault();
    dispatch(
      remove({
        product,
      })
    );
  };

  return (
    <Link to={`/product/${id}`}>
      <div
        className="card"
        style={{
          width: "22rem",
          margin: "4vw auto",
          height: "32rem",
          color: "#000",
          textDecoration: "none",
        }}
      >
        <img
          className="card-img-top"
          src={img}
          alt="Card image cap"
          style={{
            width: "16rem",
            height: "16rem",
            objectFit: "contain",
            margin: "1rem auto",
          }}
        />
        <div className="card-body">
          <p className="card-title">{name.slice(0, 18)}...</p>
          <h6 className="card-title">Rs. {price}</h6>
          <p className="card-text">{description.slice(0, 50)}...</p>
          <a className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </a>
        </div>
      </div>
    </Link>
  );
};

export default Product;
