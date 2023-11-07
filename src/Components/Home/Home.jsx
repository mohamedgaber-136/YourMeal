import React from "react";
import { Header } from "../Header/Header";
import MainContent from "../Main/MainContent";
import Carousel from "../Carousel/Carousel";
import WorkingDates from "../WorkingDates/WorkingDates";
import { ResCarousel } from "../ResCarousel/ResCarousel";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <MainContent />
      <WorkingDates />
      <ResCarousel />
    </>
  );
};
export default Home;
