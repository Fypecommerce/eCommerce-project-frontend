const Product = ({ img, name, description, price }) => {
  return (
    <div
      className="card"
      style={{ width: "22rem", margin: "4vw auto", height: "32rem" }}
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
        <h6 className="card-title">$ {price}</h6>
        <p className="card-text">{description.slice(0, 50)}...</p>
        <a href="#" className="btn btn-primary">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Product;
