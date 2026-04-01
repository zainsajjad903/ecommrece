import ProductItem from "./ProductItem.jsx";

let Item = [
  {
    productId: 1,
    productName: "Classic Spring",
    productPrice: "$120.00",
    productImage: "assets/images/men-01.jpg",
  },

  {
    productId: 2,
    productName: "Air Force 1 X",
    productPrice: "$90.00",
    productImage: "assets/images/men-02.jpg",
  },
  {
    productId: 3,
    productName: "Love Nana ‘20",
    productPrice: "$150.00",
    productImage: "assets/images/men-03.jpg",
  },
  {
    productId: 4,
    productName: "New Green Jacket",
    productPrice: "$75.00",
    productImage: "assets/images/women-01.jpg",
  },

  {
    productId: 5,
    productName: "Classic Dress",
    productPrice: "$45.00",
    productImage: "assets/images/women-02.jpg",
  },
  {
    productId: 6,
    productName: "Spring Collection",
    productPrice: "$130.00",
    productImage: "assets/images/women-03.jpg",
  },
  {
    productId: 7,
    productName: "School Collection",
    productPrice: "$80.00",
    productImage: "assets/images/kid-01.jpg",
  },

  {
    productId: 8,
    productName: "Summer Cap",
    productPrice: "$12.00",
    productImage: "assets/images/kid-02.jpg",
  },
  {
    productId: 9,
    productName: "Classic Kid",
    productPrice: "$30.00",
    productImage: "assets/images/kid-03.jpg",
  },
];

const Product_Area = (props) => {
  console.log(props.newProduct);
  return (
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
          <ProductItem
            pID={Item[0].productId}
            pName={Item[0].productName}
            pPrice={Item[0].productPrice}
            pImage={Item[0].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[1].productId}
            pName={Item[1].productName}
            pPrice={Item[1].productPrice}
            pImage={Item[1].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[2].productId}
            pName={Item[2].productName}
            pPrice={Item[2].productPrice}
            pImage={Item[2].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[3].productId}
            pName={Item[3].productName}
            pPrice={Item[3].productPrice}
            pImage={Item[3].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[4].productId}
            pName={Item[4].productName}
            pPrice={Item[4].productPrice}
            pImage={Item[4].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[5].productId}
            pName={Item[5].productName}
            pPrice={Item[5].productPrice}
            pImage={Item[5].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[6].productId}
            pName={Item[6].productName}
            pPrice={Item[6].productPrice}
            pImage={Item[6].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[7].productId}
            pName={Item[7].productName}
            pPrice={Item[7].productPrice}
            pImage={Item[7].productImage}
          ></ProductItem>
          <ProductItem
            pID={Item[8].productId}
            pName={Item[8].productName}
            pPrice={Item[8].productPrice}
            pImage={Item[8].productImage}
          ></ProductItem>

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

export default Product_Area;
