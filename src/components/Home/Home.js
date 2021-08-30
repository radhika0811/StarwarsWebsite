import React from "react";
import Planets from "./Categories/Planets";
import { useHistory } from "react-router-dom";
import Vehicles from "./Categories/Vehicles";
import Movies from "./Categories/Movies";

const Home = () => {
  const history = useHistory();
  function handleButtonClick(category) {
    history.push(`/search/${category}`);
  }
  return (
    <div className="home-page">
      <h1 className="home">Home</h1>
      <div className="main-box">
        <div className="box">
          <h1>Planet</h1>
          <Planets />
          <button
            className="btn-more"
            onClick={() => handleButtonClick("planets")}
          >
            View All
          </button>
          ;
        </div>
        <div className="box">
          <h1>Films</h1>
          <Movies />
          <button
            className="btn-more"
            onClick={() => handleButtonClick("films")}
          >
            View All
          </button>
          ;
        </div>
        <div className="box">
          <h1>Vehicle</h1>
          <Vehicles />
          <button
            className="btn-more"
            onClick={() => handleButtonClick("vehicles")}
          >
            View All
          </button>
          ;
        </div>
      </div>
    </div>
  );
};

export default Home;
