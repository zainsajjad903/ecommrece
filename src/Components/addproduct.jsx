import React from "react";
import ProductForm from "../Productform";

const Addproduct = (props) => {
  function fetchProduct(Formproduct) {
    props.getproduct(Formproduct);
  }
  return (
    <div>
      <ProductForm fetchProduct={fetchProduct} />
    </div>
  );
};
export default Addproduct;
