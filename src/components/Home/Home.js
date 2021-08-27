import React, { Suspense } from "react";
import Planet from "./Internals/Planet";
import Films from "./Internals/Films";
import Vehicle from "./Internals/Vehicle";
const Home = ({handleCategorySearch}) => {
  
  return (
    <div className="home-page">
      <h1 className="home">Home</h1>
      <div className="main-box">
        <div className="box">
          <h1>Planet</h1>
          <Planet />
          <button
            className="btn-more"
            onClick={() => handleCategorySearch("planets")}
          >
            View All
          </button>
        </div>
        <div className="box">
          <h1>Films</h1>
          <Films />
          <button
            className="btn-more"
            onClick={() => handleCategorySearch("films")}
          >
            View All
          </button>
        </div>
        <div className="box">
          <h1>Vehicle</h1>
          <Vehicle />
          <button
            className="btn-more"
            onClick={() => handleCategorySearch("vehicles")}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
