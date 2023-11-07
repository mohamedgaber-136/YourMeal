import React, { useContext } from "react";
import photo from "./pexels-igor-starkov-914388.jpg";
import gifPhoto from "./animation_lnxssbsj_small.gif";
import {BsStarFill} from 'react-icons/bs'
import "./header.css";
import { ResStore } from "../../Context/RestaurantStore";
export const Header = () => {
  let data = useContext(ResStore)
  return (
    <header className="headerParent flex-column d-flex  justify-content-center align-items-center flex-md-row">
      <div className="headerLeftSide  d-flex justify-content-center align-items-center ">
        <div className="headTitle     text-center d-flex align-items-center justify-content-center flex-column">
          <p>
            Although the skills aren’t hard to learn, finding the happiness and
            finding the satisfaction and finding fulfillment in continuously
            serving somebody else something good to eat, is what makes a really
            good restaurant.”
          </p>
          <div className='GifContent gap-2 flex-column flex-md-row justify-content-center align-items-center d-flex'>
            <div>
            <p className='m-0'>Tips&Rate</p>
            <div className='d-flex gap-2'>
              <BsStarFill className='text-warning star'/>
              <BsStarFill className='text-warning star'/>
              <BsStarFill className='text-warning star'/>
              <BsStarFill className='text-warning star'/>
              <BsStarFill className='text-dark star'/>  
            </div>
            </div>

          <div
            className="gifContainer rounded-circle"
            style={{ backgroundImage: `url(${gifPhoto})` }}
          ></div>
          </div>
        </div>
      </div>
      <div className="headerRightSide d-flex justify-content-center align-items-center">
        <div className="imgContainer ">
          <div className="container noselect">
            <div className="canvas">
              <div className="tracker tr-1"></div>
              <div className="tracker tr-2"></div>
              <div className="tracker tr-3"></div>
              <div className="tracker tr-4"></div>
              <div className="tracker tr-5"></div>
              <div className="tracker tr-6"></div>
              <div className="tracker tr-7"></div>
              <div className="tracker tr-8"></div>
              <div className="tracker tr-9"></div>
              <div className="tracker tr-10"></div>
              <div className="tracker tr-11"></div>
              <div className="tracker tr-12"></div>
              <div className="tracker tr-13"></div>
              <div className="tracker tr-14"></div>
              <div className="tracker tr-15"></div>
              <div className="tracker tr-16"></div>
              <div className="tracker tr-17"></div>
              <div className="tracker tr-18"></div>
              <div className="tracker tr-19"></div>
              <div className="tracker tr-20"></div>
              <div className="tracker tr-21"></div>
              <div className="tracker tr-22"></div>
              <div className="tracker tr-23"></div>
              <div className="tracker tr-24"></div>
              <div className="tracker tr-25"></div>
              <div id="card" style={{ backgroundImage: `url(${photo})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
