import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductForm from "../Components/productform";
import Addproduct from "../Components/productsview";

const Product = () => {
  const [newproducts, setNewProducts] = useState([]);

  const handleAddProduct = (product) => {
    console.log("this is product page", product);
    setNewProducts((prevent) => [...prevent, product]);
  };

  return (
    <>
      <Navbar />
      <Addproduct products={newproducts} />
      <ProductForm fetchProduct={handleAddProduct} />

      <Footer />
    </>
  );
};

export default Product;
