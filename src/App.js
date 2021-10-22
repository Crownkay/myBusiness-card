import React from "react";
import Product from "./Product";
import Tick from "./Tick";

function App() {
  
setInterval(Tick, 1000);
  return (
    <div>
      <h1>Hello World!</h1>

      <Product
        name="Amazon Echo"
        description="Your AI assitant"
        price="59.99"
      />
      <Product name="iPhone 13" description="Your best iPhone" price="1200" />
      <Product name="MacBook" description="Your Best computer" price="2500" />
      <Tick/>
    </div>
  );
}

export default App;
