import React from "react";
import ProductForm from "./productform";

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
