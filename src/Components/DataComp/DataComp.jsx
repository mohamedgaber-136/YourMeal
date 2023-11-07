import Card from "../Card/Card";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlatesCard } from "../PlatesCard/PlatesCard";

const DataComp = ({ categNames, singleCateg }) => {
  let { categName } = useParams();
  let [data, setdata] = useState([]);
  let [zolfa, setZolfa] = useState(true);
  let [UserData, setUserData] = useState([]);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("userData")) != null) {
      setUserData(JSON.parse(sessionStorage.getItem("userData")));
    }
  }, []);
  useEffect(() => {
    if (categName == "All" || categName == undefined) {
      setdata(categNames);
      setZolfa(true);
    } else {
      setdata(singleCateg);
      setZolfa(false);
    }
  });
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="d-flex gap-2  p-2 justify-content-center align-content-center flex-wrap CardsContainer">
        {data.map((element, ind) =>
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
