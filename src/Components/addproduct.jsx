import React from "react";
import ProductForm from "../Productform";

const Addproduct = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((item) => {
          return (
            <div className="col-lg-4" key={item.productId}>
              <div className="item">
                <div className="down-content">
                  <h4>{item.productName}</h4>
                  <span>{item.productPrice}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Addproduct;
