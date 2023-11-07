import React from "react";
import NavScrollExample from "../Nav/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  return (
    <>
      <NavScrollExample />
      <Outlet></Outlet>
      <Footer/>
    </>
  );
};
