import React, { useState, useEffect } from "react";

const useDataDetails = (category, id) => {
  const [details, setDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = `https://swapi.dev/api/${category}/${id}/`;
  console.log(url);
  const fetchData = async () => {
    console.log("here");
    const response = await fetch(url);
    console.log("response", response);
    const result = await response.json();
    console.log(result);
    setIsLoaded(true);
    setDetails(result);
  };
  useEffect(() => {
    fetchData();
  }, [category]);

  console.log(details, "state");
  return [details, isLoaded];
};

export default useDataDetails;
