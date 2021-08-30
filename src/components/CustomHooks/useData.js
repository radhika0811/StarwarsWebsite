import { useEffect, useState } from "react";

const useData = (categoryName) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const url = `https://swapi.dev/api/${categoryName}`;
  console.log(url);
  const fetchData = async () => {
    console.log("here");
    const response = await fetch(url);
    console.log("response", response);
    const result = await response.json();
    console.log(result);
    setIsLoaded(true);
    setData([...result.results]);
    console.log("data->", data);
  };
  useEffect(() => {
    fetchData();
  }, [categoryName]);

  console.log(data, "state");
  return [data, isLoaded];
};
export default useData;
