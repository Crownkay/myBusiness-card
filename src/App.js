import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>

      <Product
        name="Amazon Echo"
        description="Your AI assistance"
        price="59.99"
      />
      <Product
        name="iPhone 13"
        description="Best iPhone"
        price="1200"
      />
      <Product
        name="MacBook"
        description="Your Best Computer"
        price="2500"
      />
      {/* Product.name.description */}
    </div>
  );
}

export default App;
