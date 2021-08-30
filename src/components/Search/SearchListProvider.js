import React from "react";
import { searchListContext } from "../../context";
import { Routes } from "../Router/Routes";

const SearchListProvider = () => {
  const [searchList, setSearchList] = useState(null);
  return (
    <searchListContext.Provider value={{ searchList, setSearchList }}>
      <Routes />
    </searchListContext.Provider>
  );
};

export default SearchListProvider;
