// import components
import CartCard from "../components/Cards/CartCard";
import Img1 from "../assets/img/bg-showcase-1.jpg";

// sample data
const productInCart = [
  {
    name: "Product - 1",
    description: "lorem10asdafasfkdakhad afdsfs gfd g",
    q: 2,
    ppu: 12,
  },
  {
    name: "Product - 2",
    description: "lorem10asdafasfkdakhad afdsfs gfd g",
    q: 3,
    ppu: 12,
  },
];

const Cart = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mt-3">
            {productInCart.map((product, index) => (
              <div className="col-12">
                <CartCard
                  img={Img1}
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
};

export default Cart;
