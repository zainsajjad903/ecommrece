import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import ProductForm from "../Components/productform";
import Addproduct from "../Components/productsview";
const Product = () => {
  function getproduct(get_product) {
    console.log("this is product page", get_product);
  }
  return (
    <>
      <Navbar />
      <Addproduct getproduct={getproduct} />
      <ProductForm />
      <Footer />
    </>
  );
};
export default Product;
