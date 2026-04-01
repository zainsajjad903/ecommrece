import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import ProductArea from "../Components/ProductArea";
import AddProduct from "../Components/AddProduct";
let Item = [
  {
    productId: 2,
    productName: "Classic Spring",
    productPrice: "$120.00",
    productImage: "assets/images/men-01.jpg",
  },

  {
    productId: 3,
    productName: "Air Force 1 X",
    productPrice: "$90.00",
    productImage: "assets/images/men-02.jpg",
  },
  {
    productId: 4,
    productName: "Love Nana ‘20",
    productPrice: "$150.00",
    productImage: "assets/images/men-03.jpg",
  },
  {
    productId: 5,
    productName: "New Green Jacket",
    productPrice: "$75.00",
    productImage: "assets/images/women-01.jpg",
  },

  {
    productId: 6,
    productName: "Classic Dress",
    productPrice: "$45.00",
    productImage: "assets/images/women-02.jpg",
  },
  {
    productId: 7,
    productName: "Spring Collection",
    productPrice: "$130.00",
    productImage: "assets/images/women-03.jpg",
  },
  {
    productId: 8,
    productName: "School Collection",
    productPrice: "$80.00",
    productImage: "assets/images/kid-01.jpg",
  },

  {
    productId: 9,
    productName: "Summer Cap",
    productPrice: "$12.00",
    productImage: "assets/images/kid-02.jpg",
  },
  {
    productId: 10,
    productName: "Classic Kid",
    productPrice: "$30.00",
    productImage: "assets/images/kid-03.jpg",
  },
];

const Product = () => {
  let [productInfo, updateInfo] = useState(Item);

  function onCreateProduct(product) {
    updateInfo([product, ...Item]);
  }
  return (
    <>
      <Navbar />
      <ProductArea productInfo={productInfo} />
      <AddProduct onCreateProduct={onCreateProduct} />
      <Footer />
    </>
  );
};

export default Product;
