import "./App.css";
import Header from "./components/header/header";
import Carousel from "./components/header/carousel";
import Products from "./components/header/products";
import Footer from "./components/header/footer";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  // const [addCart, setAddCart] = useState("Add to Cart");

  const [cartItems, setCartItems] = useState([]);

  const handleCart = (productId) => {
    // e.preventDefault();
    // setAddCart("Remove from Cart");
    // setCartCount(cartCount + 1);

    if (cartItems.includes(productId)) {
      // setAddCart("Remove from Cart");
      setCartCount(cartCount - 1);
      setCartItems((items) => items.filter((item) => item !== productId));
    } else {
      // setAddCart("Add to Cart");

      setCartCount(cartCount + 1);
      setCartItems([...cartItems, productId]);
    }
    // console.log(id);
  };
  // console.log(cartItems);

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Carousel />
      <Products
        handleCart={handleCart}
        // addCart={addCart}
        cartItems={cartItems}
      />
      <Footer />
    </div>
  );
}

export default App;
