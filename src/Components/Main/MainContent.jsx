import React, { useContext, useState } from "react";
import { ResStore } from "../../Context/RestaurantStore";
import Nav from "react-bootstrap/Nav";
import DataComp from "../DataComp/DataComp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./main.css";
const MainContent = () => {
  let navigation = useNavigate();
  let [activekeys, setActive] = useState("0");
  const handleSelect = (eventKey) => setActive(eventKey)
  const { categNames, setCateg, singleCateg } = useContext(ResStore);
  const activeCondition = (ind) => {
    if (activekeys == ++ind) {
      return "text-dark shadowBtn";
    } else {
      return "radius text-dark";
    }
  };
  function found(element) {
    if (element == "All") {
      setCateg(element);
      navigation(`/category/All`)
    } else {
      setCateg(element.strCategory);
      navigation(`/category/${element.strCategory}`)
    }
  }
  return (
    <div className="my-4">
      <div
        className="d-flex justify-content-center "
        style={{
          textAlign: "center",
          fontSize: "55px",
          color: "green",
        }}
      >
        <svg viewBox="0 0 500 160" width={"400px"}>
          <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath href="#curve">Discover Our Best Menu</textPath>
          </text>
        </svg>
      </div>
      <div className="d-flex justify-content-center">
        <Nav
          variant="pills"
          activeKey={activekeys}
          onSelect={handleSelect}
          className=" justify-content-center NavBtnsParent gap-1 p-2"
        >
          <Nav.Item>
            <Nav.Link eventKey="0" onClick={() => found("All")}>
              <Link to={`/category/All`} className="hiddenUnderline text-dark ">
                All
              </Link>
            </Nav.Link>
          </Nav.Item>
          {categNames.map((element, ind) => (
            <Nav.Item key={ind}>

              <Nav.Link
                onClick={() => found(element)}
                className={activeCondition(ind)}
                eventKey={++ind}
                key={ind}
              >
                {element.strCategory}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
      <DataComp categNames={categNames} singleCateg={singleCateg} />
    </div>
  );
};
export default MainContent;
