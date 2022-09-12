import React  from "react";
import Products from "./products";


const Home = () => {
 
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <div
          className="card-img-overlay d-flex flex-column
         justify-content-center"
        >
          <div className="container">
            <p className="card-text lead fs-2">Check Out All The Trends</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;