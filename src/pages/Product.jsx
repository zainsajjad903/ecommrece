import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductForm from "../Components/productform";
import Productview from "../Components/productsview";
const Product = () => {
  const [products, updateProducts] = useState([]);

  function getProducts(get_product) {
    updateProducts(get_product);
  }
  return (
    <>
      <Navbar />
      <Productview products={products} />
      <ProductForm fetchProduct={getProducts} />

      <Footer />
    </>
  );
};

export default Product;
