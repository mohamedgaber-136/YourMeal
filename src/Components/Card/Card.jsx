import React from "react";
import "./Card.css";
import { BsStarFill } from "react-icons/bs";
const Card = ({data}) => {
  return (
    <div className="cardContainer">
      <div className="mainCard d-flex flex-column">
        <div className="top">
            <img src={data.strCategoryThumb} alt="CardProduct" width={'100%'} height={'100%'}  />
        </div>
        <div className="bottom bg-dark d-flex flex-column justify-content-center align-items-center">
          <div className="productTitle text-center text-white ">
            <p>{data.strCategory}</p>
            <div className="d-flex gap-2 align-items-center justify-content-center">
              <div className="d-flex gap-2">
                <BsStarFill className="text-warning star" />
                <BsStarFill className="text-warning star" />
                <BsStarFill className="text-warning star" />
                <BsStarFill className="text-warning star" />
                <BsStarFill className="text-dark star" />
              </div>
              <div>
                <p className="bottomPara text-white m-0">Rate(128 <span className="text-warning">review</span> )</p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
    
  );
};
export default Card;
