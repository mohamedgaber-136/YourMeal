import Card from "../Card/Card";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PlatesCard } from "../PlatesCard/PlatesCard";
import { ResStore } from "../../Context/RestaurantStore";
import axios from "axios";

const DataComp = ({ categNames }) => {
  let { categName } = useParams();
  let [data, setdata] = useState([]);
  let [zolfa, setZolfa] = useState(true);
  let [UserData, setUserData] = useState([]);
let [singleCateg,setsingleCateg] =useState([]);
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("userData")) != null) {
      setUserData(JSON.parse(sessionStorage.getItem("userData")));
    }
  }, []);
  const SingleCategory = async () => {
    let res = await axios.get(
      ` https://www.themealdb.com/api/json/v1/1/filter.php?c=${categName}`
    );
    let { data } = res;
    let response = data.meals;
    setsingleCateg(response);
  };
  useEffect(() => {
    if (categName == "All" || categName == undefined) {
      setdata(categNames);
      setZolfa(true);
    } else {
      setdata(SingleCategory);
      setZolfa(false);
    }
  },[categName]);
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="d-flex gap-2  p-2 justify-content-center align-content-center flex-wrap CardsContainer">
        {singleCateg.map((element, ind) =>
          zolfa ? (
            <Card data={element} key={ind} />
          ) : (
            <PlatesCard data={element} key={ind} UserData={UserData} />
          )
        )}
      </div>
    </div>
  );
};
export default DataComp;
