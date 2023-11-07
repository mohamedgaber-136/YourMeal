import axios from "axios";
import { createContext, useEffect, useState } from "react";
export let ResStore = createContext("");
const ResStoreProvide = (props) => {
  const [categNames, setCategNames] = useState([]);
  const [singleCateg, setsingleCateg] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [categClicked, setCateg] = useState("All");

  const categoriesApi = async () => {
    let res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const categorie = res.data.categories;
    setCategNames(categorie);
  };
  const SingleCategory = async () => {
    let res = await axios.get(
      ` https://www.themealdb.com/api/json/v1/1/filter.php?c=${categClicked}`
    );
    let { data } = res;
    let response = data.meals;
    setsingleCateg(response);
  };
  useEffect(() => {
    if (categClicked != "All") {
      SingleCategory();
    } else {
      categoriesApi();
    }
  }, [categClicked]);

  return (
    <ResStore.Provider
      value={{ categNames, setCateg, singleCateg, setSearchText ,searchText}}
    >
        {props.children}
    </ResStore.Provider>
  );
};
export default ResStoreProvide;
