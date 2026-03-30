import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to={"/"} className="logo">
                  <img src="assets/images/logo.png" />
                </Link>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <Link to={"/"} className="active">
                      Home
                    </Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link to={"/men"}>Men's</Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link to={"/women"}>Women's</Link>
                  </li>
                  <li className="scroll-to-section">
                    <Link to={"/kids"}>Kid's</Link>
                  </li>
                  <li className="submenu">
                    <a href="javascript:;">Pages</a>
                    <ul>
                      <li>
                        <Link to={"/about"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/product"}>Products</Link>
                      </li>
                      <li>
                        <Link to={"/single-product"}>Single Product</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="javascript:;">Features</a>
                    <ul>
                      <li>
                        <Link to={"/features/1"}>Features Page 1</Link>
                      </li>
                      <li>
                        <Link to={"/features/2"}>Features Page 2</Link>
                      </li>
                      <li>
                        <Link to={"/features/3"}>Features Page 3</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
