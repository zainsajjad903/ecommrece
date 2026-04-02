import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import ProductArea from "../Components/ProductArea";
import AddProduct from "../Components/AddProduct";
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
];

const Product = () => {
  let [productInfo, updateInfo] = useState(Item);
  let [filterValue, setFilterValue] = useState("all");

  function onCreateProduct(product) {
    updateInfo((prev) => [product, ...prev]);
  }

  function filterProduct(value) {
    setFilterValue(value);
  }

  let filteredProducts = productInfo;
  if (filterValue === "available") {
    filteredProducts = productInfo.filter(
      (product) => product.productstatus === true,
    );
  } else if (filterValue === "unavailable") {
    filteredProducts = productInfo.filter(
      (product) => product.productstatus === false,
    );
  }

  return (
    <>
      <Navbar />
      <ProductArea
        productInfo={filteredProducts}
        filterProduct={filterProduct}
      />
      <AddProduct onCreateProduct={onCreateProduct} />
      <Footer />
    </>
  );
};

export default Product;
