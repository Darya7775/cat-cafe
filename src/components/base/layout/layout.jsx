import React from "react";
import { Outlet } from "react-router-dom";
import Header from "/src/components/base/header/header";
import Footer from "/src/components/base/footer/footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
