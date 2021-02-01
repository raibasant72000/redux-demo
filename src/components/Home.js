import React from "react";
import Car from "../images/car.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1> Home</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img src={Car} />
        </div>
        <div className="text-wrapper">
          <span> Iphone</span>
          <span> Price: $1000</span>
        </div>
        <div className="btn-wrapper">
          <button> Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
