import React from "react";
import Car from "../images/car.jpg";
import Cart from "../images/cart.png";
import "./Home.css";
function Home(props) {
 
  console.warn("Home :*******",props.cardData)
  return (
    <div>
      <div className="add-to-cart">
        <img src={Cart}/>
      </div>
      <h1> Best car rankings</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img src={Car}/>
        </div>
        <div className="text-wrapper">
          <span> Iphone</span>
          <span> Price: $1000</span>
        </div>
        <div className="btn-wrapper">
          <button onClick={()=>
            props.addToCartHandler({price:1000,name:"volvo"})}> Add To Cart</button>
        </div>
      </div>
      </div>
    
  );
}
export default Home;
