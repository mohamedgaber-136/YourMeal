import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./plateDetail.css";
const PLateDetails = () => {
  let idInfo = useLocation();
  let [plate, setPLate] = useState({});
  let [VideoId, setVideoId] = useState("");
  const plateData = async () => {
    let res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idInfo.state}`
    );
    setPLate(res.data.meals[0]);
    setVideoId(res.data.meals[0].strYoutube.split("=")[1]);
  };
  useEffect(() => {
    plateData();
  }, []);

  return (
    <div className="d-flex flex-column">
      <div className="plateParent  flex-column flex-md-row   justify-content-between  d-flex ">
        <div
          className="leftSide "
          style={{
            backgroundImage: `url(${plate.strMealThumb})`,
            backgroundPosition: "center",

            filter: "brightness(75%)",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="PlateDataContent bg-dark   d-flex justify-content-center ">
          <div className=" content   text-white  d-flex justify-content-center flex-column align-items-center   ">
            <div className="d-flex text-white justify-content-center flex-column align-items-center">
              <h3>
                <span className="TitleDetail">City</span> Of PLate :{" "}
                {plate.strArea}
              </h3>
              <h4>
                <span className="TitleDetail">Cate</span>gory :{" "}
                {plate.strCategory}
              </h4>
              <h5>
                <span className="TitleDetail">The-</span>Meal : {plate.strMeal}
              </h5>
              <p className="m-0 text-center">
                <span className="TitleDetail">M</span>eal instruction :{" "}
                {plate.strInstructions}
              </p>
              <h2 className="TitleDetail">Enjoy</h2>
            </div>
            <div className="w-100 h-100 "></div>
          </div>
        </div>
      </div>
      <iframe
  width="100%"
  height="200"
  src={`https://www.youtube.com/embed/${VideoId}`}
  title="OneRepublic - Secrets (Official Music Video)"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe>
    </div>
  );
};
export default PLateDetails;

