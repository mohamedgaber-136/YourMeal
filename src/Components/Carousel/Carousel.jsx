// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import "./carousel.css";
import { useContext } from "react";
import { ResStore } from "../../Context/RestaurantStore";
const Carousel = () => {
  let { categNames } = useContext(ResStore);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
       
        modules={[FreeMode]}
        className="mySwiper"
      >
        {categNames.map((ele, ind) => (
          <SwiperSlide key={ind} className="CaroselItem">
            <img src={ele.strCategoryThumb} alt="carouselImg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Carousel;
