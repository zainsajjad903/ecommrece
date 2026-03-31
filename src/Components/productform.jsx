import { useState } from "react";

const ProductForm = (props) => {
  let [productName, updateProductName] = useState("");
  // let [productCategory,updateProductCategory]=useState('')
  let [productPrice, updateProductPrice] = useState("");
  let [productImage, updateProductImage] = useState("");

  function getProductName(event) {
    updateProductName(event.target.value);
  }

  // function getProductCategory(event){
  //     updateProductCategory(event.target.value)
  // }

  function getProductPrice(event) {
    updateProductPrice(event.target.value);
  }

  function getProductImage(event) {
    updateProductImage(event.target.value);
  }

  function SaveProduct(event) {
    event.preventDefault();

    let productItem = {
      productId: 1,
      productName: productName,
      productPrice: productPrice,
      productImage: productImage,
    };

    props.onAddProduct(productItem);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col=6 mx-auto">
            <form onSubmit={SaveProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={getProductName}
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={getProductPrice}
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
