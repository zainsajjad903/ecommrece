import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import productsview from "../Components/productsview.jsx";
import ProductForm from "../Components/productform";
import Addproduct from "../Components/productsview";
const Product = () => {
  let [newproducts, updateProducts] = useState([null]);
  function getproduct(get_product) {
    updateProducts(get_product);
    console.log("this is product page", get_product);
  }
  return (
    <>
      <Navbar />
      <Addproduct getproduct={getproduct} />
      <productsview products={newproducts} />
      <ProductForm />
      <Footer />
    </>
  );
};
export default Product;
