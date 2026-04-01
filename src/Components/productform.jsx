import { useState } from "react";

const ProductForm = (props) => {
  let [productName, updateProductName] = useState("");
  let [productPrice, updateProductPrice] = useState("");
  let [productImage, updateProductImage] = useState("");

  function getProductName(event) {
    updateProductName(event.target.value);
  }

  function getProductPrice(event) {
    updateProductPrice(event.target.value);
  }

  function getProductImage(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      updateProductImage(URL.createObjectURL(file));
    }
  }

  function SaveProduct(event) {
    event.preventDefault();

    const productItem = {
      productId: Date.now(),
      productName,
      productPrice,
      productImage,
    };

    if (props.fetchProduct) {
      props.fetchProduct(productItem);
    }

    updateProductName("");
    updateProductPrice("");
    updateProductImage("");
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
