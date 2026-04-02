import { useState } from "react";

const ProductForm = (props) => {
  let [productName, updateName] = useState("");
  let [productPrice, updatePrice] = useState("");
  let [productImage, updateImage] = useState("");
  let [productstatus, updateStatus] = useState("false");
  function getProductName(event) {
    updateName(event.target.value);
  }

  function getProductPrice(event) {
    updatePrice(event.target.value);
  }

  function getProductImage(event) {
    updateImage(event.target.value);
  }
  function getProductstatus(event) {
    updateStatus(event.target.checked);
  }

  function SaveProduct(event) {
    event.preventDefault();
    console.log(productstatus);

    let Product = {
      productId: Date.now(),
      productName: productName,
      productPrice: productPrice,
      productImage: productImage,
      productstatus: Boolean(productstatus),
    };

    props.getProduct(Product);
    console.log(Product);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form onSubmit={SaveProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={getProductName}
                  value={productName}
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={getProductPrice}
                  value={productPrice}
                />
              </div>
              <div className="form-group">
                <label>Product image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={getProductImage}
                />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Check me out</label>
              </div>
              <div className="form-group">
                <label>Active status</label>
                <input
                  type="checkbox"
                  className="form-control"
                  checked={productstatus}
                  onChange={getProductstatus}
                  value={productstatus}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
