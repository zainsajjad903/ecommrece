import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductForm from "../Components/productform";
import Productview from "../Components/Productsview";
const Product = () => {
  const [products, setNewProducts] = useState([]);

  const handleAddProduct = (product) => {
    console.log("this is product page", product);
    setNewProducts((prevent) => [...prevent, product]);
  };

  return (
    <>
      <Navbar />
      <Productview products={products} />
      <ProductForm fetchProduct={handleAddProduct} />

      <Footer />
    </>
  );
};

export default Product;
