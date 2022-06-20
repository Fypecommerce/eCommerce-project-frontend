// importing react
import { useState } from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  // states
  const [paid, paymentStatus] = useState(false);
  const [err, setError] = useState(null);
  // redux store
  const product = useSelector((state) => state.cart);
  // total
  const totalBill = () => {
    var t = 0;
    for (let i = 0; i < product.length; i++) {
      t += product[i].ppu * product[i].q;
    }
    return t - t / 5;
  };
  return (
    <div className="container d-flex justify-content-center mt-5 mb-5">
      <div className="row g-3">
        <div className="col-md-6">
          <span>Payment Method</span>
          <div className="card">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header p-0" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <span>Paypal</span>
                        <img src="https://i.imgur.com/7kQEsHU.png" width="30" />
                      </div>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Paypal email"
                    />
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header p-0" id="headingTwo">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <span>Cash on Delivery</span>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1554/1554401.png"
                          width="30"
                        />
                      </div>
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Paypal email"
                    />
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header p-0">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-light btn-block text-left p-3 rounded-0"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <span>Credit card</span>
                        <div className="icons">
                          <img
                            src="https://i.imgur.com/2ISgYja.png"
                            width="30"
                          />
                          <img
                            src="https://i.imgur.com/W1vtnOV.png"
                            width="30"
                          />
                          <img
                            src="https://i.imgur.com/35tC99g.png"
                            width="30"
                          />
                          <img
                            src="https://i.imgur.com/2ISgYja.png"
                            width="30"
                          />
                        </div>
                      </div>
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body payment-card-body">
                    <span className="font-weight-normal card-text">
                      Card Number
                    </span>
                    <div className="input">
                      <i className="fa fa-credit-card"></i>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>

                    <div className="row mt-3 mb-3">
                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">
                          Expiry Date
                        </span>
                        <div className="input">
                          <i className="fa fa-calendar"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="MM/YY"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <span className="font-weight-normal card-text">
                          CVC/CVV
                        </span>
                        <div className="input">
                          <i className="fa fa-lock"></i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="000"
                          />
                        </div>
                      </div>
                    </div>

                    <span className="text-muted certificate-text">
                      <i className="fa fa-lock"></i> Your transaction is secured
                      with ssl certificate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <span>Summary</span>

          <div className="card">
            <div className="container">
              <div className="container p-2">
                <h4 className="p-2 text-center">
                  Invoice <i className="fa fa-caret-down"></i>
                </h4>
              </div>
              <hr />
              <div
                className="container"
                style={{ width: "100%", padding: "0.5vw 1vw" }}
              >
                <div className="row">
                  <h6 className="col-6 text-center">Product</h6>
                  <h6 className="col-6 text-center">Amount</h6>
                  <hr />
                  {/* Product */}
                  {product.map((product, index) => (
                    <>
                      <p className="col-6 text-center">{product.name}</p>
                      <p className="col-6 text-right text-center">
                        {product.ppu * product.q}
                      </p>
                      <hr />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-0 line" />

          <div className="p-3">
            <div className="d-flex justify-content-between mb-2">
              <span>Total Dicount</span>
              <span>-Rs 112.00</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>
                Taxes <i className="fa fa-clock-o"></i>
              </span>
              <span>-20%</span>
            </div>
          </div>

          <hr className="mt-0 line" />

          <div className="p-3 d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span>Today you pay(Pak Rupees)</span>
            </div>
            <span>Rs. {totalBill()}</span>
          </div>

          <div className="p-3">
            <button className="btn btn-primary btn-block free-button">
              Proceed
            </button>
            <div className="text-center">
              <a href="#">Have a promo code?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
