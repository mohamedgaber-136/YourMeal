import photoTwo from "./pexels-on-shot-2788792.jpg";
import "./ResCarousel.css";
export const ResCarousel = () => {
  return (
    <div className="CarouselParentRest ">
      <div
        className=" Carouselchild d-flex justify-content-center text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)) ,url(${photoTwo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex !important",
          alignItems: "flex-start",
          height: "400px",
        }}
      >
        <div className=" carouselGrandChild d-flex text-white flex-column justify-content-center align-items-center h-100 w-75">
          <h3>
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h3>
          <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate trideta storacalaperda
            mastiro dolore eu fugiat nulla pariatur
          </p>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
    </div>
  );
};
