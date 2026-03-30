import { Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<Singleproduct />} />
    </div>
  );
};

export default App;
