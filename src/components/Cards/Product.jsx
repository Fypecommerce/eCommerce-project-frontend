const Product = ({ id, img, name, description, price }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card">
            <img className="card-img" src={img} alt="product-img" />
            <div className="card-img-overlay d-flex justify-content-end">
              <a
                href="#"
                className="card-link text-danger like"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="fas fa-heart"></i>
              </a>
            </div>
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">
                Product ID: {id}
              </h6>
              <p className="card-text">{description}. </p>
              <div className="buy d-flex justify-content-between align-items-center">
                <div className="price text-success">
                  <h5 className="mt-4">${price}</h5>
                </div>
                <a href="#" className="btn btn-danger mt-3">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
