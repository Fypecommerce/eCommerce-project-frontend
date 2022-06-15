import { useState } from "react";

// importing assets
import Logo from "../assets/logo.png";

const Navbar = () => {
  // search box text state
  const [searchText, setSearchText] = useState("");
  // cart state
  const [productsInCart, setProductsInCard] = useState(0);
  // login state
  const [username, setUsername] = useState("login");
  // current page state
  const [page, setPage] = useState(0);

  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "shop",
      link: "/shop",
    },
    {
      title: "cart",
      link: "/cart",
    },
  ];

  // return
  return (
    <header className="section-header">
      <nav className="navbar navbar-dark navbar-expand p-0 bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav d-none d-md-flex mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" data-abc="true">
                Cash On Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-abc="true">
                Free Delivery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" data-abc="true">
                Account
              </a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <div className="d-flex flex-row">
                <img
                  src={
                    username === "login"
                      ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      : "https://i.imgur.com/EYFtR83.jpg"
                  }
                  className="rounded-circle"
                  width="30"
                />
              </div>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link d-flex align-items-center"
                data-abc="true"
              >
                <span>{username}</span>
                <i className="bx bxs-chevron-down"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="header-main border-bottom bg-white">
        <div className="container-fluid">
          <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
            <div className="col-md-2">
              <img className="d-none d-md-flex" src={Logo} width="100" />
            </div>
            <div className="col-md-8">
              <div className="d-flex form-inputs">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search any product..."
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <i className="bx bx-search"></i>
              </div>
            </div>

            <div className="col-md-2">
              <div className="d-flex d-none d-md-flex flex-row align-items-center">
                <span className="shop-bag">
                  <i className="bx bxs-shopping-bag"></i>
                </span>
                <div className="d-flex flex-column ms-2">
                  <span className="fw-bold">Cart</span>
                  <span className="qty">{productsInCart} Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-md-none d-md-flex" href="#">
            Categories
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {menuItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className={"nav-link active"}
                    aria-current="page"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
