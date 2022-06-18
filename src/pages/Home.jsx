// importing assets
import Img1 from "../assets/img/bg-showcase-1.jpg";
import Img2 from "../assets/img/bg-showcase-2.jpg";
import Img3 from "../assets/img/bg-showcase-3.jpg";
import t1 from "../assets/img/testimonials-1.jpg";
import t2 from "../assets/img/testimonials-2.jpg";
import t3 from "../assets/img/testimonials-3.jpg";

const Home = () => {
  return (
    <>
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">
                  Let's get shopping, with <b>Fype Ecommerce</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary"></i>
                </div>
                <h3>Fast Website</h3>
                <p className="lead mb-0">
                  We use React18 to deliver fast and dynamic content.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary"></i>
                </div>
                <h3>Genuine Brands</h3>
                <p className="lead mb-0">
                  We maintain adequate level of QA for genuinity.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary"></i>
                </div>
                <h3>High Quality</h3>
                <p className="lead mb-0">
                  We make sure you shop for only high quality products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: `url(${Img1})` }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>Authentic Brands</h2>
              <p className="lead mb-0">
                When you ushop with us, you know that the products will look as
                they are, geneuine, whether it's a phone, tablet, or desktop the
                product will be authentically branded!
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 text-white showcase-img"
              style={{ backgroundImage: `url(${Img2})` }}
            ></div>
            <div className="col-lg-6 my-auto showcase-text">
              <h2>2 year Guarantee on Electronics</h2>
              <p className="lead mb-0">
                Newly improved, and full of great brands and types, electronics
                on fype Ecommerce is leading the way in online electronics
                shopping !
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div
              className="col-lg-6 order-lg-2 text-white showcase-img"
              style={{ backgroundImage: `url(${Img3})` }}
            ></div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
              <h2>1000+ Fashion Brands</h2>
              <p className="lead mb-0">
                Our fashion collection is a great place for users who demand
                some deeper customization options in their wardrobe. Out of the
                box, just trust us, and shop!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={t1}
                  alt="..."
                />
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">
                  "The offers here so tempting! I love it!!"
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={t2}
                  alt="..."
                />
                <h5>Fred S.</h5>
                <p className="font-weight-light mb-0">
                  "Genuine products with reliable delivery.... That's
                  comforting!"
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src={t3}
                  alt="..."
                />
                <h5>Sarah W.</h5>
                <p className="font-weight-light mb-0">
                  "Always discounts available to avail when shopping..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
