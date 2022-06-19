import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import components
import CartCard from "../components/Cards/CartCard";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  if (products.length >= 1) {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-3">
              {products.map((product, index) => (
                <div className="col-12">
                  <CartCard
                    img={product.img}
                    name={product.name}
                    description={product.description}
                    price={product.ppu}
                    q={product.q}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  if (products.length === 0) {
    return (
      <div className="container-fluid  mt-100" style={{ margin: "10vh auto" }}>
        <div className="card">
          <div className="card-body cart">
            <div className="col-sm-12 empty-cart-cls text-center">
              <img
                src="https://i.imgur.com/dCdflKN.png"
                width="130"
                height="130"
                className="img-fluid mb-4 mr-3"
              />
              <h3>
                <strong>Your Cart is Empty</strong>
              </h3>
              <h4>Add something to make me happy :)</h4>
              <Link to="/shop">
                <a
                  className="btn btn-primary cart-btn-transform m-3"
                  data-abc="true"
                >
                  continue shopping
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
