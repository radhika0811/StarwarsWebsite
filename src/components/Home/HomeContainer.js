import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

const HomeContainer = () => {
  function handleButtonClick(category) {
    alert("working");
    <Link to={`/search/${category}`}></Link>;
  }
  return <Home handleButtonClick={handleButtonClick} />;
};

export default HomeContainer;
