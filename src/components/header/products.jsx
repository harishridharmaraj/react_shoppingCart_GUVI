import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles.css";

const productData = [
  {
    id: 1,
    name: "Fancy Product",
    price: "40",
    to: "80",
  },
  {
    id: 2,
    name: "Special item",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    slashed: "20",
    price: "18",
  },
  {
    id: 3,
    name: "Sale Item",
    slashed: "50",
    price: "25",
  },
  {
    id: 4,
    name: "Popular Item",
    price: "40",
  },
  {
    id: 5,
    name: "Sale Item",
    slashed: "50",
    price: "25",
  },
  {
    id: 6,
    name: "Fancy Product",
    price: "120",
    to: "280",
  },
  {
    id: 7,
    name: "Special Item",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    slashed: "50",
    price: "18",
  },
  {
    id: 8,
    name: "Popular Item",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    price: "40",
  },
];
const Products = ({ handleCart, addCart, cartItems }) => {
  // const [addCart, setAddCart] = useState("Add to Cart");
  const inCart = (productId) => cartItems.includes(productId);
  // console.log(cartItems);
  // const addtoCart = (e) => {
  //   e.preventDefault();
  //   if (addCart === "Add to Cart") {
  //     setAddCart("Remove from Cart");
  //   } else {
  //     setAddCart("Add to Cart");
  //   }
  // };
  return (
    <div className="container">
      <div
        className="products my-5"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {productData.map((item) => (
          <div className="card" key={item.id}>
            <div className="dummyImage card-img-top">
              <span>450 * 300</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>

              {item.rating && <p>{item.rating}</p>}
              <div style={{ display: "flex", justifyContent: "center" }}>
                {item.slashed && (
                  <p>
                    <s>${item.slashed}.00</s>
                  </p>
                )}

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <p>${item.price}.00</p> {item.to && <p>-${item.to}.00</p>}
                </div>
              </div>
              <a
                href="/"
                className="btn btn-outline-dark atcbtn"
                onClick={(e) => {
                  e.preventDefault();
                  handleCart(item.id);
                }}
              >
                {inCart(item.id) ? "Remove from Cart" : "Add to Cart"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
