import ProductItem from "./Productitem";
import Filterproduct from "./Filterproduct";
const ProductArea = (props) => {
  console.log(props.productInfo);
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
              <Filterproduct />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {props.productInfo.map((product) => (
            <ProductItem
              key={product.productId}
              pID={product.productId}
              pName={product.productName}
              pPrice={product.productPrice}
              pImage={product.productImage}
            />
          ))}
          <div className="col-lg-12">
            <div className="pagination">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductArea;
