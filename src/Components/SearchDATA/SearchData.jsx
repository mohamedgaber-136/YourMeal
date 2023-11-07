import { useContext, useEffect, useState } from "react";
import { ResStore } from "../../Context/RestaurantStore";
import axios from "axios";
import { PlatesCard } from "../PlatesCard/PlatesCard";
import './searchData.css'

const SearchData = () => {
  let { searchText } = useContext(ResStore);
  console.log(searchText);
  const [data, setData] = useState([]);
  const FoundDataApi = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    );
    setData(data.meals);
  };
  useEffect(() => {
    FoundDataApi();
  }, []);
  return (
    <div className="searchParent">
      <div className="d-flex h-100 px-4 justify-content-center align-items-center ">
        <div className="d-flex  searchChild justify-content-start align-items-center gap-2">

        {data.map((element, ind) => (
            <div className="" key={ind}>
            <PlatesCard data={element}  />
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};
export default SearchData;
