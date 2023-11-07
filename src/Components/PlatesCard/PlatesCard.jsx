import { Link } from "react-router-dom";
import "./Plates.css";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
export const PlatesCard = ({ data, UserData }) => {
  let [fav, setFav] = useState(false);

  function changeBackGround() {
    if (UserData[0] != undefined) {
      setFav(true);
      UserData[0].FavMeals.push(data);
    }
    if (fav) {
      setFav(false);
      let afterDelete = UserData[0].FavMeals.filter((datas) => datas != data);
      UserData[0].FavMeals = [...afterDelete];
    }
  }
  return data == undefined ? (
    <Loading />
  ) : (
    <div className="card">
      <i
        onClick={changeBackGround}
        class={
          fav
            ? "fa-solid bookmark text-warning fa-bookmark"
            : "fa-solid bookmark fa-bookmark"
        }
      ></i>
      <div className="image">
        <img
          src={data.strMealThumb}
          width={"100%"}
          height={"100%"}
          alt="plateImg"
        />
      </div>
      <div className="card-info ">
        <span>{data.strMeal}</span>
      </div>
      <Link to={"/PlateDetails"} className="button mb-1" state={data.idMeal}>
        More...
      </Link>
    </div>
  );
};
