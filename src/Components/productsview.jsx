const Productview = ({ products }) => {
  return (
    <>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Check Our Products</h2>
                <span>Awesome & Creative HTML CSS layout by TemplateMo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {products && products.length > 0 ? (
              products.map((item) => (
                <div className="col-lg-4" key={item.productId}>
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <a href="single-product.html">
                              <i className="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <i className="fa fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="down-content">
                      <h4>{item.productName}</h4>
                      <span>{item.productPrice}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-lg-12">
                <p>No products found. Add your first product!</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Productview;
