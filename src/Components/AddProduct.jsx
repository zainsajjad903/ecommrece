import ProductForm from "./productform";
const AddProduct = (props) => {
  function getProduct(newProduct) {
    props.onCreateProduct(newProduct);
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col_4">
            <ProductForm getProduct={getProduct} />
          </div>
        </div>
      </div>
    </>
  );
};
export default AddProduct;
